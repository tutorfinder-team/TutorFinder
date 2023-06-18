<?php

use App\Http\Controllers\CertificationController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EducationController;
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\ProviderController;
use App\Http\Controllers\ResumeController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\EnrollementController;
use App\Models\Experience;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
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

    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('/session/{id}', [SessionController::class, 'show'])->name('session.show');
    Route::post('/session', [SessionController::class, 'store'])->name('session.store');
    Route::delete('/session/{id}', [SessionController::class, 'destroy'])->name('session.destroy');

    Route::post('/session-enroll/{id}', [EnrollementController::class, 'store'])->name('enrollment.store');


    Route::get('/profile', [ProfileController::class, 'show'])->name('profile.edit');
    Route::get('/profile/{username}', [ProfileController::class, 'guest'])->name('profile.guest');
    Route::post('/become-a-teacher', [ProfileController::class, 'updateRole'])->name('profile.role');
    Route::put('/profile', [ProfileController::class, 'edit'])->name('profile.edit.info');
    Route::post('/profile/experience', [ExperienceController::class, 'store'])->name('experience.add');
    Route::delete('/profile/experience/{id}', [ExperienceController::class, 'destroy'])->name('experience.delete');
    Route::post('/profile/education', [EducationController::class, 'store'])->name('education.add');
    Route::delete('/profile/education/{id}', [EducationController::class, 'destroy'])->name('education.delete');
    Route::post('/profile/certification', [CertificationController::class, 'store'])->name('certification.add');
    Route::delete('/profile/certification/{id}', [CertificationController::class, 'destroy'])->name('certification.delete');
    Route::post('/profile/resume', [ResumeController::class, 'upload'])->name('resume.add');
    Route::delete('/resume', [ResumeController::class, 'destroy'])->name('resume.delete');

    Route::get('/settings', [SettingsController::class, 'edit'])->name('settings.edit');
    Route::patch('/settings', [SettingsController::class, 'update'])->name('settings.update');
    Route::delete('/settings', [SettingsController::class, 'destroy'])->name('settings.destroy');
});

require __DIR__ . '/auth.php';
