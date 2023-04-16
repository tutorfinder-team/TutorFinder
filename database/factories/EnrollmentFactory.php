<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Enrollment;
use App\Models\Session;
use App\Models\User;

class EnrollmentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Enrollment::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'session_id' => Session::factory(),
            'user_id' => User::factory(),
            'enrollment_date' => $this->faker->date(),
        ];
    }
}
