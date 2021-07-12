<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\AuthenticatedTestCase;
use App\Models\State;

class LocationTest extends AuthenticatedTestCase
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
     * A user can create a location
     *
     * @return void
     */
    public function test_a_user_can_create_a_location()
    {
        $state = State::factory()->create();
        $tripData = [
            "name" => 'Yaba',
            "state_id" => $state->id,
        ];
        $response = $this->json('POST', 'api/location', $tripData, ['Accept' => 'application/json'])
        ->assertStatus(201);
        $response->assertStatus(201);
    }

        /**
     * A user cannot create a location without name
     *
     * @return void
     */
    public function test_a_user_cannot_create_a_location_without_name()
    {
        $tripData = [
            "state_id" => 1,
        ];
         $this->json('POST', 'api/location', $tripData, ['Accept' => 'application/json'])
        ->assertStatus(422);
        
    }

       /**
     * A user cannot create a location without an existing state
     *
     * @return void
     */
    public function test_a_user_cannot_create_a_location_without_an_existing_state()
    {
        $tripData = [
            "name" => 'Yaba',
            "state_id" => 4,
        ];
         $this->json('POST', 'api/location', $tripData, ['Accept' => 'application/json'])
        ->assertStatus(422);
        
    }

}
