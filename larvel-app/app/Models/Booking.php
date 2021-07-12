<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;
    protected $fillable =['trip_id', 'customer_name', 'start_location_id', 'end_location_id',
    'vehicle_id', 'seat_id', 'ticket_code'];

    public function trip() {
        return $this->hasOne('App\Models\Trip', 'id', 'trip_id');
    }

    public function startLocation() {
        return $this->hasOne('App\Models\Location', 'id', 'start_location_id');
    }

    public function endLocation() {
        return $this->hasOne('App\Models\Location', 'id', 'end_location_id');
    }

    public function vehicle() {
        return $this->hasOne('App\Models\Vehicle', 'id', 'vehicle_id');
    }

    public function seat() {
        return $this->hasOne('App\Models\Seat');
    }
}
