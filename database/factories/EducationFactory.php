<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Education;
use App\Models\User;

class EducationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Education::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'institution' => $this->faker->word,
            'degree' => $this->faker->word,
            'field_of_study' => $this->faker->word,
            'start_year' => $this->faker->numberBetween(-10000, 10000),
            'end_year' => $this->faker->numberBetween(-10000, 10000),
        ];
    }
}
