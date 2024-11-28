<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserProfile;
use App\Models\User;
use PhpParser\Node\Expr\FuncCall;

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

        $profile = UserProfile::where('user_id', $user_id)->with(['user.services', 'user.transactions'])->firstOrFail();

    
        $profile->user->update([
            'firstname' => $request->input('firstname'),
            'surname' => $request->input('surname'),
        ]);


        $profile->update([
            'job_title' => $request->input('job_title'),
            'location' => $request->input('location'),
            'bio'=> $request->input('bio'),
        ]);

        return response()->json($profile);
    }

    public function updateImage(Request $request, $user_id)
    {
        if ($request->hasFile('image')) {
            $image = $request->file('image');

            $image_ext = $image->getClientOriginalExtension();

            $image_name = substr($image->getClientOriginalName(), 0, 15);

            $path = $image->storeAs('images/profile_photos', $image_name.'_'.$user_id.'.'.$image_ext , 'public_folder');

            $profile = UserProfile::where('user_id', $user_id)->firstOrFail();

            $profile->update([
                'image_url' => $path
            ]);

            return response()->json($path);
        }
    }
}
