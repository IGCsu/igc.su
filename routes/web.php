<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function(){
    return view('welcome');
});

Route::get('/law/{chapter?}', [\App\Http\Controllers\LawController::class, 'page'])->name('law');

Route::get('/levels', [\App\Http\Controllers\LevelsController::class, 'page'])->name('levels');

//Route::post('/tokens/create', function (Request $request) {
//    $token = $request->user()->createToken('admin');
//
//    return json_encode($token, JSON_PRETTY_PRINT);
//});

/**
 * Авторизация через Discord
 */
Route::get('/login', [AuthController::class, 'login'])->name('login');
Route::get('/logout', [AuthController::class, 'logout'])->name('logout');
Route::get('/auth/discord/callback', [AuthController::class, 'callback'])->name('auth.callback');
Route::get('/auth/closed', function(){ return view('welcome'); })->name('auth.closed');

Route::post('/membersUpdate', [\App\Http\Controllers\MemberController::class, 'fetch'])->name('membersUpdate');
