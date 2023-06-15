<?php

namespace App\Http\Controllers;

use Inertia\Response;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function show(Request $request): Response
    {
        $user = Auth::user();

        $experiences = $user->experiences;
        $educations = $user->educations;
        $certification = $user->certification;
        $filePath = null;
        if ($user->resume)
            $filePath = asset('storage/'.$user->resume);
        return Inertia::render('Profile/Profile', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'experiences' => $experiences,
            'educations' => $educations,
            'certification' => $certification,
            'resume' => $filePath
        ]);
    }
}

