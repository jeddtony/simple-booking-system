<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use Tests\AuthenticatedTestCase;

class TripTest extends AuthenticatedTestCase
{

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_example()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

      /**
     * A user can create a trip
     *
     * @return void
     */
    public function test_a_user_can_create_a_trip()
    {
        $tripData = [
            "start_location_id" => 1,
            "end_location_id" => 1,
            'start_time' => '2021-07-28'
        ];
        $response = $this->json('POST', 'api/trip', $tripData, ['Accept' => 'application/json'])
        ->assertStatus(201);
        $response->assertStatus(201);
    }

     /**
     * A user cannot create a trip without location
     *
     * @return void
     */
    public function test_a_user_cannot_create_a_trip_without_location()
    {
        $tripData = [
            'start_time' => '2021-07-28'
        ];
       $this->json('POST', 'api/trip', $tripData, ['Accept' => 'application/json'])
        ->assertStatus(422);
    }

     /**
     * A user can get all trips
     *
     * @return void
     */
    public function test_a_user_can_get_all_trips()
    {
       $this->json('GET', 'api/trips')
        ->assertStatus(200);
    }
}
