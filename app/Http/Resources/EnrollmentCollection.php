<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class EnrollmentCollection extends ResourceCollection
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
                'user' => [
                    'id' => $item->user->id,
                    'username' => $item->user->username,
                ],
                'date' => $item->enrollment_date->format('M d, Y'),
                'note' => $item->note,
                'createdAt' => $item->created_at,
                'session' => [
                    'id' => $item->session->id,
                    'is_active' => $item->session->is_active,
                    'user' => [
                        'id' => $item->session->user->id,
                        'username' => $item->session->user->username,
                        'fullname' => $item->session->user->name,
                        'picture' => $item->session->user->picture,
                        'rating' => $item->session->user->rating,
                        'phone_number' => $item->session->user->phone_number,
                        'email' => $item->session->user->email,
                    ],
                    'feedbacks' => $item->session->feedbacks->map(function ($feedback) {
                        return [
                            'id' => $feedback->id,
                            'createdAt' => $feedback->created_at->format('M d, Y'),
                            'review' => $feedback->review,
                            'rating' => $feedback->rating,
                            'userId' => $feedback->user->id,
                            'username' => $feedback->user->username,
                            'fullname' => $feedback->user->name,
                            'picture' => $feedback->user->picture,
                        ];
                    }),
                    'title' => $item->session->title,
                    'scheduled_time' => $item->session->scheduled_time,
                    'description' => $item->session->description,
                    'tags' => $item->session->skills_taught,
                    'location' => $item->session->location,
                    'placesLimit' => $item->session->places_limit,
                    'createdAt' => $item->session->created_at,
                    'updatedAt' => $item->updated_at->format('M d, H:i'),
                    'enrollments' => $item->session->enrollments->map(function ($enrollment) {
                        return [
                            'id' => $enrollment->user->id,
                            'date' => $enrollment->created_at->format('M d, H:i'),
                            'note' => $enrollment->note,
                            'username' => $enrollment->user->username,
                            'fullname' => $enrollment->user->name,
                            'picture' => $enrollment->user->picture,
                        ];
                    }),
                ],
            ];
        });
    }
}
