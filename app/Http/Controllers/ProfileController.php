<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Response;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
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
            $filePath = asset('storage/' . $user->resume);
        return Inertia::render('Profile/Profile', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'user' => $user,
            'status' => session('status'),
            'experiences' => $experiences,
            'educations' => $educations,
            'certification' => $certification,
            'resume' => $filePath,
            'canEdit' => true
        ]);
    }

    public function guest($username)
    {
        $loggedUser = Auth::user();
        $user = User::where('username', $username)->first();

        if ($user->id == $loggedUser->id) {
            return Redirect::to('/profile');
        }
        $experiences = $user->experiences;
        $educations = $user->educations;
        $certification = $user->certification;
        $filePath = null;
        if ($user->resume)
            $filePath = asset('storage/' . $user->resume);
        return Inertia::render('Profile/Profile', [
            'user' => $user,
            'experiences' => $experiences,
            'educations' => $educations,
            'certification' => $certification,
            'resume' => $filePath,
            'canEdit' => $user->id == $loggedUser->id
        ]);
    }

    public function edit(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'phone_number' => 'nullable|string|max:20',
            'birthdate' => 'nullable|date',
            'address' => 'nullable|string|max:255',
            'skills' => 'nullable|string|max:255',
        ]);

        $user = $request->user();

        $user->update([
            'name' => $validatedData['name'],
            'phone_number' => $validatedData['phone_number'],
            'birthdate' => $validatedData['birthdate'],
            'address' => $validatedData['address'],
            'skills' => $validatedData['skills'],
        ]);

        return Redirect::to('/profile')->with('status', 'Profile updated!');
    }
}
