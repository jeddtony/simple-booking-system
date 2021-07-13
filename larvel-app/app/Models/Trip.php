<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trip extends Model
{
    use HasFactory;
    protected $fillable = ['start_location_id', 'end_location_id', 'vehicle_id', 'start_time', 'amount'];

    public function startLocation() {
        return $this->hasOne('App\Models\Location', 'id', 'start_location_id');
    }

    public function endLocation() {
        return $this->hasOne('App\Models\Location', 'id', 'end_location_id');
    }
}
