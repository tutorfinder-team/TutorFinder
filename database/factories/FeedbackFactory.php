<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Feedback;
use App\Models\Session;
use App\Models\User;

class FeedbackFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Feedback::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'session_id' => Session::factory(),
            'user_id' => User::factory(),
            'rating' => $this->faker->randomFloat(0, 5),
            'review' => $this->faker->sentence(10),
        ];
    }
}
