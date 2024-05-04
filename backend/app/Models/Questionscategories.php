<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class Questionscategories extends Pivot
{
    protected $table = 'questionscategory';
    protected $fillable = ['name']
}
