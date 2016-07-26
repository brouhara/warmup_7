
var input;

var OMDBRequest = {
  type: 'GET',
  url: 'http://www.omdbapi.com/',
  data: { t: input },
  dataType: 'dataType',
  success: function (response) {
    $('#alert').val('Success!');
  }
}

function ajaxRequest(request) {
  $.ajax(request).done(function(result) { ajaxResponse(result) });
}

function ajaxResponse(result) {
     console.log('Ajax Response:');
}

function ajaxMovieRequest() {
  OMDBRequest.data.t = $('#search-input').val();
  ajaxRequest(OMDBRequest);
}

$(document).ready(function () {

  console.log('test'); // sanity check

  $('form').on('submit', function (event) {
    event.preventDefault();
    console.log('this is working');

    ajaxMovieRequest();
  });

})

