<?php

namespace App\Http\Controllers;

use App\Models\Channel;
use App\Models\Law;
use App\Models\Role;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\View;

class LawController extends Controller
{

    /**
     * Массив каналов
     * @var Channel[]
     */
    private $channels = [];

    /**
     * Массив ролей
     * @var Role[]
     */
    private $roles = [];

    /**
     * Возвращает страницу Устава
     * @param Request $request
     * @param string $chapter
     * @return Application|Factory|\Illuminate\Contracts\View\View|RedirectResponse
     */
    public function page(Request $request, string $chapter = 'index')
    {
        if($chapter == 'history'){
            return $this->history();
        }

        $date = $request->query('date', null);

        if(!View::exists('law.'.$chapter)){
            return redirect()->route('law', $date ? ['date' => $date] : null);
        }

        $query = Law::where('deleted', 0)
            ->where('chapter', $chapter)
            ->groupBy('number')
            ->latest();

        if($date){
            $query = $query->whereDate('created_at', '<=', $date);
        }

        $lawRaw = $query->get();

        $this->setData(Channel::all(), 'channels');
        $this->setData(Role::all(), 'roles');

        $data = [];
        foreach($lawRaw as $lawRow){
            $lawRow->level = count(explode('.', $lawRow->number));

            $lawRow->text = $this->replace($lawRow->text);

            $data[$lawRow->number] = $lawRow;
        }

        uasort($data, function($a, $b){
            return version_compare($a->number, $b->number);
        });

        return view('law.'.$chapter, [ 'data' => $data ]);
    }

    /**
     * Вносит в $this данные
     * @param $data
     * @param string $name
     * @return void
     */
    public function setData($data, string $name)
    {
        foreach($data as $row) $this->{$name}[$row->id] = $row;
    }

    /**
     * Заменяет в переданной строке блоки ролей и каналов
     * @param string $text
     * @return string
     */
    public function replace(string $text): string
    {
        $text = preg_replace_callback(
            '/<#([0-9]+)>/i',
            function($matches){
                $id = $matches[1];
                if(empty($this->channels[$id])) return '<a target="_blank" title="'.$id.'" href="https://discord.com/channels/433242520034738186/'.$id.'">'.$id.'</a>';
				$type = $this->channels[$id]->type == 2
                    ? '<i class="bi bi-volume-down"></i>'
                    : '<i class="bi bi-hash"></i>';
				return '<a class="law-article-channel" target="_blank" title="'.$this->channels[$id]->topic.'" href="https://discord.com/channels/433242520034738186/'.$id.'">'.$type.$this->channels[$id]->name.'</a>';
            },
            $text
        );

        $text = preg_replace_callback(
            '/<@([0-9]+)>/i',
            function($matches){
                $id = $matches[1];
                return '<b class="law-article-role" role="'.$id.'" style="color: #'.dechex($this->roles[$id]->color).'"><i class="icon-line-at-sign"></i>'.$this->roles[$id]->name.'</b>';
            },
            $text
        );

        return $text;
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

        $author = $request->input('author', null);

        $lawRow = new Law();

        $lawRow->chapter = $request->input('chapter');
        $lawRow->number = $request->input('number');
        $lawRow->text = $request->input('text');

        if($author) $lawRow->author = $author;

        $lawRow->save();

        return response()->json([ 'message' => 'success' ], 200);
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

        $author = $request->input('author', null);
        $deleted = $request->input('deleted', null);

        $lawRow->chapter = $request->input('chapter');
        $lawRow->number = $request->input('number');
        $lawRow->text = $request->input('text');

        if($author) $lawRow->author = $author;
        if($deleted) $lawRow->deleted = $deleted;

        $lawRow->save();

        return response()->json([ 'message' => 'success' ], 200);
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

        return response()->json([ 'message' => 'success' ], 200);
    }

}
