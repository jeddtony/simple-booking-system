<?php

namespace Tests\Unit;

use App\Models\Seat;
use App\Models\Vehicle;
use Illuminate\Database\Eloquent\Factories\Factory;
// use PHPUnit\Framework\TestCase;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;

class VehicleTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_example()
    {
        $this->assertTrue(true);
    }

    //  /**
    //  * A vehicle has seats.
    //  *
    //  * @return void
    //  */
    // public function test_a_vehicle_has_seats()
    // {

    //     $vehicle = Vehicle::factory()->create();
    //     // $vehicle = factory(Vehicle::class)->create();
    //     // dd($vehicle);
    //     response()->assertSee($vehicle->num_of_seats, true);
    // }
}
