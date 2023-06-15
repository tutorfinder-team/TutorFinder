<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Session;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Resources\AllSessionsCollection;
use App\Http\Resources\SessionResource;

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
            $query->where('location', '=', 'online');
        } else {
            $query->where('location', '!=', 'inperson');
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
        $sessions = $this->getSessions($search, $sort, $type);
        return Inertia::render('Home', [
            'sessions' => $sessions->paginate(5)
            ->withQueryString()
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
        return Inertia::render('Sessions/Session/SessionDetails', [
            'session' => new SessionResource($session)
        ]);
    }

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
