<?php

namespace App\Http\Controllers;

use App\Models\TripDestination;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TripDestinationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
                'start_location' => 'required | unique:locations',
                'end_location' => 'required | unique:locations',
                'duration_in_hours' => 'required'
            ]);

            if($validator->fails()) {
                return $this->formatInputErrorResponse($validator->errors());
            }

            $tripData = [
                'start_location' => $request->start_location,
                'end_location' => $request->end_location,
                'duration_in_hours' => $request->duration_in_hours
            ];
            try{
                $tripDestination = TripDestination::create($tripData);
                return $this->formatCreatedResponse('Trip created', $tripDestination);
            } catch(Exception $exception){
                return $this->formatInputErrorResponse('Record already exist');
            }
       
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TripDestination  $tripDestination
     * @return \Illuminate\Http\Response
     */
    public function show(TripDestination $tripDestination)
    {
        //
    
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TripDestination  $tripDestination
     * @return \Illuminate\Http\Response
     */
    public function edit(TripDestination $tripDestination)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TripDestination  $tripDestination
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TripDestination $tripDestination)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TripDestination  $tripDestination
     * @return \Illuminate\Http\Response
     */
    public function destroy(TripDestination $tripDestination)
    {
        //
    }
}
