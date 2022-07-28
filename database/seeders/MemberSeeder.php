<?php

namespace Database\Seeders;

use App\Http\Controllers\DiscordController;
use App\Models\Member;
use Illuminate\Database\Seeder;

class MemberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = DiscordController::getMembers();
        foreach($data as $item){
            $member = Member::whereId($item['user']['id'])->firstOrNew();

            $member->id = $item['user']['id'];

            $member->name = $item['nick'] ?? $item['user']['username'];
            $member->discriminator = $item['user']['discriminator'];
            $member->roles = $item['roles'];

            $member->generateAvatar($item['avatar'], $item['user']['avatar']);
            $member->generateHeadRole();
            $member->generateSearch();

            $member->save();
        }
    }
}
