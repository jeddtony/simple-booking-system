<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use App\Models\Seat;
use Illuminate\Http\Request;

class VehicleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $vehicles = Vehicle::all();
        return $this->formatSuccessResponse('List of Vehicles', $vehicles);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $validatedData = $request->validate([
            'name' => 'required|max:55',
            'plate_num' => 'required|unique:vehicles',
            'color' => 'required',
            'number_of_seats' => 'required'
            ]);

        $vehicle = Vehicle::create($validatedData);
        for ($i = 0; $i < $request->number_of_seats; $i++){
            Seat::create([
                'vehicle_id' => $vehicle->id,
                'name' => 'seat '.$i
            ]);
        }
        return $this->formatCreatedResponse('Vehicle created', $vehicle);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Vehicle  $vehicle
     * @return \Illuminate\Http\Response
     */
    public function show( $vehicle)
    {
        //
        $vehicle = Vehicle::find($vehicle);
        if(!$vehicle){
            return $this->notFoundResponse('Vehicle not found');
        }

        return $this->formatSuccessResponse('Vehicle details', $vehicle);
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Vehicle  $vehicle
     * @return \Illuminate\Http\Response
     */
    public function edit(Vehicle $vehicle)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Vehicle  $vehicle
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Vehicle $vehicle)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Vehicle  $vehicle
     * @return \Illuminate\Http\Response
     */
    public function destroy(Vehicle $vehicle)
    {
        //
    }
}
 