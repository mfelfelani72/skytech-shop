<?php

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{


public function register(Request $request)
{

$data = $request->validate([
    'name'=>'required|string',
    'email'=>'required|email|unique:users',
    'password'=>'required|min:8'
]);


$user = User::create([
    'name'=>$data['name'],
    'email'=>$data['email'],
    'password'=>Hash::make($data['password'])
]);


$token = $user->createToken(
    'enterprise-client'
)->accessToken;


return response()->json([
    'user'=>$user,
    'token'=>$token
]);

}



public function login(Request $request)
{


$data=$request->validate([

'email'=>'required|email',
'password'=>'required'

]);


$user=User::where(
'email',
$data['email']
)->first();


if(
!$user ||
!Hash::check(
$data['password'],
$user->password
)
){

return response()->json([
'message'=>'Invalid credentials'
],401);

}



$token=$user
->createToken('enterprise-client')
->accessToken;


return response()->json([

'user'=>$user,
'token'=>$token

]);


}



public function me(Request $request)
{

return response()->json(
$request->user()
);

}



public function logout(Request $request)
{

$request
->user()
->token()
->revoke();


return response()->json([
'message'=>'Logged out'
]);


}


}