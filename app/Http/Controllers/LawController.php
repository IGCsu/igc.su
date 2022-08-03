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
     * Массив глав Устава
     * @var array
     */
    public $chapters = [
        'index' => ['icon' => null, 'title' => 'Index', 'desc' => ''],
        'general' => ['icon' => 'star', 'title' => 'General', 'desc' => 'Общие положения, основные принципы сообщества.<br>Права и обязанности участников.'],
        'social' => ['icon' => 'chat-heart', 'title' => 'Social', 'desc' => 'Требования и рекомендации к общению в чате.'],
        'orders' => ['icon' => 'shield-exclamation', 'title' => 'Orders', 'desc' => 'Свод правил и пояснение к ним.'],
        'management' => ['icon' => 'bank', 'title' => 'Management', 'desc' => 'Органы управления сообществом и структуры сообщества.'],
        'bots' => ['icon' => 'gear', 'title' => 'Bots', 'desc' => 'О функциональности и возможностях ботов.'],
        'roles' => ['icon' => 'gem', 'title' => 'Roles', 'desc' => 'Описание ролей и принципы их проектирования.'],
        'channels' => ['icon' => 'hash', 'title' => 'Channels', 'desc' => 'Описание каналов и категорий.']
    ];

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
        $date = $request->query('date', null);

        $this->setData(Channel::all(), 'channels');
        $this->setData(Role::all(), 'roles');

        if($chapter == 'history'){
            return $this->history();
        }

        if($chapter == 'raw'){
            return $this->raw($date);
        }

        if(!View::exists('law.'.$chapter)){
            return redirect()->route('law', $date ? ['date' => $date] : null);
        }

        return view('law.'.$chapter, [
            'data' => $this->getLawChapter($chapter, $date, false),
            'chapters' => $this->chapters,
            'channels' => $this->chapters,
            'roles' => $this->roles
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
     * @return Application|Factory|\Illuminate\Contracts\View\View
     */
    public function raw($date)
    {
        foreach($this->chapters as $key => $chapter){
            $this->chapters[$key]['list'] = $this->getLawChapter($key, $date, true);
        }

        return view('law.raw', [
            'chapters' => $this->chapters
        ]);
    }


    /**
     *******************************************************************************************************************
     * Методы возвращения данных
     *******************************************************************************************************************
     */

    /**
     * Вносит в $this данные
     * @param $data
     * @param string $name
     * @return void
     */
    private function setData($data, string $name)
    {
        foreach($data as $row) $this->{$name}[$row->id] = $row;
    }

    /**
     * Заменяет в переданной строке блоки ролей и каналов
     * @param string $text
     * @param bool $replaceOption
     * @return string
     */
    private function replace(string $text, bool $replaceOption): string
    {
        $text = preg_replace_callback(
            '/<#([0-9]+)>/i',
            function($matches) use($replaceOption){
                $id = $matches[1];
                if(empty($this->channels[$id])) return '<a target="_blank" title="'.$id.'" href="https://discord.com/channels/433242520034738186/'.$id.'">'.$id.'</a>';
                $type = $replaceOption ? '#'
                    : ($this->channels[$id]->type == 2 ? '<i class="bi bi-volume-down"></i>' : '<i class="bi bi-hash"></i>');
                return '<a class="law-article-channel" target="_blank" title="'.$this->channels[$id]->topic.'" href="https://discord.com/channels/433242520034738186/'.$id.'">'.$type.$this->channels[$id]->name.'</a>';
            },
            $text
        );

        $text = preg_replace_callback(
            '/<@([0-9]+)>/i',
            function($matches) use($replaceOption){
                $id = $matches[1];
                $type = $replaceOption ? '@' : '<i class="bi bi-at"></i>';
                $color = dechex($this->roles[$id]->color);
                if(strlen($color) < 6) $color = '0'.$color;
                return '<b class="law-article-role" role="'.$id.'" style="color: #'.$color.'">'.$type.$this->roles[$id]->name.'</b>';
            },
            $text
        );

        if($replaceOption){
            $text = preg_replace('/&shy;/i', '', $text);
        }

        return $text;
    }

    /**
     * @param string $chapter
     * @param string|null $date
     * @param bool $replaceOption
     * @return array
     */
    private function getLawChapter(string $chapter, ?string $date, bool $replaceOption): array
    {
        $query = Law::where('deleted', 0)
            ->where('chapter', $chapter)
            ->groupBy('number')
            ->latest();

        if($date){
            $query = $query->whereDate('created_at', '<=', $date);
        }

        $lawRaw = $query->get();

        $data = [];
        foreach($lawRaw as $lawRow){
            $lawRow->level = count(explode('.', $lawRow->number));

            $lawRow->text = $this->replace($lawRow->text, $replaceOption);

            $data[$lawRow->number] = $lawRow;
        }

        uasort($data, function($a, $b){
            return version_compare($a->number, $b->number);
        });

        return $data;
    }


    /**
     *******************************************************************************************************************
     * API
     *******************************************************************************************************************
     */

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
