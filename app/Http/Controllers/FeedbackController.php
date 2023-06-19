<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use App\Models\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class FeedbackController extends Controller
{
    public function store($id, Request $request)
    {
        $validatedData = $request->validate([
            'rating' => 'required',
            'review' => 'required|max:100',
        ]);
        // Set user_id to the authenticated user's ID
        $validatedData['user_id'] = Auth::id();
        $validatedData['session_id'] = $id;

        $feedback = Feedback::create($validatedData);

        // Update the user's rating based on the session's owner
        $session = Session::findOrFail($id);
        $user = $session->user;
        $sessions = $user->sessions;
        $feedbacks = $sessions->flatMap->feedbacks;
        $averageRating = $feedbacks->avg('rating');
        $user->rating = $averageRating;
        $user->save();
        return redirect()->back();
    }
}
