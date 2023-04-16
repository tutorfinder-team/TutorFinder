<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Session;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use JMac\Testing\Traits\AdditionalAssertions;
use Tests\TestCase;

/**
 * @see \App\Http\Controllers\SessionController
 */
class SessionControllerTest extends TestCase
{
    use AdditionalAssertions, RefreshDatabase, WithFaker;

    /**
     * @test
     */
    public function index_displays_view(): void
    {
        $sessions = Session::factory()->count(3)->create();

        $response = $this->get(route('session.index'));

        $response->assertOk();
        $response->assertViewIs('session.index');
        $response->assertViewHas('sessions');
    }


    /**
     * @test
     */
    public function create_displays_view(): void
    {
        $response = $this->get(route('session.create'));

        $response->assertOk();
        $response->assertViewIs('session.create');
    }


    /**
     * @test
     */
    public function store_uses_form_request_validation(): void
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\SessionController::class,
            'store',
            \App\Http\Requests\SessionStoreRequest::class
        );
    }

    /**
     * @test
     */
    public function store_saves_and_redirects(): void
    {
        $user_id = $this->faker->numberBetween(-10000, 10000);
        $title = $this->faker->sentence(4);
        $scheduled_time = $this->faker->dateTime();
        $description = $this->faker->text;
        $skills_taught = $this->faker->;
        $location = $this->faker->word;
        $price = $this->faker->randomFloat(/** decimal_attributes **/);
        $places_limit = $this->faker->numberBetween(-10000, 10000);

        $response = $this->post(route('session.store'), [
            'user_id' => $user_id,
            'title' => $title,
            'scheduled_time' => $scheduled_time,
            'description' => $description,
            'skills_taught' => $skills_taught,
            'location' => $location,
            'price' => $price,
            'places_limit' => $places_limit,
        ]);

        $sessions = Session::query()
            ->where('user_id', $user_id)
            ->where('title', $title)
            ->where('scheduled_time', $scheduled_time)
            ->where('description', $description)
            ->where('skills_taught', $skills_taught)
            ->where('location', $location)
            ->where('price', $price)
            ->where('places_limit', $places_limit)
            ->get();
        $this->assertCount(1, $sessions);
        $session = $sessions->first();

        $response->assertRedirect(route('session.index'));
        $response->assertSessionHas('session.id', $session->id);
    }


    /**
     * @test
     */
    public function show_displays_view(): void
    {
        $session = Session::factory()->create();

        $response = $this->get(route('session.show', $session));

        $response->assertOk();
        $response->assertViewIs('session.show');
        $response->assertViewHas('session');
    }


    /**
     * @test
     */
    public function edit_displays_view(): void
    {
        $session = Session::factory()->create();

        $response = $this->get(route('session.edit', $session));

        $response->assertOk();
        $response->assertViewIs('session.edit');
        $response->assertViewHas('session');
    }


    /**
     * @test
     */
    public function update_uses_form_request_validation(): void
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\SessionController::class,
            'update',
            \App\Http\Requests\SessionUpdateRequest::class
        );
    }

    /**
     * @test
     */
    public function update_redirects(): void
    {
        $session = Session::factory()->create();
        $user_id = $this->faker->numberBetween(-10000, 10000);
        $title = $this->faker->sentence(4);
        $scheduled_time = $this->faker->dateTime();
        $description = $this->faker->text;
        $skills_taught = $this->faker->;
        $location = $this->faker->word;
        $price = $this->faker->randomFloat(/** decimal_attributes **/);
        $places_limit = $this->faker->numberBetween(-10000, 10000);

        $response = $this->put(route('session.update', $session), [
            'user_id' => $user_id,
            'title' => $title,
            'scheduled_time' => $scheduled_time,
            'description' => $description,
            'skills_taught' => $skills_taught,
            'location' => $location,
            'price' => $price,
            'places_limit' => $places_limit,
        ]);

        $session->refresh();

        $response->assertRedirect(route('session.index'));
        $response->assertSessionHas('session.id', $session->id);

        $this->assertEquals($user_id, $session->user_id);
        $this->assertEquals($title, $session->title);
        $this->assertEquals($scheduled_time, $session->scheduled_time);
        $this->assertEquals($description, $session->description);
        $this->assertEquals($skills_taught, $session->skills_taught);
        $this->assertEquals($location, $session->location);
        $this->assertEquals($price, $session->price);
        $this->assertEquals($places_limit, $session->places_limit);
    }


    /**
     * @test
     */
    public function destroy_deletes_and_redirects(): void
    {
        $session = Session::factory()->create();

        $response = $this->delete(route('session.destroy', $session));

        $response->assertRedirect(route('session.index'));

        $this->assertModelMissing($session);
    }
}
