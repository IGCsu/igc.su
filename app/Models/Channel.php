<?php

namespace App\Models;

use App\Http\Controllers\DiscordController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Channel extends Model
{
    use HasFactory;

	protected $casts = ['id' => 'string'];

    /**
     * Возвращает экземпляр по ID, если его находит. Если нет - запрашивает его из Discord API
     * @param $id
     * @return Channel|null
     */
    public static function findOrFetch($id): ?Channel
    {
        $channel = self::whereId($id)->firstOrNew();

        if(!empty($role->id)){
            return $role;
        }

        $data = DiscordController::getData('/channels/'.$id);

        if(!$data) return null;

        $channel->id = $data['user']['id'];

        $channel->type = $data['id'];
        $channel->position = $data['position'];
        $channel->name = $data['name'];
        $channel->topic = $data['topic'];
        $channel->nsfw = $data['nsfw'];
        $channel->parent_id = $data['parent_id'];

        $channel->save();

        return self::find($id);
    }

}
