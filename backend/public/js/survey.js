

var count = 0;
document.getElementById('question_add').addEventListener('click', function() {
    count++;
    var questionDiv = document.getElementById('question');
    var newTr = document.createElement('div');
    newTr.id = 'questype_' + count;

    newTr.innerHTML = '<td>'+
        '<label style="font-style:bold">'+
        count+
        'Question Type</label>' +
        '<select class="form-select" aria-label="Default select example" name="q_type" id="q_type_'+count+'">' +
        '<option selected>Open this select menu</option>' +
        '<option value="1">One</option>' +
        '<option value="2">Two</option>' +
        '<option value="3">Three</option>' +
        '</select>'+
        '<div id="qdetails_'+count+'">'+
        '</div>'+
        '</td>';

    questionDiv.appendChild(newTr);
});

addEventListener('change', function(e) {
    if (e.target && e.target.matches('select[name="q_type"]')) {
        var qdetailsDiv = e.target.closest('div').querySelector('div[id^="qdetails_"]');
        qdetailsDiv.innerHTML = '';
        var count = qdetailsDiv.id.split('_')[1]; // Get the count from the qdetails div id

        var newDiv1 = document.createElement('div');
        newDiv1.id = 'quesdetails_' + count;
        newDiv1.classList.add('col-md-6');

        if (e.target.value == 1) {
            newDiv1.innerHTML = '<label>Multiple Choice Question</label>' +
                '<textarea type="text" class="form-control" id="s_name_' + count + '"></textarea>' +
                '<label>Select Category</label>' +
                '<select class="form-select" aria-label="Default select example" name="q_type" id="q_type">' +
                '<option selected>select category</option>' +
                '<option value="1">Science</option>' +
                '<option value="2">Maths</option>' +
                '<option value="3">Arts</option>' +
                '</select>' +
                '<label>Answer</label>'+
                '<table class="align-middle mb-0 table table-borderless table-striped table-hover" id="QuesTable">' +
                '<tbody class="tablebody">' +
                '<tr class="tablerow">' +
                '<td>' +
                '<div class="d-flex">' +
                '<input type="checkbox" id="chk_0" style="width: 20px; height: 20px;margin-right:20px;margin-top:10px" class="check mulchk1" name="chk[]" value="0">' +
                '<input  for="chk_0" type="text" name="ans[]" id="ans" class="form-control ans mulans1" placeholder="Input Answer" style="width:60%">' +
                '</div>' +
                '</td>' +
                '</tr>' +
                '<tr class="tablerow">' +
                '<td>' +
                '<div class="d-flex">' +
                '<input type="checkbox" id="chk_1" style="width: 20px; height: 20px;margin-right:20px;margin-top:10px" class="check mulchk1" name="chk[]" value="1">' +
                '<input  for="chk_1" type="text" name="ans[]" id="ans" class="form-control ans mulans1" placeholder="Input Answer" style="width:60%">' +
                '</div>' +
                '</td>' +
                '</tr>' +
                '<tr class="tablerow">' +
                '<td>' +
                '<div class="d-flex">' +
                '<input type="checkbox" id="chk_2" style="width: 20px; height: 20px;margin-right:20px;margin-top:10px" class="check mulchk1" name="chk[]" value="2">' +
                '<input  for="chk_2" type="text" name="ans[]" id="ans" class="form-control ans mulans1" placeholder="Input Answer" style="width:60%">' +
                '</div>' +
                '</td>' +
                '</tr>' +
                '<tr class="tablerow">' +
                '<td>' +
                '<div class="d-flex">' +
                '<input type="checkbox" id="chk_3" style="width: 20px; height: 20px;margin-right:20px;margin-top:10px" class="check mulchk1" name="chk[]" value="3">' +
                '<input  for="chk_3" type="text" name="ans[]" id="ans" class="form-control ans mulans1" placeholder="Input Answer"style="width:60%">' +
                '</div>' +
                '</td>' +
                '</tr>' +
                '</tbody>' +
                '</table>';
        }
        else if (e.target.value == 2) {
            newDiv1.innerHTML = '<label>Single Choice Question</label>' +
                '<input type="text" class="form-control" id="s_name_' + count + '">' +
                '<label>Select Category</label>' +
                '<select class="form-select" aria-label="Default select example" name="q_type" id="q_type">' +
                '<option selected>select category</option>' +
                '<option value="1">Science</option>' +
                '<option value="2">Maths</option>' +
                '<option value="3">Arts</option>' +
                '</select>'+
                '<lable>Answer</lable>'+
                '<table class="align-middle mb-0 table table-borderless table-striped table-hover" id="QuesTable">'+
                '<tbody class="tablebody">'+
                '<tr class="tablerow">'+
                '<td>'+
                '<div class="d-flex">'+
                '<input type="radio" id="chk_0" style="width: 20px; height: 20px;margin-right:20px;margin-top:10px" class="check singcheck1" name="chk[]" value="0">'+
                '<input  for="chk_0" type="text" name="ans[]" id="ans" class="form-control ans singleans1" placeholder="Input Answer" style="width:60%">'+
                '</div>'+
                '</td>'+
                '</tr>'+
                '<tr class="tablerow">'+
                '<td>'+
                '<div class="d-flex">'+
                '<input type="radio" id="chk_1" style="width: 20px; height: 20px;margin-right:20px;margin-top:10px" class="check singcheck2" name="chk[]" value="1">'+
                '<input  for="chk_1" type="text" name="ans[]" id="ans" class="form-control ans singleans2" placeholder="Input Answer" style="width:60%">'+
                '</div>'+
                '</td>'+
                '</tr>'+
                '<tr class="tablerow">'+
                '<td>'+
                '<div class="d-flex">'+
                '<input type="radio" id="chk_2" style="width: 20px; height: 20px;margin-right:20px;margin-top:10px" class="check singcheck3" name="chk[]" value="2">'+
                '<input  for="chk_2" type="text" name="ans[]" id="ans" class="form-control ans singleans3" placeholder="Input Answer" style="width:60%">'+
                '</div>'+
                '</td>'+
                '</tr>'+
                '<tr class="tablerow">'+
                '<td>'+
                '<div class="d-flex">'+
                '<input type="radio" id="chk_3" style="width: 20px; height: 20px;margin-right:20px;margin-top:10px" class="check singcheck4" name="chk[]" value="3">'+
                '<input  for="chk_3" type="text" name="ans[]" id="ans" class="form-control ans singleans4" placeholder="Input Answer"style="width:60%">'+
                '</div>'+
                '</td>'+
                '</tr>'+
                '</tbody>'+
                '</table>';
        }

        qdetailsDiv.appendChild(newDiv1);
    }
});





// document.getElementById('question_add').addEventListener('click', function() {
//     // Create a new row
//     var row = document.createElement('div');
//     row.classList.add('row');

//     // Create a dropdown
//     var dropdown = document.createElement('select');
//     dropdown.classList.add('form-control');
//     dropdown.addEventListener('change', function() {
//         // Add relevant input field based on dropdown selection
//         var input = document.createElement('input');
//         input.classList.add('form-control');
//         input.setAttribute('type', 'text');
//         input.setAttribute('placeholder', 'Enter value');

//         // Append the input field to the row
//         row.appendChild(input);
//     });

//     // Add options to the dropdown
//     var option1 = document.createElement('option');
//     option1.text = 'Option 1';
//     dropdown.add(option1);

//     var option2 = document.createElement('option');
//     option2.text = 'Option 2';
//     dropdown.add(option2);

//     // Append the dropdown to the row
//     row.appendChild(dropdown);

//     // Append the row to the content div
//     document.getElementById('content').appendChild(row);
// });
