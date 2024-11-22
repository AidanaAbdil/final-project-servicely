<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Service;

class ServiceController extends Controller
{
    public function index(Request $request)
    {
        $category = $request->input('category_id');

        $all_services_query = Service::with(['user', 'category', 'reviews', 'slots'])->limit(20);

        if ($category) {
            $all_services_query->where("category_id", $category);
        }

        $all_services = $all_services_query->get();

        return $all_services;
    }

    public function search(Request $request)
    {
        $query = $request->query('query');

        $search_result = Service::where('title', 'LIKE', "%$query%")->get();
        return response()->json($search_result);
    }

    public function getFeaturedServices()
    {
        $result = Service::orderBy('id', 'DESC')
            ->limit(6)
            ->get();

        return $result;
    }

    public function show(Request $request)
    {
        $service_detail = Service::with(['user', 'category', 'reviews', 'slots'])->find($request->id);

        return $service_detail;
    }

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
            'currency' => 'required|string'
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

        return response()->json(['message' => 'Service successfully added!', 'data' => $service], 201);
        // return redirect()->route('/')->with('success','');
        //we might need a user profile controller?
    }
}
