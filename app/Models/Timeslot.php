<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Status;
use App\Models\Transaction;
use App\Models\Service;

class Timeslot extends Model
{
    public function status(){
    return $this->belongsTo(Status::class);
    }

    public function transactions(){
        return $this->hasMany(Transaction::class);
    }   

    public function service(){
        return $this->belongsTo(Service::class);
    }
}