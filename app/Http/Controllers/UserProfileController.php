<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserProfile;

class UserProfileController extends Controller
{
    public function show($user_id)
    {
        $result = UserProfile::with(['user', 'user.services', 'user.reviews', 'user.transactions'])->where('id', $user_id)->get();

        return $result;
    }
}
