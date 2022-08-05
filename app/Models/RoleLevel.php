<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RoleLevel extends Model
{
    use HasFactory;

	protected $connection= 'heroku';

	protected $table = 'levels_roles';

	protected $casts = ['id' => 'string'];

}
