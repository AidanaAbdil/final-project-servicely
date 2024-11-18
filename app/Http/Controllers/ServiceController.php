<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Service;

class ServiceController extends Controller
{
    public function store(Request $request)
    {


        // Here we validate the incoming request
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string',
            'location' => 'required|string',
            'description' => 'required|string',
            'duration' => 'required|string',
            'price' => 'required|numeric',
        ]);

        //now we create the servcie listing

        $service = new Service();
        $service->title = $request->title;
        $service->category_id = $request->category_id;
        $service->location =  $request->location;
        $service->description = $request->description;
        $service->price = $request->price;
        $service->user_id = Auth::id();
        $service->image_url = '';
        $service->duration = $request->duration;
        $service->currency = $request->currency;

        $service->save();

    }

}
