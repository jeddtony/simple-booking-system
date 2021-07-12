<?php

namespace Tests\Feature;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

// use PHPUnit\Framework\TestCase;

class VehicleTest extends TestCase
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
     * A user can create a vehicle.
     *
     * @return void
     */
    public function test_user_can_create_vehicle() {
        // $user = factory(User::class)->create();
        $user = User::factory()->create();
        $this->actingAs($user, 'api');

        $storeVehicle = [
            'name' => 'First Vehicle',
            'plate_num' => 'kddjjdj',
            'color' => 'brown',
            'number_of_seats' => 2
        ];

        $this->json('POST', 'api/vehicle', $storeVehicle ,
        [ 'Accept' => 'application/json']
            )
            ->assertStatus(201);
            // ->assertJson([
            //     "status" => true,
            //     "message" => "Vehicle created",
            //     "data" => [
            //         'name' => 'First Vehicle',
            //         'plate_num' => 'kddjjdj',
            //         'color' => 'brown',
            //         'number_of_seats' => 2
            //     ],
            //     "message" => "Vehicle created"
            // ]);
    }

    
}
