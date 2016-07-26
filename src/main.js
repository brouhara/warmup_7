
var input;

var OMDBRequest = {
  type: 'GET',
  url: 'http://www.omdbapi.com/',
  data: { t: input },
  dataType: 'json',
  success: function (response) {
    $('#alert').val('Success!');
    console.log('test');
  }
}

function ajaxRequest(request) {
  $.ajax(request).done(function(result) { ajaxResponse(result) });
}

function ajaxResponse(result) {
     console.log('Ajax Response:');
     console.log(result);
}

function ajaxMovieRequest() {
  OMDBRequest.data.t = $('#search-input').val();
  ajaxRequest(OMDBRequest);
}

function genre(genres) {
  function parseGenre() {
    
  }
}

$(document).ready(function () {

  console.log('test'); // sanity check

  $('form').on('submit', function (event) {
    event.preventDefault();
    console.log('this is working');

    ajaxMovieRequest();
  });

})

