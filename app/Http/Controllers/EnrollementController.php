<?php

namespace App\Http\Controllers;

use App\Models\Enrollment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class EnrollementController extends Controller
{


    public function store($sessionId, Request $request)
    {
        $enrollment = new Enrollment();
        $enrollment->enrollment_date = now();
        $enrollment->note = $request->input('note');
        $enrollment->user_id = auth()->user()->id;
        $enrollment->session_id = $sessionId;

        $enrollment->save();

        return Redirect::to('/');
    }

}
