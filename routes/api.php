<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\MemberController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\ChannelController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function(){

    Route::name('members.')->prefix('members')->group(function(){
        Route::get('/', [MemberController::class, 'index'])->name('index');
        Route::post('/', [MemberController::class, 'create'])->name('create');
        Route::get('/{id}', [MemberController::class, 'show'])->name('show');
        Route::put('/{id}', [MemberController::class, 'update'])->name('update');
        Route::delete('/{id}', [MemberController::class, 'delete'])->name('delete');
    });

    Route::name('roles.')->prefix('roles')->group(function(){
        Route::get('/', [RoleController::class, 'index'])->name('index');
        Route::post('/', [RoleController::class, 'create'])->name('create');
        Route::get('/{id}', [RoleController::class, 'show'])->name('show');
        Route::put('/{id}', [RoleController::class, 'update'])->name('update');
        Route::delete('/{id}', [RoleController::class, 'delete'])->name('delete');
    });

    Route::name('channels.')->prefix('channels')->group(function(){
        Route::get('/', [ChannelController::class, 'index'])->name('index');
        Route::post('/', [ChannelController::class, 'create'])->name('create');
        Route::get('/{id}', [ChannelController::class, 'show'])->name('show');
        Route::put('/{id}', [ChannelController::class, 'update'])->name('update');
        Route::delete('/{id}', [ChannelController::class, 'delete'])->name('delete');
    });

});
