<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $guarded = ["id"];

    function getImageAttribute($image){
        
        if(str_starts_with($image,"http")){
            return $image;
        }
        return config("app_url").asset('/storage/' . $image);
    }

}
