<?php

namespace App\Http\Controllers;

use App\Models\Questionscategories;
use App\Http\Requests\StoreQuestionscategoriesRequest;
use App\Http\Requests\UpdateQuestionscategoriesRequest;
use Illuminate\Http\Request;
use Exception;

class QuestionscategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('questioncategory.index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // return view('survey.addquscategory');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreQuestionscategoriesRequest $request)

    {
      try {
        $validatedata = $request->validated();
        $insertdata = Questionscategories::create($validatedata);
        return response()->json(['data' =>  $insertdata]);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Questionscategories $questionscategories)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Questionscategories $questionscategories)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateQuestionscategoriesRequest $request, Questionscategories $questionscategories)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Questionscategories $questionscategories)
    {
        //
    }
}
