<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

use App\Http\Controllers\DiscordController;

use GuzzleHttp;
use Auth;
use DB;

class Controller extends BaseController{

	use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

	public function budget(){
		$budget = DB::table('budget')->where('status', '!=', 0)->orderBy('created_at', 'asc')->get();
		return view('budget', ['budget' => $budget]);
	}

}
