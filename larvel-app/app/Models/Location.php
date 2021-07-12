<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasFactory;

    protected $fillable = ['state_id', 'name'];

    public function state() {
        return $this->belongsTo('App\Models\State');
    }
}
