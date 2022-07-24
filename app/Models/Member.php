<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;

    protected $casts = [
        'roles' => 'array',
    ];

    /**
     * Возвращает URL путь к аватарке пользователя и сохраняет его
     * @param string|null $avatar Hesh аватарки пользователя
     * @return string Ссылка
     */
    public function generateAvatar(?string $avatar = null): string
    {
        return $this->avatar = $avatar == null
            ? $this->getDefaultAvatarLink(substr($this->discriminator, -1))
            : 'avatars/'.$this->id.'/'.$avatar;
    }

    /**
     * Возвращает URL путь к дефолтному аватару Дискорда
     * @param string $discriminator Последняя цифра дискриминатора
     * @return string Ссылка
     */
    public static function getDefaultAvatarLink($discriminator): string
    {
        $result = 0;
        switch($discriminator){
            case '1': case '6': $result = 1; break;
            case '2': case '7': $result = 2; break;
            case '3': case '8': $result = 3; break;
            case '4': case '9': $result = 4; break;
        }
        return 'embed/avatars/'.$result.'.png';
    }

    /**
     * Возвращает текст для поиска и сохраняет его
     * @return string
     */
    public function generateSearch(): string
    {
        return $this->search = $this->id.mb_strtolower($this->name).'#'.$this->discriminator;
    }

    /**
     * Находит, сохраняет и возвращает ID высшей роли у пользователя
     * @return string Role ID
     */
    public function generateHeadRole(): string
    {
        $this->headRole = '0';
        $roles = Role::orderBy('position', 'asc')->get();

        foreach($roles as $role){
            if(in_array($role, $this->roles)){
                $this->headRole = $role->id;
                break;
            }
        }

        return $this->headRole;
    }

}
