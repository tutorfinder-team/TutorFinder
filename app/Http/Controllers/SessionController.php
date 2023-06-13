<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Session;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Resources\AllSessionsCollection;

class SessionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sessions = Session::query()
            ->when(request()->input('search'), function ($query, $search) {
                $query->where('title', 'like', '%' . $search . '%')
                    ->orWhere('description', 'like', '%' . $search . '%')
                    ->orWhere('skills_taught', 'like', '%' . $search . '%');
            })
            ->orderBy('created_at', 'desc')->paginate(5)
            ->through(function ($session) {
                return [
                    'id' => $session->id,
                    'price' => $session->Price,
                    'user' => [
                        'id' => $session->user->id,
                        'username' => $session->user->username,
                        'name' => $session->user->name,
                        'picture' => $session->user->picture,
                        'rating' => $session->user->rating,
                    ],
                    'title' => $session->title,
                    'scheduled_time' => $session->scheduled_time->format('M d, Y'),
                    'description' => Str::limit($session->description, 200),
                    'tags' => $session->skills_taught,
                    'location' => $session->location,
                    'placesLimit' => $session->places_limit,
                    'createdAt' => $session->created_at->format(' M D Y'),
                    'enrollments' => $session->enrollments->map(function ($enrollment) {
                        return [
                            'id' => $enrollment->user->id,
                            'username' => $enrollment->user->username,
                            'picture' => $enrollment->user->picture,
                        ];
                    }),
                ];
            });
        return Inertia::render('Home', [
            'sessions' => $sessions,
            'filters' => request()->all('search'),
            'count' => Session::count(),
        ]);
    }

    /*
    public function index()
    {
        $sessions = Session::query()
            ->when(request()->input('search'), function ($query, $search) {
                $query->where('title', 'like', '%' . $search . '%')
                    ->orWhere('description', 'like', '%' . $search . '%')
                    ->orWhere('skills_taught', 'like', '%' . $search . '%');
            })
            ->orderBy('created_at', 'desc')->get();
        return Inertia::render('Home', [
            'sessions' => new AllSessionsCollection($sessions),
        ]);
    } */
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Session $session)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Session $session)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Session $session)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Session $session)
    {
        //
    }
}
