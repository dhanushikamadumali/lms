<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class Post extends Pivot
{
    use HasFactory;
    protected $table = "post";
    protected $fillable = ["posts","title","content","catageory","image"];


}
