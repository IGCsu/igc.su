<?php

namespace App\Models;

use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\DiscordController;

class Member extends Model
{
    use HasFactory;

    protected $casts = [
        'roles' => 'array',
		'id' => 'string'
    ];

    /**
     * Возвращает URL путь к аватарке пользователя и сохраняет его
     * @param string|null $guildAvatar Hesh аватарки участника сообщества
     * @param string|null $userAvatar Hesh аватарки пользователя
     * @return string Ссылка
     */
    public function generateAvatar(?string $guildAvatar = null, ?string $userAvatar = null): string
    {
        if($guildAvatar !== null){
            return $this->avatar = 'guilds/'.env('DISCORD_GUILD_ID').'/users/'.$this->id.'/avatars/'.$guildAvatar;
        }

        if($userAvatar !== null){
            return $this->avatar = 'avatars/'.$this->id.'/'.$userAvatar;
        }

        return $this->avatar = $this->getDefaultAvatarLink(substr($this->discriminator, -1));
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
    public function generateHeadRole()
    {
        $this->headRole = '0';
        $roles = Role::orderBy('position', 'desc')->get();

        foreach($roles as $role){
            if(in_array($role->id, $this->roles)){
                $this->headRole = $role->id;
                break;
            }
        }

        return $this->headRole;
    }

    /**
     * Возвращает экземпляр роли для высшей роли участника сообщества
     * @return Role|null
     */
    public function getHeadRole(): ?Role
    {
        return Role::find($this->headRole);
    }

	/**
	 * Возвращает экземпляр по ID, если его находит. Если нет - запрашивает его из Discord API
	 * @param $id
	 * @return Member|null
	 */
    public static function findOrFetch($id): ?Member
    {
		$member = self::whereId($id)->firstOrNew();

        if(!empty($member) || !empty($member->id)){
            return $member;
        }

		return self::fetch($id, $member);
    }

	/**
	 * Запрашивает из Discord API экземпляр, сохраняет его в базе и возвращает
	 * @param $id
	 * @param Member [$member]
	 * @return Member|null
	 */
	public static function fetch($id, $member = null): ?Member
	{
		try{
			$data = DiscordController::getGuildData('/members/'.$id);
		}catch(GuzzleException $e){
			try{
				$data = DiscordController::getData('/users/'.$id);
			}catch(GuzzleException $e){
				return null;
			}
		}

		if(!$member){
			$member = self::whereId($id)->firstOrNew();
		}

		if(empty($data['user'])){
			$member->id = $data['id'];
			$member->name = $data['username'];
			$member->discriminator = $data['discriminator'];
			$member->roles = [];

			$member->generateAvatar(null, $data['avatar']);
		}else{
			$member->id = $data['user']['id'];
			$member->name = $data['nick'] ?? $data['user']['username'];
			$member->discriminator = $data['user']['discriminator'];
			$member->roles = $data['roles'];

			$member->generateAvatar($data['avatar'], $data['user']['avatar']);
		}


		$member->generateHeadRole();
		$member->generateSearch();

		$member->save();

		return $member;
	}

}
