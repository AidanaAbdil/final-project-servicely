<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserProfile;
use App\Models\User;

class UserProfileController extends Controller
{
    public function show($user_id)
    {
        $result = UserProfile::with(['user.services', 'user.transactions'])
            ->where('user_id', $user_id)
            ->first();

        return $result;
    }

   

    public function update(Request $request, $user_id)
    {
        

        $request->validate([
            'firstname' => 'nullable|string',
            'surname' => 'nullable|string',
            'job_title' => 'nullable|string|max:255',
            'location' => 'nullable|string',
            'bio'=> 'nullable|string',
        ]);

        $profile = UserProfile::where('user_id', $user_id)->firstOrFail();

    
        $profile->user->update([
            'firstname' => $request->input('firstname'),
            'surname' => $request->input('surname'),
        ]);


        $profile->update([
            'job_title' => $request->input('job_title'),
            'location' => $request->input('location'),
            'bio'=> $request->input('bio'),
        ]);

        return redirect('/profile');
    }
}
