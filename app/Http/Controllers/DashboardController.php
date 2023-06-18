<?php

namespace App\Http\Controllers;

use App\Models\Enrollment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // sessions order by date
        $sessions = Auth::user()->sessions;
        // enrollments in the last session
        // $lastEnrollments = $sessions->first()->enrollments;
        // // feedbacks in the last session
        // $lastFeedbacks = $sessions->first()->feedbacks;
        // // get all the enrollments in all sessions by user
        // $myEnrollments = Enrollment::where('user_id', Auth::user()->id)->get();
        // // get all the feedbacks in all sessions by user
        // $myFeedbacks = Auth::user()->feedbacks;
        // get all the enrollments in all sessions of the user
        // $sessionsEnrollments = Auth::user()->sessions->enrollments;
        return Inertia::render('Dashboard/Dashboard', [
            'sessions' => $sessions,
            // 'lastEnrollments' => $lastEnrollments,
            // 'lastFeedbacks' => $lastFeedbacks,
            // 'myEnrollments' => $myEnrollments,
            // 'myFeedbacks' => $myFeedbacks,
            // 'sessionsEnrollments' => $sessionsEnrollments,
        ]);
    }
}
