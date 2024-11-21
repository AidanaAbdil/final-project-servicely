<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class UserProfile extends Model
{
    protected $table = 'user_profile';

    protected $fillable = ['user_id', 'bio', 'job_title', 'location'];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
