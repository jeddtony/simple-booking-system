<?php

namespace App\Http\Controllers;

use App\Models\Trip;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TripController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $date = $request->query('date');
        // dd($date);
        if($date){
            $trips = Trip::whereDate('start_time', $date)->
            with('startLocation')->with('endLocation')->get();
            return $this->formatSuccessResponse('List of trips', $trips);
        }
        $trips = Trip::with('startLocation')->with('endLocation')->get();
        return $this->formatSuccessResponse('List of trips', $trips);
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
        $validator = Validator::make($request->all(), [
            'start_location_id' => 'required',
            'end_location_id' => 'required',
            'amount' => 'required',
            'start_time' => 'required'
        ]);
        
        if($validator->fails()) {
            return $this->formatInputErrorResponse($validator->errors());
        }

        $tripData = [
            'start_location_id' => $request->start_location_id,
            'end_location_id' => $request->end_location_id,
            'amount' => $request->amount,
            'start_time' => $request->start_time
        ];

        $trip = Trip::create($tripData);
        return $this->formatCreatedResponse('Trip created', $trip); 

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Trip  $trip
     * @return \Illuminate\Http\Response
     */
    public function show(Trip $trip)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Trip  $trip
     * @return \Illuminate\Http\Response
     */
    public function edit(Trip $trip)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Trip  $trip
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Trip $trip)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Trip  $trip
     * @return \Illuminate\Http\Response
     */
    public function destroy(Trip $trip)
    {
        //
    }
}
