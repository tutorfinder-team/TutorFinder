<?php

namespace App\Http\Controllers;

use App\Models\Education;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class EducationController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'institution' => 'required|string|max:255',
            'degree' => 'required|string|max:255',
            'field_of_study' => 'required|string|max:255',
            'start_year' => 'required|date',
            'end_year' => 'nullable|date|after:start_date',
        ]);

        // Set user_id to the authenticated user's ID
        $validatedData['user_id'] = Auth::id();
        $education = Education::create($validatedData);

        return Redirect::to('/profile');
    }
}
