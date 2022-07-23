<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Http\Request;

use App\Models\Member;

class MemberController extends Controller
{

    /**
     * Получение всех участников сообщества
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request): \Illuminate\Http\JsonResponse
    {
        $count = (integer) $request->input('count', 10000);

        return Member::paginate($count);
    }

    /**
     * Создание участника сообщества
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            'error' => '501',
            'message' => 'Creation not supported'
        ], 501);
    }

    /**
     * Получение участника сообщества
     * @param Request $request
     * @param integer $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, int $id): \Illuminate\Http\JsonResponse
    {
        $member = Member::find($id);

        if(empty($member)){
            return response()->json([
                'error' => '404',
                'message' => 'Not found'
            ], 400);
        }

        return $member;
    }

    /**
     * Обновление участника сообщества
     * @param Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, int $id)
    {

    }

    /**
     * Удаление участника сообщества
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete(): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            'error' => '501',
            'message' => 'Deletion not supported'
        ], 501);
    }



}
