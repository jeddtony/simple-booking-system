<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TripDestination extends Model
{
    use HasFactory;

    protected $fillable = ['start_location', 'end_location', 'duration_in_hours'];
}
