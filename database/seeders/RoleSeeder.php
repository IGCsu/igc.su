<?php

namespace Database\Seeders;

use App\Http\Controllers\DiscordController;
use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = DiscordController::getRoles();
        foreach($data as $item){
            $role = Role::whereId($item['id'])->firstOrNew();

            $role->id = $item['id'];

            $role->name = $item['name'];
            $role->color = DiscordController::dec2hex($item['color']);
            $role->position = $item['position'];

            $role->save();
        }
    }
}
