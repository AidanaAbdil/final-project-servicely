<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Slot;

class Status extends Model
{
    public function slots()
    {
        return $this->hasMany(Slot::class);
    }
}
