<?php

namespace App\Http\Controllers;

use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

use App\Models\Channel;

class ChannelController extends Controller
{

	/**
	 * Получение всех каналов
	 * @param Request $request
	 * @return LengthAwarePaginator
	 */
	public function index(Request $request): LengthAwarePaginator
	{
		$count = (integer) $request->input('count', 10000);

		return Channel::paginate($count);
	}

	/**
	 * Создание канала
	 * @return JsonResponse
	 */
	public function create(): JsonResponse
	{
		return response()->json([
			'error' => '501',
			'message' => 'Creation not supported'
		], 501);
	}

	/**
	 * Получение канала
	 * @param Request $request
	 * @param integer $id
	 * @return JsonResponse
	 */
	public function show(Request $request, int $id): JsonResponse
	{
		$channel = Channel::find($id);

		if(empty($channel)){
			return response()->json([
				'error' => '404',
				'message' => 'Not found'
			], 400);
		}

		return response()->json($channel, 200);
	}

	/**
	 * Обновление канала
	 * @param Request $request
	 * @param int $id
	 * @return JsonResponse
	 */
	public function update(Request $request, int $id): JsonResponse
	{
		$validator = Validator::make($request->all(), [
			'type' => ['required', 'integer'],
			'position' => ['required', 'integer'],
			'name' => ['required', 'string', 'max:1000'],
			'topic' => ['required', 'string', 'max:1000'],
			'nsfw' => ['required', 'boolean'],
			'parent_id' => ['required', 'string'],
		]);

		if($validator->fails()){
			return response()->json([
				'error' => '400',
				'message' => $validator->errors()->first()
			], 400);
		}

		$channel = Channel::whereId($id)->firstOrNew();

		$channel->id = $id;

		$channel->type = $request->input('type');
		$channel->position = $request->input('position');
		$channel->name = $request->input('name');
		$channel->topic = $request->input('topic');
		$channel->nsfw = $request->input('nsfw');
		$channel->parent_id = $request->input('parent_id');

		$channel->save();

		return response()->json([ 'message' => 'success' ], 200);
	}

	/**
	 * Удаление канала
	 * @param Request $request
	 * @param int $id
	 * @return JsonResponse
	 */
	public function delete(Request $request, int $id): JsonResponse
	{
		$channel = Channel::find($id);

		if(empty($channel)){
			return response()->json([
				'error' => '404',
				'message' => 'Not found'
			], 400);
		}

		$channel->delete();

		return response()->json([ 'message' => 'success' ], 200);
	}

}
