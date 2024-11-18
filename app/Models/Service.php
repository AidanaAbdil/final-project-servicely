<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Category;
use App\Models\Review;
use App\Models\Timeslot;

class Service extends Model
{
    public function users() {
        return $this->belongsTo(User::class);
    }

    public function categories(){
        return $this->belongsTo(Category::class);
    }

    public function reviews(){
        return $this->belongsToMany(Review::class);
    }

    public function timeslots(){
        return $this->hasMany(TimeSlot::class);
    }
}
