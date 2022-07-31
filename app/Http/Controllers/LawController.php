<?php

namespace App\Http\Controllers;

use App\Models\Law;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\View;

class LawController extends Controller
{


    public function page(Request $request, $chapter = 'index')
    {
        if($chapter == 'history'){
            return $this->history();
        }

        $date = $request->query('date', null);

        if(!View::exists('law.'.$chapter)){
            return redirect()->route('law', $date ? ['date' => $date] : null);
        }

        $query = Law::where('deleted', 1)
            ->where('chapter', $chapter)
            ->groupBy('number')
            ->latest();

        if($date){
            $query = $query->whereDate('created_at', '<=', $date);
        }

        return view('law.'.$chapter, [
            'data' => $query->get()
        ]);
    }

    /**
     * @return Application|Factory|\Illuminate\Contracts\View\View
     */
    public function history()
    {
        return view('law.history');
    }

    /**
     * Получение всех пунктов Устава
     * @param Request $request
     * @return LengthAwarePaginator
     */
    public function index(Request $request): LengthAwarePaginator
    {
        $count = (integer) $request->input('count', 10000);

        return Law::paginate($count);
    }

    /**
     * Создание пункта Устава
     * @param Request $request
     * @return JsonResponse
     */
    public function create(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'chapter' => ['required', 'string'],
            'number' => ['required', 'string'],
            'text' => ['required', 'string'],
            'author' => ['string'],
        ]);

        if($validator->fails()){
            return response()->json([
                'error' => '400',
                'message' => $validator->errors()->first()
            ], 400);
        }

        $lawRow = new Law();

        $lawRow->chapter = $request->input('chapter');
        $lawRow->number = $request->input('number');
        $lawRow->text = $request->input('text');
        $lawRow->author = $request->input('author', null);

        $lawRow->save();

        return response()->json('success', 200);
    }

    /**
     * Получение пункта Устава
     * @param Request $request
     * @param integer $id
     * @return JsonResponse
     */
    public function show(Request $request, int $id): JsonResponse
    {
        $lawRow = Law::find($id);

        if(empty($lawRow)){
            return response()->json([
                'error' => '404',
                'message' => 'Not found'
            ], 400);
        }

        return response()->json($lawRow, 200);
    }

    /**
     * Обновление пункта Устава
     * @param Request $request
     * @param int $id
     * @return JsonResponse
     */
    public function update(Request $request, int $id): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'chapter' => ['required', 'string'],
            'number' => ['required', 'string'],
            'text' => ['required', 'string'],
            'author' => ['string'],
            'deleted' => ['boolean'],
        ]);

        if($validator->fails()){
            return response()->json([
                'error' => '400',
                'message' => $validator->errors()->first()
            ], 400);
        }

        $lawRow = Law::find($id);

        if(empty($lawRow)){
            return response()->json([
                'error' => '404',
                'message' => 'Not found'
            ], 400);
        }

        $lawRow->chapter = $request->input('chapter');
        $lawRow->number = $request->input('number');
        $lawRow->text = $request->input('text');
        $lawRow->author = $request->input('author', null);
        $lawRow->deleted = $request->input('deleted', null);

        $lawRow->save();

        return response()->json('success', 200);
    }

    /**
     * Удаление пункта Устава
     * @param Request $request
     * @param int $id
     * @return JsonResponse
     */
    public function delete(Request $request, int $id): JsonResponse
    {
        $lawRow = Law::find($id);

        if(empty($lawRow)){
            return response()->json([
                'error' => '404',
                'message' => 'Not found'
            ], 400);
        }

        $lawRow->deleted = 1;

        $lawRow->save();

        return response()->json('success', 200);
    }

}
