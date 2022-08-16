<?php

namespace App\Http\Controllers;

use App\Models\Development;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;

class WelcomeController extends Controller
{
	/**
	 * Возвращает главную страницу
	 * @return Application|Factory|View
	 */
	public function page()
	{
		return view('welcome', [
			'development' => Development::get(),
		]);
	}

}
