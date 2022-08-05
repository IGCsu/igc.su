<?php

namespace App\Http\Controllers;

use App\Models\Member;
use App\Models\MemberLevel;
use App\Models\Role;

class LevelsController extends Controller
{

	public function page(){
		return view('levels', [
			'members' => Member::all()->keyBy('id'),
			'roles' => Role::all()->keyBy('id'),
			'levels' => MemberLevel::where([
				['messagesLegit', '>', 10],
				['messagesAll', '>', 10],
				['activity', '>', 0]
			])->get()->keyBy('id')
		]);
	}

	public static function levelsActivity(){
		$time = time() - 86400;
		MemberLevel::where([
			['activity', '<', 30],
			['last', '>=', $time]
		])->increment('activity');
		MemberLevel::where([
			['activity', '>', 0],
			['last', '<', $time]
		])->decrement('activity');
	}

}
