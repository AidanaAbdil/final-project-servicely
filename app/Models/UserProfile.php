<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class UserProfile extends Model
{
    protected $table = 'user_profile';
    
    public function user(){
        return $this->belongsTo(User::class);
    }
}
