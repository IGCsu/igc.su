<?php

namespace App\Http\Controllers;

use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

use App\Models\Role;

class RoleController extends Controller
{

    /**
     * Получение всех ролей
     * @param Request $request
     * @return LengthAwarePaginator
     */
    public function index(Request $request): LengthAwarePaginator
    {
        $count = (integer) $request->input('count', 10000);

        return Role::paginate($count);
    }

    /**
     * Создание роли
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
     * Получение роли
     * @param Request $request
     * @param integer $id
     * @return JsonResponse
     */
    public function show(Request $request, int $id): JsonResponse
    {
        $role = Role::find($id);

        if(empty($role)){
            return response()->json([
                'error' => '404',
                'message' => 'Not found'
            ], 400);
        }

        return response()->json($role, 200);
    }

    /**
     * Обновление роли
     * @param Request $request
     * @param int $id
     * @return JsonResponse
     */
    public function update(Request $request, int $id): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:1000'],
            'color' => ['required', 'string'],
            'position' => ['required', 'integer']
        ]);

        if($validator->fails()){
            return response()->json([
                'error' => '400',
                'message' => $validator->errors()->first()
            ], 400);
        }

        $role = Role::whereId($id)->firstOrNew();

        $role->id = $id;

        $role->name = $request->input('name');
        $role->color = $request->input('color');
        $role->position = $request->input('position');

        $role->save();

        return response()->json('success', 200);
    }

    /**
     * Удаление роли
     * @param Request $request
     * @param int $id
     * @return JsonResponse
     */
    public function delete(Request $request, int $id): JsonResponse
    {
        $role = Role::find($id);

        if(empty($role)){
            return response()->json([
                'error' => '404',
                'message' => 'Not found'
            ], 400);
        }

        $role->delete();

        return response()->json('success', 200);
    }

}
