<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Session;
use App\Models\User;

class SessionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Session::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'title' => $this->faker->sentence(4),
            'scheduled_time' => $this->faker->dateTime(),
            'description' => $this->faker->text,
            'skills_taught' => '{"skills" : ["java", "php", "javascript"]}',
            'location' => $this->faker->word,
            'places_limit' => $this->faker->numberBetween(1, 25),
        ];
    }
}
