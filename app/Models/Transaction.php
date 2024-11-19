<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Slot;

class Transaction extends Model
{
    public function user(){
        return $this->belongsTo(User::class);
    }

    public function slots(){
        return $this->belongsTo(Slot::class);
    }

}
