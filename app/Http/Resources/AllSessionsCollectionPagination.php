<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class AllSessionsCollectionPagination extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return $this->collection->through(function ($item) {
            return [
                'id' => $item->id,
                'is_active' => $item->is_active,
                'user' => [
                    'id' => $item->user->id,
                    'username' => $item->user->username,
                    'name' => $item->user->name,
                    'picture' => $item->user->picture,
                    'rating' => $item->user->rating,
                ],
                'feedbacks' => $item->feedbacks,
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
                        'date' => $enrollment->created_at->format('M d, H:i'),
                        'note' => $enrollment->note,
                        'username' => $enrollment->user->username,
                        'picture' => $enrollment->user->picture,
                    ];
                }),
            ];
        });
    }
}
