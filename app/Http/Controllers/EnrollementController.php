<?php

namespace App\Http\Controllers;

use App\Models\Enrollment;
use App\Models\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class EnrollementController extends Controller
{


    public function store($id, Request $request)
    {
        $enrolled = Enrollment::where('user_id', Auth::id())->where('session_id', $id)->first();
        if ($enrolled) {
            return Redirect::to('/dashboard');
        }
        $enrollment = new Enrollment();
        $enrollment->enrollment_date = now();
        $enrollment->note = $request->input('note');
        $enrollment->user_id = Auth::id();
        $enrollment->session_id = $id;

        $enrollment->save();

        return Redirect::to('/dashboard');
    }

}
