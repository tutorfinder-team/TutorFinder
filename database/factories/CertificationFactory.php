<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Certification;
use App\Models\User;

class CertificationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Certification::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'name' => $this->faker->name,
            'issuing_organization' => $this->faker->word,
            'issue_date' => $this->faker->date(),
            'expiration_date' => $this->faker->date(),
            'link' => $this->faker->text,
        ];
    }
}
