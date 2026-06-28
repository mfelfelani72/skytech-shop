<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\AuthController;

Route::get('/health', function () {
    return response()->json([
        'status' => 'ok',
        'service' => 'backend',
        'time' => now()
    ]);
});

Route::post(
'/register',
[AuthController::class,'register']
);


Route::post(
'/login',
[AuthController::class,'login']
);



Route::middleware('auth:api')
->group(function(){


Route::get(
'/me',
[AuthController::class,'me']
);


Route::post(
'/logout',
[AuthController::class,'logout']
);


});