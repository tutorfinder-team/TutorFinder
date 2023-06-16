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

    public function destroy($id)
    {
        $userId = Auth::id();
        $certification = Certification::find($id);

        if ($certification && $certification->user_id == $userId) {
            $certification->delete();
            return redirect()->route('profile.edit')->with('success', 'Certification record deleted successfully.');
        }

        return redirect()->route('profile.edit')->with('error', 'Certification record not found or not owned by the user.');
    }
}
