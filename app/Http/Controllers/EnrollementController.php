<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EnrollementController extends Controller
{


    public function store(Request $request)
    {
        $request->validate([
            'note' => 'nullable|string',
        ]);

        $enrollment = new Enrollment();
        $enrollment->enrollment_date = now(); // Set the enrollment date to the current date
        $enrollment->note = $request->input('note');
        $enrollment->user_id = auth()->user()->id; // Assuming you have authentication in place
        // $enrollment->session_id = $sessionId; // Replace $sessionId with the actual session ID

        $enrollment->save();

        // Redirect the user to a success page or any other desired page
        return Redirect::to('/session/{id}');
    }

}