<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Laravel\Socialite\Facades\Socialite;

class ProviderController extends Controller
{
    public function redirect($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function callback($provider)
    {
        $providerUser = Socialite::driver($provider)->user();

        $user = User::updateOrCreate([
            'provider_id' => $providerUser->id,
            'provider' => $provider
        ], [
            'username' => ($providerUser->email) ? explode('@', $providerUser->email)[0] : $providerUser->name,
            'name' => $providerUser->getName(),
            'email' => $providerUser->getEmail(),
            'password' => bcrypt($providerUser->id),
            'picture' => $providerUser->getAvatar(),
            'provider_token' => $providerUser->token,
        ]);

        Auth::login($user);

        return Redirect::to('/');
    }
}
