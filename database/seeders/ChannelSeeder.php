<?php

namespace Database\Seeders;

use App\Models\Channel;
use Illuminate\Database\Seeder;
use App\Http\Controllers\DiscordController;

class ChannelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $data = DiscordController::getChannels();
        foreach($data as $item){
            $channel = Channel::whereId($item['id'])->firstOrNew();

            $channel->id = $item['id'];

            $channel->type = $item['type'];
            $channel->position = $item['position'];
            $channel->name = $item['name'];
            $channel->topic = $item['topic'] ?? null;
            $channel->nsfw = $item['nsfw'] ?? false;
            $channel->parent_id = $item['parent_id'];

            $channel->save();
        }

    }
}
