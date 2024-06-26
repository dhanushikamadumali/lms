<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SurveyController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\QuestionscategoriesController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::get('/survey', [SurveyController::class, 'index'])->name('survey');

Route::get('/indexquescat', [QuestionscategoriesController::class, 'index'])->name('indexquescat');
Route::post('/createquescat', [QuestionscategoriesController::class, 'store'])->name('createquescat');
