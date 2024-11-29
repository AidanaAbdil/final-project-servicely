<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Service;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
   public function getUser()
   {
      $user_id = Auth::id() ?? null;

      return User::where('id', $user_id)->with('userProfile')->first();
   }
}
