<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Trip;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //

        $date = $request->query('date');
    
        if($date){
            $booking = Booking::whereDate('start_time', $date)
            ->with('vehicle')->with('startLocation')->with('endLocation')
            ->with('trip')->get();
            return $this->formatSuccessResponse('Booking', $booking);
        }
        // $booking = Booking::with('startLocation')->with('endLocation')->get();
        $booking = Booking::with('vehicle')->with('startLocation')->with('endLocation')
            ->with('trip')->get();
        return $this->formatSuccessResponse('Booking', $booking);

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
            'trip_id' => 'required',
            // 'start_location_id' => 'required',
            // 'end_location_id' => 'required',
            'vehicle_id' => 'required',
            'seat_id' => 'required',
            
        ]);

        if($validator->fails()) {
            return $this->formatInputErrorResponse($validator->errors());
        }

        $trip = Trip::find($request->trip_id)->first();
        
        if(!$trip){
            return $this->notFoundResponse('The selected trip does not exist');
        }

        $bookingData = [
            'trip_id' => $request->trip_id,
            'customer_name' => $request->customer_name,
            'start_location_id' => $trip->start_location_id,
            'end_location_id' => $trip->end_location_id,
            'vehicle_id' => $request->vehicle_id,
            'seat_id' => $request->seat_id,
            'ticket_code' => $this->generateTicket(),
        ];

        $booking = Booking::create($bookingData);
        return $this->formatCreatedResponse('Booking successful', $booking);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function show(Booking $booking)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function edit(Booking $booking)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Booking $booking)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function destroy(Booking $booking)
    {
        //
    }

    public function generateTicket () {
        $finalToken = null;
        do {
            $token = makeRandomToken();
            $finalToken = $token;
        } while (Booking::where("ticket_code", "=", $token)->first() instanceof Booking);

        return $finalToken;
    }
}
