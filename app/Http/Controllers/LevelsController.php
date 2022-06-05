<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Controllers\DiscordController;

use GuzzleHttp;
use Auth;
use DB;

class LevelsController extends Controller {

	public function get(){
		return view('levels', DiscordController::getGuild());
	}

	public static function levelsActivity(){
		$time = time() - 86400;
		DB::connection('heroku')->table('levels')->where([
			['activity', '<', 30],
			['last', '>=', $time]
		])->increment('activity');
		DB::connection('heroku')->table('levels')->where([
			['activity', '>', 0],
			['last', '<', $time]
		])->decrement('activity');
	}

}
