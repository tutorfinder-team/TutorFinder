<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\User;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'username' => $this->faker->userName,
            'name' => $this->faker->word,
            'email' => $this->faker->safeEmail,
            'password' => $this->faker->password,
            'ROLE' => "STUDENT",
            'birthdate' => $this->faker->date(),
            'phone_number' => $this->faker->phoneNumber,
            'address' => $this->faker->word,
            'skills' => '{}',
            'rating' => $this->faker->randomFloat(2, 0, 5),
            'resume' => $this->faker->text,
            // 'picture' => $this->faker->word,
        ];
    }
   
}