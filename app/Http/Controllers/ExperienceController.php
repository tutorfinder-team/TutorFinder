<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ExperienceController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'position' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after:start_date',
            'description' => 'nullable|string',
        ]);

        // Set user_id to the authenticated user's ID
        $validatedData['user_id'] = Auth::id();
        $experience = Experience::create($validatedData);

        return Redirect::to('/profile');
    }
}
