<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Seat;

class Vehicle extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'plate_num', 'color', 'number_of_seats'];

    public function seats() {
        return $this->hasMany('App\Models\Seat');
    }
}
