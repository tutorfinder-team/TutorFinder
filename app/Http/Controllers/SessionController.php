<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Session;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Resources\AllSessionsCollection;
use App\Http\Resources\SessionResource;
use App\Models\Enrollment;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class SessionController extends Controller
{
    public function getSessions($search, $sort, $type)
    {
        $query = Session::query();

        if ($search) {
            $query->where(function ($query) use ($search) {
                $query->where('title', 'like', '%' . $search . '%')
                    ->orWhere('description', 'like', '%' . $search . '%')
                    ->orWhere('skills_taught', 'like', '%' . $search . '%')
                    ->orWhere('location', 'like', '%' . $search . '%');
            });
        }

        if ($sort === 'new') {
            $query->orderBy('created_at', 'DESC');
        } elseif ($sort === 'upcoming') {
            $query->where('scheduled_time', '>=', now())
                ->orderBy('scheduled_time', 'ASC');
        } elseif ($sort === 'tr') {
            $query->join('users', 'sessions.user_id', '=', 'users.id')
                ->select('sessions.*', 'users.rating')
                ->orderBy('users.rating', 'desc');
        } elseif ($sort === 'lp') {
            $query->orderBy('places_limit', 'ASC');
        } elseif ($sort === 'hp') {
            $query->orderBy('places_limit', 'DESC');
        }

        if ($type === 'online') {
            $query->where('location', '=', 'Online');
        } else if ($type === 'inperson') {
            $query->where('location', '!=', 'Online');
        }

        return $query;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $search = request()->input('search');
        $sort = request()->input('sort');
        $type = request()->input('type');
        $query = $this->getSessions($search, $sort, $type);
        // dd($query->toSql(), $query->getBindings());
        $sessions = $query->paginate(10);
        return Inertia::render('Home', [
            'sessions' => $sessions
                ->withQueryString()
                ->through(function ($session) {
                    return [
                        'id' => $session->id,
                        'user' => [
                            'id' => $session->user->id,
                            'username' => $session->user->username,
                            'name' => $session->user->name,
                            'picture' => $session->user->picture,
                            'rating' => $session->user->rating,
                            'email' => $session->user->email,
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
                }),
            'count' => $sessions->count(),
            'search' => $search,
            'sort' => $sort,
            'type' => $type,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $session = Session::find($id);
        $isEnrolled = Enrollment::where('user_id', Auth::id())->where('session_id', $id)->first();
        if ($isEnrolled) {
            $isEnrolled = true;
        } else {
            $isEnrolled = false;
        }
        return Inertia::render('Sessions/Session/SessionDetails', [
            'session' => new SessionResource($session),
            'isEnrolled' => $isEnrolled,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Dashboard/Partials/CreateSession');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'scheduled_time' => 'required|date|after:now',
            'title' => 'required|max:100',
            'description' => 'required',
            'skills_taught' => 'required|regex:/^(\w+, ?)*\w+$/',
            'location' => 'required|string',
            'places_limit' => 'required|integer|min:1',
        ]);

        // Split and trim the skills_taught string
        $skillsArray = array_map('trim', explode(',', $validatedData['skills_taught']));

        // Convert the skills array to JSON format
        $skillsJson = json_encode(['skills' => $skillsArray]);

        // Update the skills_taught field with the JSON format
        $validatedData['skills_taught'] = $skillsJson;

        // Set user_id to the authenticated user's ID
        $validatedData['user_id'] = Auth::id();
        $session = Session::create($validatedData);
        return Redirect::to('/dashboard');
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
