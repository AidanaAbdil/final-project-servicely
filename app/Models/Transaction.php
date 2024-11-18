<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Timeslot;

class Transaction extends Model
{
    public function user(){
        return $this->belongsTo(User::class);
    }

    public function timeslot(){
        return $this->belongsTo(Timeslot::class);
    }

}
