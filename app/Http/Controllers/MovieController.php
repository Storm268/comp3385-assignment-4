<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Movie;
use Illuminate\Support\Facades\Storage;

class MovieController extends Controller
{
    public function index()
    {
        $allMovies = Movie::all();

        return response()->json([
            'movies' => $allMovies
        ]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'poster' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $posterStoragePath = null;
        if ($request->hasFile('poster')) {
            $posterStoragePath = $request->file('poster')->store('posters', 'public');
        }

        $freshMovie = new Movie();
        $freshMovie->title = $validatedData['title'];
        $freshMovie->description = $validatedData['description'];
        $freshMovie->poster = $posterStoragePath;
        $freshMovie->save();

        return response()->json([
            'message' => 'Movie created successfully',
            'movie' => $freshMovie
        ], 201);
    }
}
