<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

use App\Http\Controllers\LevelsController;

class Kernel extends ConsoleKernel {
	/**
	* The Artisan commands provided by your application.
	*
	* @var array
	*/
	protected $commands = [
		//
	];

	/**
	* Define the application's command schedule.
	*
	* @param  \Illuminate\Console\Scheduling\Schedule  $schedule
	* @return void
	*/
	protected function schedule(Schedule $schedule){

		$schedule->call(function(){
			LevelsController::levelsActivity();
		})->dailyAt('00:20');

		// $schedule->call(function(){
		// 	LevelsController::levelsActivity();
		// })->everyMinute();

	}

	/**
	 * Register the commands for the application.
	 *
	 * @return void
	 */
	protected function commands(){
		$this->load(__DIR__.'/Commands');

		require base_path('routes/console.php');
	}
}
