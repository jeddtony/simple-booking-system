<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seat extends Model
{
    use HasFactory;
    protected $fillable = ['vehicle_id', 'name'];

    public function vehicle() {
        return $this->belongsTo('App\Models\Vehicle');
    }
}
