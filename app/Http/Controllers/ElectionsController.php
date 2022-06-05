<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Controllers\DiscordController;

use Auth;
use DB;

class ElectionsController extends Controller {

	public function get(Request $request, $id = '0', $last = 0){
		$election = $last == 0
			? DB::table('elections')->where('date', $id)->orderBy('last', 'desc')->first()
			: DB::table('elections')->where([['date', $id], ['last', $last]])->first();

		if(empty($election)) return abort(404);

		return view('elections', [
			'election' => $election,
			'guild' => DiscordController::getGuild()
		]);
	}

	/**
	 * Старая страница результатов выборов
	 */
	public function old(Request $request, $id = '0'){
		$election = DB::table('elections')->where('date', $id)->first();
		if(empty($election)) return abort(404);
		return view('electionsOld', ['election' => $election, 'guild' => DiscordController::getGuild()]);
	}

	/**
	 * Обновление выборов
	 */
	public function load(){
		$election = DB::table('elections')->where('date', $_POST['date'])->orderBy('last', 'desc')->first();
		if(empty($election)) return abort(404);
		if($election->status == 'load') return abort(504);
		if($election->qty == 0) return abort(403);

		if($election->last + 3600 < time() || ($_POST['admin'] && Auth::check() && Auth::user()->discord_id == 256114365894230018)){
			DB::table('elections')->whereId($election->id)->update(['status' => 'load']);

			$client = new GuzzleHttp\Client([
				'headers' => ['Authorization' => 'Bot '.env('TOKEN'), 'Content-type' => 'application/json']
			]);

			$election = $this->getElection($election);
		}

		return json_encode(['election' => $election, 'guild' => DiscordController::getGuild()], JSON_UNESCAPED_UNICODE);
	}




	public function getElection($election){
		$data = [];

		$client = new GuzzleHttp\Client([
			'headers' => [ 'Authorization' => 'Bot '.env('TOKEN'), 'Content-type' => 'application/json' ]
		]);
		$messages = json_decode($client->get(
			'https://discord.com/api/v9/channels/612280548777525249/messages?limit='.($election->qty+3)
		)->getBody(), true);
		$members = DiscordController::getGuild()['members'];

		$reactions = [
			'1' => ['id' => '499315437251723274', 'name' => 'Sg3'],
			'0' => ['id' => '499316230172442625', 'name' => 'Sg0']
		];

		$candidates = [];

		foreach($messages as $message){
			$m = preg_match('/^<@!*[0-9]+>$/', $message['content']);

			if(!$m && !empty($candidates)) break;
			if(!$m) continue;
			if(empty($members[$message['mentions'][0]['id']])) continue;

			$id = $message['mentions'][0]['id'];

			$candidates[$id] = [ 'name' => $members[$id]['name'] ];

			foreach($reactions as $r => $reaction)
				$candidates[$id][$r] = $this->getReactionData($reaction, $message, $client, $members);

			sleep(5);
		}

		$candidates = json_encode($candidates, JSON_UNESCAPED_UNICODE);
		$time = time();

		$newId = DB::table('elections')->insertGetId([
			'data' => $candidates,
			'date' => $election->date,
			'status' => 'ready',
			'coefficient' => $election->coefficient,
			'max' => $election->max,
			'type' => $election->type,
			'qty' => $election->qty,
			'rule1' => $election->rule1,
			'last' => $time
		]);
		DB::table('elections')->whereId($election->id)->update(['status' => 'ready']);

		$election->data = $candidates;
		$election->last = $time;
		$election->id = $newId;

		return $election;
	}




	public function getReactionData($reaction, $message, $client, $members){
		$users = json_decode($client->get(
			'https://discord.com/api/v9/channels/612280548777525249/messages/'.$message['id'].'/reactions/'.$reaction['name'].':'.$reaction['id'].'?limit=100'
		)->getBody(), true);
		$data = [];

		$allowedRoles = ["735470023736295443", "735469660752838697", "644884463959932938", "575721274693910528", "527559258888470548", "500010828703989779"];

		foreach($users as $user){
			if(empty($members[$user['id']]) || empty($members[$user['id']]['roles'])) continue;
			if(empty(array_uintersect($members[$user['id']]['roles'], $allowedRoles, 'strcasecmp'))) continue;
			if($user['id'] == 623932813338738729 || $user['id'] == 921385200162840596) continue;
			$data[$user['id']] = $members[$user['id']]['name'].(empty($members[$user['id']]['roles'])?0:1);
		}

		return $data;
	}

}
