<?php

namespace App\Http\Controllers;

use App\Models\Certification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CertificationController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'issuing_organization' => 'required|string|max:255',
            'issue_date' => 'required|date',
            'expiration_date' => 'nullable|date|after:issue_date',
            'link' => 'nullable|url',
        ]);

        // Set user_id to the authenticated user's ID
        $validatedData['user_id'] = Auth::id();
        $certification = Certification::create($validatedData);

        return Redirect::to('/profile');
    }
}
