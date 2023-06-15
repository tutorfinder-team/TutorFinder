<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ResumeController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'resume' => 'required|mimes:pdf|max:2048',
        ]);

        $resume = $request->file('resume');
        $resumeName = time() . '_' . $resume->getClientOriginalName();
        $path = $resume->storeAs('resumes', $resumeName, 'public');
        $userId = Auth::id();

        // Fetch the user using the Eloquent model
        $user = User::find($userId);

        // Update the resume column for the user
        $user->update([
            'resume' => $path,
        ]);

        return redirect()->route('profile.edit')->with('success', 'Resume uploaded successfully.');
    }


    public function destroy(Request $request)
    {
        $userId = Auth::id();
        $user = User::find($userId);

        if ($user->resume) {
            Storage::disk('public')->delete($user->resume);
            $user->update(['resume' => null]);
            return redirect()->route('profile.edit')->with('success', 'Resume deleted successfully.');
        }

        return redirect()->route('profile.edit')->with('error', 'No resume found to delete.');
    }
}
