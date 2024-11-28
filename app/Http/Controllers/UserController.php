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
      return Auth::user() ?? null;
   }
}
