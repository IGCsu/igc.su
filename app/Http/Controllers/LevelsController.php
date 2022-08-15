<?php

namespace App\Http\Controllers;

use App\Models\Member;
use App\Models\MemberLevel;
use App\Models\Role;
use App\Models\RoleLevel;

use Illuminate\Support\Js;

class LevelsController extends Controller
{

	/**
	 * @throws \JsonException
	 */
	public function page(){
		$member = new Member;

		$membersRaw = Member::all()->keyBy('id');
		$rolesRaw = Role::all()->keyBy('id');
		$membersLevels = MemberLevel::where([
			['messagesLegit', '>', 10],
			['messagesAll', '>', 10],
			['activity', '>', 0]
		])->get()->keyBy('id');
		$rolesLevels = RoleLevel::orderBy('value', 'desc')->get();

		$r = 0;
		$roles = [];
		foreach($rolesLevels as $role){
			if(!isset($rolesRaw[$role->id])) continue;

			$rolesRaw[$role->id]->exp = $role->value;
			$rolesRaw[$role->id]->messagesLegit = 0;
			$rolesRaw[$role->id]->activityPer = 0;
			$rolesRaw[$role->id]->messagesAll = 0;
			$rolesRaw[$role->id]->symbolsAvg = 0;
			$rolesRaw[$role->id]->overpost = 0;
			$rolesRaw[$role->id]->symbols = 0;
			$rolesRaw[$role->id]->count = 0;
			$rolesRaw[$role->id]->pos = $r;

			$roles[$r] = $rolesRaw[$role->id];
			++$r;
		}

		$all = (object) [
			'messagesLegit' => 0,
			'activityPer' => 0,
			'messagesAll' => 0,
			'symbolsAvg' => 0,
			'overpost' => 0,
			'symbols' => 0,
			'count' => 0,
		];

		$membersSort = [];
		$members = [];
		foreach($membersLevels as $m => $data){
			if(!isset($membersRaw[$m])) continue;

			$members[$m] = $membersRaw[$m];

			$members[$m]->messagesLegit = $data->messagesLegit;
			$members[$m]->messagesAll = $data->messagesAll;
			$members[$m]->symbolsAvg = $data->symbolsAvg;
			$members[$m]->overpost = $data->overpost;
			$members[$m]->symbols = $data->symbols;

			$members[$m]->overpost = $data->getOverpost();
			$members[$m]->symbolsAvg = $data->getSymbolsAvg();
			$members[$m]->activityPer = $data->getActivityPer();
			$members[$m]->exp = $data->getExp();
			$members[$m]->expFine = $data->getExpFine();
			$members[$m]->role = $data->getRole($roles);
			$members[$m]->nextRole = $data->getNextRole($roles);
			$members[$m]->nextRoleProgress = $data->getNextRoleProgress($roles);

			$membersSort[] = (object) ['id' => $m, 'exp' => $members[$m]->exp];

			$all->messagesLegit += $members[$m]->messagesLegit;
			$all->messagesAll += $members[$m]->messagesAll;
			$all->activityPer += $members[$m]->activityPer;
			$all->symbolsAvg += $members[$m]->symbolsAvg;
			$all->overpost += $members[$m]->overpost;
			$all->symbols += $members[$m]->symbols;
			$all->count += 1;

			$roles[$members[$m]->role->pos]->messagesLegit += $members[$m]->messagesLegit;
			$roles[$members[$m]->role->pos]->messagesAll += $members[$m]->messagesAll;
			$roles[$members[$m]->role->pos]->activityPer += $members[$m]->activityPer;
			$roles[$members[$m]->role->pos]->symbolsAvg += $members[$m]->symbolsAvg;
			$roles[$members[$m]->role->pos]->overpost += $members[$m]->overpost;
			$roles[$members[$m]->role->pos]->symbols += $members[$m]->symbols;
			$roles[$members[$m]->role->pos]->count += 1;
		}

		usort($membersSort, function($a, $b){
			if($a->exp == $b->exp) return 0;
			return ($a->exp < $b->exp) ? 1 : -1;
		});

		foreach($membersSort as $pos => $sort){
			$members[$sort->id]->pos = $pos + 1;
		}

		$all->messagesLegit = round($all->messagesLegit / $all->count);
		$all->messagesAll = round($all->messagesAll / $all->count);
		$all->activityPer = round($all->activityPer / $all->count, 1);
		$all->symbolsAvg = round($all->symbolsAvg / $all->count, 1);
		$all->overpost = round($all->overpost / $all->count, 1);
		$all->symbols = round($all->symbols / $all->count);

		foreach($roles as $role){
			$role->messagesLegit = round($role->messagesLegit / $role->count);
			$role->messagesAll = round($role->messagesAll / $role->count);
			$role->activityPer = round($role->activityPer / $role->count, 1);
			$role->symbolsAvg = round($role->symbolsAvg / $role->count, 1);
			$role->overpost = round($role->overpost / $role->count, 1);
			$role->symbols = round($role->symbols / $role->count);
		}

		foreach($members as $member){
			$member->diff = (object) [
				'overpost' => round($all->overpost - $member->overpost),
				'activityPer' => round($all->activityPer - $member->activityPer),
				'symbolsAvg' => round(($member->symbolsAvg - $all->symbolsAvg) / $all->symbolsAvg * 100, 1)
			];
			$member->diffRole = (object) [
				'overpost' => round($member->role->overpost - $member->overpost),
				'activityPer' => round($member->role->activityPer - $member->activityPer),
				'symbolsAvg' => round(($member->symbolsAvg - $member->role->symbolsAvg) / $member->role->symbolsAvg * 100, 1)
			];
		}

		return view('levels', [
			'members' => Js::from($members),
			'roles' => Js::from($roles),
			'all' => Js::from($all)
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
