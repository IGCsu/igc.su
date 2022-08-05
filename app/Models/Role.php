<?php

namespace App\Models;

use App\Http\Controllers\DiscordController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

	protected $casts = ['id' => 'string'];

    /**
     * Возвращает экземпляр по ID, если его находит. Если нет - запрашивает его из Discord API
     * @param $id
     * @return Role|null
     */
    public static function findOrFetch($id): ?Role
    {
        $role = self::whereId($id)->firstOrNew();

        if(!empty($role->id)){
            return $role;
        }

        $data = DiscordController::getData('/roles/'.$id);

        if(!$data) return null;

        $role->id = $data['user']['id'];

        $role->name = $data['name'];
        $role->color = $data['color'];
        $role->position = $data['position'];

        $role->save();

        return self::find($id);
    }

}
