@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="card border-light" style="max-width: 100%;background-color:#fff">
            <div style="margin:15px 15px 0px 15px;background-color=blue;width:100%"><h3>QUESTION CATEGORY MANAGE</h3></div>
                <div class="card-body">
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end ">
                      <button class="btn btn-primary me-md-2" type="button" data-bs-toggle="modal" data-bs-target="#question_category" data-bs-whatever="@mdo"><i class="bi bi-plus"></i>Add</button>
                    </div>
                    <br>
                    <table class="table table-striped">
                         <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">First</th>
                              <th scope="col">Last</th>
                              <th scope="col">Handle</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td colspan="2">Larry the Bird</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                    </table>
                </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="question_category" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Add new question category </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                 <form method="POST" action={{route('createquescat')}}>
                @csrf
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">name:</label>
                    <input type="text" class="form-control" id="name" name="name">
                  </div>

                <button type="submit" class="btn btn-primary">Save changes</button>
                 </form>
              </div>
              <div class="modal-footer">

              </div>

            </div>
          </div>
        </div>
    </div>
@endsection
