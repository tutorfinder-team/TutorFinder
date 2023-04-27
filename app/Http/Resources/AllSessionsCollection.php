<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Str;

class AllSessionsCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request)
    {

        return $this->collection->map(function ($item) {
            return [
                'id' => $item->id,
                'price' => $item->Price,
                'user' => [
                    'id' => $item->user->id,
                    'username' => $item->user->username,
                    'name' => $item->user->name,
                    'picture' => $item->user->picture,
                    'rating' => $item->user->rating,
                ],
                'title' => $item->title,
                'scheduled_time' => $item->scheduled_time->format('M d, Y'),
                'description' => Str::limit($item->description, 200),
                'tags' => $item->skills_taught,
                'location' => $item->location,
                'placesLimit' => $item->places_limit,
                'createdAt' => $item->created_at->format(' M D Y'),
                'enrollments' => $item->enrollments->map(function ($enrollment) {
                    return [
                        'id' => $enrollment->user->id,
                        'username' => $enrollment->user->username,
                        'picture' => $enrollment->user->picture,
                    ];
                }),
            ];
        });
    }
}