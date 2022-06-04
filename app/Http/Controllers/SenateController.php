<?php

namespace App\Http\Controllers;

use App\Http\Controllers\DiscordController;

use Request;
use Auth;
use DB;

class SenateController extends Controller {

	public function get(){
		return view('senate', DiscordController::getGuild());
	}

	/**
	 * Обновление данных
	 * @return
	 */
	public function update(){
		if(!Auth::check() || Auth::user()->discord_id != 256114365894230018) return abort('403');

		DB::table('senate')->whereId($_POST['id'])->update(['data' => $_POST['data']]);

		return json_encode('success', JSON_UNESCAPED_UNICODE);
	}


}
