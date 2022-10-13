<?php

namespace App\Http\Controllers;

use App\Models\Election;
use App\Models\ElectionCandidate;
use App\Models\Member;
use App\Models\MemberLevel;
use App\Models\Role;
use App\Models\RoleLevel;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ElectionController extends Controller
{

	/**
	 * Возвращает страницу Устава
	 * @param Request $request
	 * @param string $date
	 * @return View|RedirectResponse
	 */
	public function page(Request $request, string $date = '')
	{
		$election = Election::firstWhere('date', $date);

		if (!$election) {
			return redirect()->route('election');
		}

		$candidates = ElectionCandidate::where('election_id', $election->id)->get()->keyBy('member_id');
		$members = Member::all()->keyBy('id');

		foreach ($candidates as $c => $candidate) {
			if (empty($members[$c])) {
				unset($candidates[$c]);
				continue;
			}

			$candidate->member = $members[$c];
		}

		/** @var $level MemberLevel */
		$level = MemberLevel::find(Auth::user()->discord_id);
		$levelRole = empty($level) ? null : $level->getRole(RoleLevel::orderBy('value', 'desc')->get());
		$role = empty($levelRole) ? null : Role::find($levelRole->id);

		$needRole = Role::find('575721274693910528');

		return view('election.page', [
			'election' => $election,
			'candidates' => $candidates,
			'members' => $members,
			'level' => $level,
			'needRole' => $needRole,
			'role' => $role,
			'access' => $this->getRegistrationAccess($level, $levelRole)
		]);
	}

	/**
	 * Возвращает страницу Устава
	 * @param Request $request
	 * @param string $date
	 * @return View|RedirectResponse
	 */
	public function registration(Request $request, string $date = '')
	{
		$election = Election::firstWhere('date', $date);

		if (!$election) {
			return redirect()->route('election');
		}

		/** @var $level MemberLevel */
		$level = MemberLevel::find(Auth::user()->discord_id);
		$levelRole = empty($level) ? null : $level->getRole(RoleLevel::orderBy('value', 'desc')->get());

		if (!$this->getRegistrationAccess($level, $levelRole)->result) {
			return redirect()->route('election.page', $date);
		}

		$candidate = ElectionCandidate::firstWhere([
			['member_id', Auth::user()->discord_id],
			['election_id', $election->id]
		]);

		if (!empty($candidate)) {
			return redirect()->route('election.candidate', $date, Auth::user()->discord_id);
		}

		return view('election.candidate', [
			'election' => $election,
			'candidate' => new ElectionCandidate(),
			'member' => Member::find(Auth::user()->discord_id)
		]);
	}

	/**
	 * Возвращает страницу Устава
	 * @param Request $request
	 * @param string $date
	 * @param string $id
	 * @return View|RedirectResponse
	 */
	public function candidate(Request $request, string $date = '', string $id = '')
	{
		$election = Election::firstWhere('date', $date);

		if (!$election) {
			return redirect()->route('election');
		}

		$candidate = ElectionCandidate::firstWhere([
			['election_id', $election->id],
			['member_id', $id]
		]);

		$member = Member::find($id);

		if (!empty($candidate) || !empty($member)) {
			return redirect()->route('election.page', $date);
		}

		return view('election.candidate', [
			'election' => $election,
			'candidate' => $candidate,
			'member' => $member
		]);
	}

	/**
	 * Возвращает страницу Устава
	 * @param MemberLevel|null $level
	 * @param object $levelRole
	 * @return object
	 */
	public function getRegistrationAccess(?MemberLevel $level, object $levelRole): object
	{
		$excluded = [
			'533245137216864286',
			'385450870638247958',
			'349158497209810945',
			'378478050460827648'
		];

		$list = [];
		$access = true;

		$list[] = empty($levelRole) || $levelRole->value > 100000;
		$list[] = empty($level) || $level->getActivityPer() === 100;
		$list[] = !in_array(Auth::user()->discord_id, $excluded);

		foreach ($list as $item) {
			if (!$item) {
				$access = false;
				break;
			}
		}

		return (object)[
			'list' => $list,
			'result' => $access
		];
	}


}
