@extends('layouts.app')

@section('content')
<div class="container">

    <div class="card border-light" style="max-width: 100%;background-color:#fff">
    <div style="margin:15px 15px 0px 15px;background-color=blue;width:100%"><h3>SURVEY MANAGE</h3></div>

      <div class="card-body">

        <form>
            <label>Survey Name</label>
            <input type="text" class="form-control" id="s_name">

            <label>Description</label>
            <textarea type="password" class="form-control" row></textarea>

            <div class="row">
            {{-- <div class="col-md-6" style="display:none" >
                <label>Survey Type</label>
                <select class="form-select" aria-label="Default select example" name="s_type">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
            </div> --}}
                <div class="col-md-6">
                    <label>Expected Responsess</label>
                    <input type="number" class="form-control" id="response">
                </div>
            </div>

          <button type="submit" class="btn btn-primary">Submit</button>
             <button type="button" class="btn btn-primary" id="question_add">Question Add</button>

        <div id="question">

    </div>




        </form>





      </div>
    </div>

</div>
@endsection
