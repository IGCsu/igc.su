<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;

class DiscordController extends Controller {

    /**
     * Перенаправляет запрос к Дискорду
     * @param Request $request
     */
    public function redirectToDiscord(Request $request){
        $last = $request->server('HTTP_REFERER');
        if($last) session(['return' => $last]);

        return Socialite::driver('discord')->redirect();
    }

    /**
     * Принятие запроса от Дискорда
     */
    public function handleDiscordCallback(){
        $user = Socialite::driver('discord')->stateless()->user();

        $finduser = User::where('discord_id', $user->id)->first();

        if(!$finduser){
            $finduser = new User();

            $finduser->name = $user->name;
            $finduser->email = $user->email;
            $finduser->discord_id = $user->id;
            $finduser->password = 'discord';

            $finduser->save();
        }elseif($finduser->name != $user->name){
            $finduser->name = $user->name;
            $finduser->save();
        }

        Auth::login($finduser, true);

        return redirect(session('return', '/'));
    }

}
