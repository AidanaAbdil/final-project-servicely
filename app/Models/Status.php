<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Timeslot;

class Status extends Model
{
    public function slots(){
        return $this->hasMany(Timeslot::class);
    }
}
