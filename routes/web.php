<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DiscordController;
use App\Http\Controllers\RulesController;
use App\Http\Controllers\SenateController;
use App\Http\Controllers\ElectionsController;
use App\Http\Controllers\LevelsController;
use App\Http\Controllers\Controller;

/**
 * Welcome
 */
Route::get('/', function(){ return view('welcome'); });

/**
 * Авторизация через Discord
 */
Route::get('/login', [DiscordController::class, 'redirectToDiscord'])->name('login');
Route::get('/auth/discord/callback', [DiscordController::class, 'handleDiscordCallback'])->name('handleDiscordCallback');
Route::get('/closed', function(){ return view('closed'); })->name('closed');

/**
 * Обновляет пользователей в базе и возвращает их
 */
Route::post('/memberUpdate', [DiscordController::class, 'memberUpdate'])->name('memberUpdate');

/**
 * Устав
 */
Route::name('rules.')->prefix('rules')->group(function(){
	Route::get('/', [RulesController::class, 'get'])->name('get');
	Route::post('/release', [RulesController::class, 'release'])->name('release');
	Route::post('/update', [RulesController::class, 'update'])->name('update');
	Route::post('/delete', [RulesController::class, 'delete'])->name('delete');
	Route::post('/dev', [RulesController::class, 'dev'])->name('dev');
});

/**
 * Сенат
 */
Route::name('senate.')->prefix('senate')->group(function(){
	Route::get('/', [SenateController::class, 'get'])->name('get');
	Route::post('/update', [SenateController::class, 'update'])->name('update');
});

/**
 * Выборы
 */
Route::name('elections.')->prefix('elections')->group(function(){
	Route::get('/{id}/{last?}', [ElectionsController::class, 'get'])->name('get');
	Route::get('/log/{id}', [ElectionsController::class, 'log'])->name('log');
	Route::get('/old/{id}', [ElectionsController::class, 'old'])->name('old');
	Route::post('/load', [ElectionsController::class, 'load'])->name('load');
});

/**
 * Бюджет сообщества
 */
Route::middleware(['auth:sanctum', 'verified'])->get('/budget', [Controller::class, 'budget'])->name('budget');

/**
 * Газета Diplomancy
 */
Route::get('/paper', function(){ return view('paper'); })->name('paper');

/**
 * Статистика уровней
 */
Route::get('/levels', [LevelsController::class, 'get'])->name('levels');
