<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use GuzzleHttp;
use Auth;
use DB;

class RulesController extends Controller {

	/**
	 * Массив разработчиков.
	 * Значение 1 - имеет доступ к просмотру Dev версии Устава
	 * Значение 2 - имеет доступ к редактированию и публикации Dev версии Устава
	 * @var Array
	 */
	public $contributors = [
		'500020124515041283' => 1, // TheKingOfTime#5595
		'385450870638247958' => 1, // Chaos#4962
		'378478050460827648' => 1, // Duck'en#2508
		'533245137216864286' => 1, // Dr. Vanston#5787

		'256114365894230018' => 2, // Русиш#0197
		'667377111589191681' => 2, // eldbdt#7973
	];





	public function get(){

		$guild = DiscordController::getGuild();

		$DB = DB::table('rules');
		if(empty($_GET['d']) || !$this->accessCheck(1)){
			$DB = $DB->where('status', '!=', 'dev');
		}
		$versions = $DB->orderBy('id', 'desc')->get();

		$description = '';

		$v = $versions[0];
		if(!empty($_GET['v'])){
			foreach($versions as $version){
				if($version->id != $_GET['v']) continue;
				$v = $version;
				break;
			}
		}

		if(!empty($_GET['f'])){

			$data = json_decode($v->data, true);

			if(!empty($data['article'][$_GET['f']])){
				$type = 'article';
			}elseif(!empty($data['rules'][$_GET['f']])){
				$type = 'rules';
			}else{
				$type = '';
			}

			if($type != ''){
				$selectText = $this->fix($data[$type][$_GET['f']], $guild['channels'], $guild['roles']);
				$description = $_GET['f'].': '.$selectText;

				$minor = $this->getMinor($_GET['f'], $data[$type], $guild['channels'], $guild['roles']);

				$qty = count($minor);
				for($i=1; $i <= $qty; $i++){
					$description .= PHP_EOL.($i == $qty ? '└' : '├').' '.$minor[$i-1]['key'].': '.mb_strimwidth($minor[$i-1]['text'], 0, 20, '...');
				}

			}

		}



		if(!empty($_GET['j']) && $_GET['j']){
			$data = [];

			try{
				if(empty($_GET['f'])){
					foreach(json_decode($v->data, true) as $cat){
						foreach($cat as $key => $item) $data[$key] = $item;
					}
				}else{
					$data = [
						'key' => $_GET['f'],
						'text' => $selectText,
						'minor' => $minor
					];
				}
			}catch(\Exception $e){
				echo abort('404');
			}


			header('Content-Type: application/json');
			echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
			exit;
		}

		$guild['description'] = $description;
		$guild['versions'] = $versions;

		return view('rules', $guild);
	}




	/**
	 * Возвращает Dev версию Устава
	 */
	public function dev(){
		if(!$this->accessCheck(1)) return abort('403');

		$data = DB::table('rules')->orderBy('id', 'desc')->first();
		if($data->status != 'dev'){
			$data->id = DB::table('rules')->insertGetId(['data' => $data->data]);
			$data->status = 'dev';
		}

		return json_encode($data, JSON_UNESCAPED_UNICODE);
	}




	/**
	 * Обновляет Dev версию Устава
	 */
	public function update(){
		if(!$this->accessCheck(2)) return abort('403');

		$data = DB::table('rules')->where('status', 'dev')->value('data');

		if(empty($data)) return abort('404');

		$data = json_decode($data, true);

		$data[$_POST['type']][$_POST['field']] = $_POST['text'];

		DB::table('rules')->where('status', 'dev')->update(['data' => json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT)]);

