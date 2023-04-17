<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProviderController;
use App\Http\Controllers\SessionController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/auth/{provider}/redirect', [ProviderController::class, 'redirect'])->name('provider.redirect');
Route::get('/auth/{provider}/callback', [ProviderController::class, 'callback'])->name('provider.callback');

Route::get('/', [SessionController::class, 'index'])->name('sessions.index');

Route::middleware('auth')->group(function () {
    Route::get('/session/{id}', [SessionController::class, 'show'])->name('session.show');
    Route::post('/session', [SessionController::class, 'store'])->name('session.store');
    Route::delete('/session/{id}', [SessionController::class, 'destroy'])->name('session.destroy');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
