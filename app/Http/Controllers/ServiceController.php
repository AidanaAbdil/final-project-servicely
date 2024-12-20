<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Service;
use App\Models\Transaction;

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
            'address' => 'required|string',
            'description' => 'required|string',
            'duration' => 'required|numeric',
            'price' => 'required|numeric', 
            'currency' => 'required|string'
        ]);

        //now we create the servcie listing

        $service = new Service();
        $service->title = $request->title;
        $service->category_id = $request->category_id;
        $service->location =  $request->location;
        $service->address = $request->address;
        $service->description = $request->description;
        $service->price = $request->price;
        $service->user_id = Auth::id();
        $service->image_url = '';
        $service->duration = $request->duration;
        $service->currency = $request->currency;

        $service->save();

        return response()->json(['message' => 'Service successfully added!', 'data' => $service], 201);
        
    }

    public function addToCart(Request $request)
    {
        $serviceId = $request->input('service_id');
        $date = $request->input('date');
        $time = $request->input('time');
        $service = Service::find($serviceId);

        if (!$service) {
            return response()->json([
                'status' => 'error',
                'message' => 'Service not available.'
            ], 404);
        }

        //Add service to cart
        $cart = session()->get('cart', []);

        $exists = false;
        foreach ($cart as &$item) {
            if ($item['id'] === $serviceId) {
                $item['quantity'] += 1;
                $exists = true;
                break;
            }
        }

        if (!$exists) {
            $new_element = [
                'id' => $serviceId,
                'title' => $service->title,
                'description' => $service->description,
                'duration' => $service->duration,
                'price' => $service->price,
                'currency' => $service->currency,
                'quantity' => 1,
                'date' => $date,
                'time' => $time,
            ];

            array_push($cart, $new_element);
        }

        session()->put('cart', $cart);

        return response()->json([
            'status' => 'success',
            'message' => 'Service added to cart successfully!',
            'cart' => $cart
        ]);
    }

    public function getCart()
    {
        $cart = session()->get('cart', []);
        return response()->json($cart);
    }

    public function clearCart()
    {

        session()->forget('cart'); //this clears the cart 
        return response()->json([
            'success' => true,
            'message' => 'Cart has been cleared successfully.'
        ]);
    }


    public function removeFromCart(Request $request)
    {
        $serviceId = $request->input('service_id');
        $cart = session()->pull('cart', []);

        $newCart = [];

        foreach ($cart as $item) {
            if ($item['id'] === $serviceId) {
                if ($item['quantity'] > 1) {
                    $item['quantity'] -= 1;
                    array_push($newCart, $item);
                }
            } else {
                array_push($newCart, $item);
            }
        }

        session()->put('cart', $newCart);

        return response()->json([
            'status' => 'success',
            'cart' => $newCart,
        ]);
    }
}
