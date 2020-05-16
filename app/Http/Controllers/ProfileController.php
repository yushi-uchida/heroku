<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\HTML;

use App\Profiles;

class ProfileController extends Controller
{
    public function index(Request $request){
        $posts = Profiles::all()->sortByDesc('updated_at');
        
        if(count($posts) > 0){
            $headline = $posts->shift();
        }else{
            $headline = null;
        }
        
        //profiles/index.blade.phpファイルを渡している
        //またViewテンプレートにheadline,posts,という変数を渡している
        return view('profile.index', ['headline' => $headline, 'posts' => $posts]);
    }
}