<?php

namespace App\Http\Controllers;

use App\Http\Resources\AllSessionsCollection;
use App\Http\Resources\EnrollmentCollection;
use App\Http\Resources\SessionResource;
use App\Models\Enrollment;
use App\Models\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        // get the last session of the user
        $enrollments = Enrollment::where('user_id', $user->id)
        ->orderBy('created_at', 'DESC')->get();
        if ($user->ROLE === 'TEACHER') {
            $sessions = Session::where('user_id', $user->id)
                ->orderBy('created_at', 'DESC')->get();
            return Inertia::render('Dashboard/Dashboard', [
                'sessions' => new AllSessionsCollection($sessions),
            ]);
        }
        if ($user->ROLE === 'STUDENT') {
            return Inertia::render('Dashboard/Dashboard', [
                'enrollments' => new EnrollmentCollection($enrollments),
            ]);
        }
    }
}
