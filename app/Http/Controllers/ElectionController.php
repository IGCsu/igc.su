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
		if (!Auth::check()) {
			return redirect()->route('login');
		}

		$data = (object)[
			'user' => Auth::user()->discord_id
		];

		$data->election = Election::firstWhere('date', $date);

		if (!$data->election) {
			return redirect()->route('election');
		}

		$data->candidates = ElectionCandidate::where('election_id', $data->election->id)->get()->keyBy('member_id');
		$data->members = Member::all()->keyBy('id');

		foreach ($data->candidates as $c => $candidate) {
			if (empty($data->members[$c])) {
				unset($data->candidates[$c]);
				continue;
			}

			$candidate->member = $data->members[$c];
		}

		$data->needRole = Role::find('575721274693910528');

		/** @var MemberLevel */
		$data->level = MemberLevel::find($data->user);
		$levelRole = empty($data->level) ? null : $data->level->getRole(RoleLevel::orderBy('value', 'desc')->get());
		$data->role = empty($levelRole) ? null : Role::find($levelRole->id);

		$data->access = $this->getRegistrationAccess($data->level, $levelRole);

		return view('election.page', (array)$data);
	}

	/**
	 * Возвращает страницу Устава
	 * @param Request $request
	 * @param string $date
	 * @return View|RedirectResponse
	 */
	public function registration(Request $request, string $date = '')
	{
		if (!Auth::check()) {
			return redirect()->route('login');
		}

		$user = Auth::user()->discord_id;

		$election = Election::firstWhere('date', $date);

		if (!$election) {
			return redirect()->route('election');
		}

		/** @var $level MemberLevel */
		$level = MemberLevel::find($user);
		$levelRole = empty($level) ? null : $level->getRole(RoleLevel::orderBy('value', 'desc')->get());

		if (!$this->getRegistrationAccess($level, $levelRole)->result) {
			return redirect()->route('election.page', $date);
		}

		$candidate = ElectionCandidate::where([
			['member_id', $user],
			['election_id', $election->id]
		])->firstOrNew();

		if (!empty($candidate->id)) {
			return redirect()->route('election.candidate', $date, $user);
		}

		return view('election.candidate', [
			'election' => $election,
			'candidate' => $candidate,
			'member' => Member::find($user),
			'me' => $user
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
		if (!Auth::check()) {
			return redirect()->route('login');
		}

		$user = Auth::user()->discord_id;

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
			'member' => $member,
			'me' => $user
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
