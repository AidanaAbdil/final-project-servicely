<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    public function user(){
        return $this->belongsTo(User::class);
    }

    public function services(){
        return $this->belongsToMany(Service::class);
    }
}