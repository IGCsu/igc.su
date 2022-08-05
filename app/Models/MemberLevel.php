<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MemberLevel extends Model
{
    use HasFactory;

    protected $connection= 'heroku';

    protected $table = 'levels';

	protected $casts = ['id' => 'string'];

}
