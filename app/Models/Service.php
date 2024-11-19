<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Category;
use App\Models\Review;
use App\Models\Slot;

class Service extends Model
{
    public function users()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function reviews()
    {
        return $this->belongsToMany(Review::class);
    }

    public function slots(){
        return $this->hasMany(Slot::class);
    }
}
