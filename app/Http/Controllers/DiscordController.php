<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Exception;

use GuzzleHttp;
use Auth;
use DB;

class DiscordController extends Controller {


	/**
	 *****************************************************************************
	 * Авторизация
 	 *****************************************************************************
	 */

	/**
	 * Перенаправляет запрос к Дискорду
	 * @param Request $request
	 */
	public function redirectToDiscord(Request $request){
		$last = $request->server('HTTP_REFERER');
		if($last) session(['return' => $last]);

		return Socialite::driver('discord')->redirect();
	}

	/**
	 * Принятие запроса от Дискорда
	 */
	public function handleDiscordCallback(){
		try {
			$user = Socialite::driver('discord')->user();

			$client = $this->getGuzzleClass();

			try{
				$res = $client->get('https://discord.com/api/v9/guilds/433242520034738186/members/'.$user->id);
				$member = json_decode($res->getBody(), true);
				if(!in_array('648762974277992448', $member['roles'])) return redirect('closed');
			}catch(\Exception $e){
				return redirect('closed');
			}

			$name = ($member['nick'] ?? $member['user']['username']).'#'.$member['user']['discriminator'];

			$finduser = User::where('discord_id', $user->id)->first();

			if(!$finduser){
				$finduser = User::create([
					'name' => $name,
					'email' => $user->email,
					'discord_id' => $user->id,
					'avatar' => $user->avatar,
				]);
			}else{
				User::where('discord_id', $user->id)->update([
					'avatar' => $user->avatar,
					'name' => $name
				]);
			}

			Auth::login($finduser);

			return redirect(session('return', '/'));

		}catch(Exception $e){
			return redirect('/');
		}
	}

	/**
	 * Обновляет пользователей в базе и возвращает их
	 */
	public function memberUpdate(){
		$data = json_decode(DB::table('guild')->value('data'), true);
		$users = json_decode($_POST['users'], true);

		$client = $this->getGuzzleClass();

		$count = 0;
		foreach($users as $id => $avatar){
			try{
				$user = json_decode($client->get('https://discord.com/api/v10/users/'.$id)->getBody(), true);

				$name = $user['username'].'#'.$user['discriminator'];
				$avatar = $user['avatar'] == null
					? $this->getDefaultAvatar(substr($user['discriminator'], -1))
					: 'avatars/'.$id.'/'.$user['avatar'];

				if(empty($data['members'][$id])) $data['members'][$id] = ['roles' => []];

				$data['members'][$id]['name'] = $name;
				$data['members'][$id]['search'] = $id.mb_strtolower($name);
				$data['members'][$id]['avatar'] = $avatar;

				$users[$id] = $avatar;

				sleep(2);
				++$count;

				if($count > 20) break;
			}catch(\Exception $e){}
		}

		DB::table('guild')->delete();
		DB::table('guild')->insert(['data' => json_encode($data, JSON_UNESCAPED_UNICODE)]);

		echo json_encode($users, JSON_UNESCAPED_UNICODE);
	}



	/**
	 *****************************************************************************
	 * Статические методы
	 *****************************************************************************
	 */

	/**
	 * Возвращает массив данных гильдии.
	 * Обновляет кеш в случае необходимости.
	 * @return Array
	 */
	public static function getGuild(){

		$guild = DB::table('guild')->where('created_at', '>', DB::raw('CURDATE() - INTERVAL 7 DAY'))->first();

		if(!empty($guild)) return json_decode($guild->data, true);

		$client = $this->getGuzzleClass();

		$members = json_decode($client->get('https://discord.com/api/v9/guilds/433242520034738186/members?limit=1000')->getBody(), true);
		$channels = json_decode($client->get('https://discord.com/api/v9/guilds/433242520034738186/channels')->getBody(), true);
		$roles = json_decode($client->get('https://discord.com/api/v9/guilds/433242520034738186/roles')->getBody(), true);

		$data = [
			'roles' => [],
			'channels' => [],
			'members' => json_decode(DB::table('guild')->value('data'), true)['members'],
		];

		foreach($channels as $channel) $data['channels'][$channel['id']] = $channel;
		foreach($roles as $role) $data['roles'][$role['id']] = $role;

		foreach($members as $member){
			$id = $member['user']['id'];

			if(empty($data['members'][$id])) $data['members'][$id] = [];

			$name = (!empty($member['nick']) ? $member['nick'] : $member['user']['username']).'#'.$member['user']['discriminator'];
			$avatar = !empty($member['avatar'])
				? 'guilds/433242520034738186/users/'.$id.'/avatars/'.$member['avatar']
				: 'avatars/'.$id.'/'.$member['user']['avatar'];

			$data['members'][$id]['name'] = $name;
			$data['members'][$id]['search'] = $id.mb_strtolower($name);
			$data['members'][$id]['avatar'] = $avatar;
			$data['members'][$id]['roles'] = $member['roles'];
		};

		DB::table('guild')->delete();
		DB::table('guild')->insert(['data' => json_encode($data, JSON_UNESCAPED_UNICODE)]);

		return $data;
	}

	/**
	 * Возвращает класс GuzzleHttp\Client
	 * @return Client
	 */
	public static function getGuzzleClass(){
		return new GuzzleHttp\Client([
			'headers' => [
				'Authorization' => 'Bot '.env('TOKEN'),
				'Content-type' => 'application/json'
			]
		]);
	}

	/**
	 * Возвращает дефолтный аватар Дискорда
	 * @param  String $d Последняя цифра дискриминатора
	 * @return String    Ссылка
	 */
	public static function getDefaultAvatar($d){
		$v = 0;
		switch($d){
			case '1': case '6': $v = 1; break;
			case '2': case '7': $v = 2; break;
			case '3': case '8': $v = 3; break;
			case '4': case '9': $v = 4; break;
		}
		return 'embed/avatars/'.$v.'.png';
	}

}