		return json_encode('success', JSON_UNESCAPED_UNICODE);
	}




	/**
	 * Удаляет пункт из Dev версии Устава
	 */
	public function delete(){
		if(!$this->accessCheck(2)) return abort('403');

		$data = DB::table('rules')->where('status', 'dev')->value('data');

		if(empty($data)) return abort('404');

		$data = json_decode($data, true);

		unset($data[$_POST['type']][$_POST['field']]);

		DB::table('rules')->where('status', 'dev')->update(['data' => json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT)]);

		return json_encode('success', JSON_UNESCAPED_UNICODE);
	}




	/**
	 * Публикует Dev версию Устава
	 */
	public function release(){
		if(!$this->accessCheck(2)) return abort('403');

		function send($id, $data, $message = null){
			$ch = curl_init('https://discord.com/api/v9/channels/'.$id.'/messages/'.$message);
			// $ch = curl_init('https://discord.com/api/v9/channels/'.$id.'/messages');
			curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-type: application/json', 'Authorization: Bot '.env('TOKEN')]);
			// curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PATCH');
			// curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
			curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE ));
			curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
			curl_setopt($ch, CURLOPT_HEADER, 0);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			$response = curl_exec($ch);
			curl_close($ch);
			sleep(1);
			return $response;
		}

		$results = [];

		function update($id, $client, $list){
			$messages = array_reverse(json_decode($client->get('https://discord.com/api/v9/channels/'.$id.'/messages')->getBody(), true));
			$result = [];
			foreach($list as $i => $item){
				$r = [
					'id' => $id,
					'new' => $item['description'],
					'old' => $messages[$i+1]['embeds'][0]['description'],
					'message' => $messages[$i+1]
				];
				if(!empty($messages[$i+1]['embeds'][0]['description']) && $item['description'] != $messages[$i+1]['embeds'][0]['description']){
					$r['response'] = send($id, [
						'embeds' => [[ 'title' => $item['title'], 'description' => $item['description'] ]]
					], $messages[$i+1]['id']);
				}
				$result[] = $r;
			}
			return $result;
		}

		$list = json_decode($_POST['list'], true);
		$client = new GuzzleHttp\Client([
			'headers' => [ 'Authorization' => 'Bot '.env('TOKEN'), 'Content-type' => 'application/json' ]
		]);

		$results['887024525957562409'] = update('887024525957562409', $client, $list);
		$results['887048291123101766'] = update('887048291123101766', $client, $list);

		DB::table('rules')->where('status', 'dev')->update(['status' => 'released']);
		$data = DB::table('rules')->orderBy('id', 'desc')->first();
		return json_encode([$data, $results], JSON_UNESCAPED_UNICODE);

		// $result[] = send('887024525957562409', ['content' => 'В этом канале опубликованы только правила Сообщества.'.PHP_EOL.'Сообщество работает соответствуя Уставу. В нём подробно описано, как работает сообщество, каким нормам придерживается и устанавливает рамки и определения.'.PHP_EOL.PHP_EOL.'Устав опубликован на сайте https://igc.su/rules']);
		// foreach($list as $item)
		// 	$result[] = send('887024525957562409', [
		// 		'embeds' => [[ 'title' => $item['title'], 'description' => $item['description'] ]]
		// 	]);
		// $result[] = send('887048291123101766', ['content' => 'В этом канале опубликованы только правила Сообщества.'.PHP_EOL.'Сообщество работает соответствуя Уставу. В нём подробно описано, как работает сообщество, каким нормам придерживается и устанавливает рамки и определения.'.PHP_EOL.PHP_EOL.'Устав опубликован на сайте https://igc.su/rules']);
		// foreach($list as $item)
		// 	$result[] = send('887048291123101766', [
		// 		'embeds' => [[ 'title' => $item['title'], 'description' => $item['description'] ]]
		// 	]);
		// return json_encode($result, JSON_UNESCAPED_UNICODE);
	}




	/**
	 * Возвращает возможность досутпа
	 * @param Number $lvl - требуемый уровень доступа
	 */
	public static function accessCheck($lvl){
		if(!Auth::check()) return false;

		$id = Auth::user()->discord_id;

		if(!isset(RulesController::$contributors[$id])) return false;

		return RulesController::$contributors[$id] >= $lvl;
	}




	/**
	 * Заменяет упоминания ролей и каналов
	 * @param  String $text     Исходный текст
	 * @param  Array  $channels Каналы
	 * @param  Array  $roles    Роли
	 * @return String
	 */
	public function fix($text, $channels, $roles){
		$text = preg_replace('/<(#[0-9abcdef]{6})+>\s/', '', $text);

		$text = preg_replace_callback('/<#([0-9]+)>/', function($matches) use($channels){
			return '#'.$channels[$matches[1]]['name'];
		}, $text);

		$text = preg_replace_callback('/<@([0-9]+)>/', function($matches) use($roles){
			return '@'.$roles[$matches[1]]['name'];
		}, $text);

		return trim($text);
	}

	/**
	 * Возвращает подпункт пункта
	 * @param  String $key
	 * @param  String $data
	 * @param  Array  $channels Каналы
	 * @param  Array  $roles    Роли
	 * @return String
	 */
	public function getMinor($key, $data, $channels, $roles){
		$minor = [];
		foreach($data as $k => $field){
			if(preg_match('/^'.$key.'\.[0-9]+$/', $k)){
				$minor[] = [
					'key' => $k,
					'text' => $this->fix($field, $channels, $roles),
					'minor' => $this->getMinor($k, $data, $channels, $roles)
				];
			}
		}
		return $minor;
	}

}
