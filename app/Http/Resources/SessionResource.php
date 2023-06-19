<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SessionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'user' => [
                'id' => $this->user->id,
                'username' => $this->user->username,
                'name' => $this->user->name,
                'picture' => $this->user->picture,
                'rating' => $this->user->rating,
                'phone_number' => $this->user->phone_number,
                'email' => $this->user->email,
            ],
            'feedbacks' => $this->feedbacks->map(function ($feedback) {
                return [
                    'id' => $feedback->id,
                    'createdAt' => $feedback->created_at->format('M d, Y'),
                    'review' => $feedback->review,
                    'rating' => $feedback->rating,
                    'userId' => $feedback->user->id,
                    'username' => $feedback->user->username,
                    'picture' => $feedback->user->picture,
                ];
            }),
            'title' => $this->title,
            'scheduled_time' => $this->scheduled_time->format('M d, Y'),
            'description' => $this->description,
            'tags' => $this->skills_taught,
            'location' => $this->location,
            'placesLimit' => $this->places_limit,
            'createdAt' => $this->created_at->format(' M D Y'),
            'enrollments' => $this->enrollments->map(function ($enrollment) {
                return [
                    'id' => $enrollment->user->id,
                    'date' => $enrollment->created_at->format('M d, Y'),
                    'note' => $enrollment->note,
                    'username' => $enrollment->user->username,
                    'picture' => $enrollment->user->picture,
                ];
            }),
        ];
    }
}
