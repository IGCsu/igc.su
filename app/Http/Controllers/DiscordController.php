<?php

namespace App\Http\Controllers;

use GuzzleHttp;

class DiscordController extends Controller
{

    /**
     * Клиент GuzzleHttp
     * @var GuzzleHttp\Client
     */
    private static $client;

    /**
     * Возвращает массив объектов каналов сообщества
     * @return array {@link https://discord.com/developers/docs/resources/channel#channel-object}
     * @throws GuzzleHttp\Exception\GuzzleException
     */
    public static function getChannels(): array
    {
        return self::getData('/channels');
    }

    /**
     * Возвращает массив объектов ролей сообщества
     * @return array {@link https://discord.com/developers/docs/topics/permissions#role-object}
     * @throws GuzzleHttp\Exception\GuzzleException
     */
    public static function getRoles(): array
    {
        return self::getData('/roles');
    }

    /**
     * Возвращает массив объектов участников сообщества
     * @return array {@link https://discord.com/developers/docs/resources/guild#guild-member-object}
     * @throws GuzzleHttp\Exception\GuzzleException
     */
    public static function getMembers(): array
    {
        $members = [];
        $last = 0;

        while(true){
            $data = self::getData('/members?limit=1000&after='.$last);

            $members = array_merge($members, $data);
            $last = $data[array_key_last($data)];

            if(count($data) != 1000) break;
        }

        return $members;
    }

    /**
     * Возвращает клиент GuzzleHttp
     * @return GuzzleHttp\Client
     */
    public static function getGuzzleClient(): GuzzleHttp\Client
    {
        if(!empty(self::$client)) return self::$client;

        return self::$client = new GuzzleHttp\Client([
            'headers' => [
                'Authorization' => 'Bot '.env('DISCORD_TOKEN'),
                'Content-type' => 'application/json'
            ]
        ]);
    }

    /**
     * Выполняет запрос и возвращает данные
     * @param string $url
     * @return array
     * @throws GuzzleHttp\Exception\GuzzleException
     */
    public static function getData(string $url): array
    {
        $body = self::getGuzzleClient()
            ->get('https://discord.com/api/v9/guilds/'.env('DISCORD_GUILD_ID').$url)
            ->getBody();

        return json_decode($body, true);
    }

}
