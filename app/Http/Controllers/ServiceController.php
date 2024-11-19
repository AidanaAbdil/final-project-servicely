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
        $request->validate([
            'title' => 'required|string|max:255',
            'category_id' => 'required|integer',
            'location' => 'required|string',
            'description' => 'required|string',
            'duration' => 'required|numeric',
            'price' => 'required|numeric', //also in the form
            'currency' =>'required|string'
        ]);

        //now we create the servcie listing

        $service = new Service();
        $service->title = $request->title;
        $service->category_id = $request->category_id;
        $service->location =  $request->location;
        $service->description = $request->description;
        $service->price = $request->price;
        $service->user_id = Auth::id() ?? 1; //change this back later to only authenticated users can post listing
        $service->image_url = '';
        $service->duration = $request->duration;
        $service->currency = $request->currency;

        $service->save();

        return response()->json(['message' => 'Service successfully added!', 'data' => $service], 201);
        //we might need a user profile controller?
    }


    public function show($id)
    {
        $service = Service::find($id);  // This fetches the service by its ID

        if ($service) {
            return response()->json($service);
        } else {
            return response()->json(['message' => 'Service not found'], 404);
        }
    }

}
