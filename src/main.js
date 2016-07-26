
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
  $.ajax(request).done(function (result) { ajaxResponse(result) });
}

function ajaxResponse(result) {
  console.log('Ajax Response:');
  console.log(result);
}


function ajaxMovieRequest() {
  OMDBRequest.data.t = $('#search-input').val();
  OMDBRequest.success = function(response) { ajaxMovieResponse(response); }
  ajaxRequest(OMDBRequest);
}

function ajaxMovieResponse (data) {
  console.log('Ajax Movie Response');
  genres(data.genres);


  // $('#poster').css( background, 'url(' + imgURL + ')' )
}

function Genre(name) {
  return $(document.createElement('option')).attr('data-genre', name);
}

function genres(genres) {
  $genres = $('#genres');
  $placeholder = $('#option-placholder');

  function createGenre(name) {
    var $genre = new Genre(name);
    return $genre;
  }

  function appendGenre($genre) {
    $genres.append($option);
    return $genres;
  }

  function getGenre(name) {
    return $('#data-genre=' + name);
  }

  // Returns if the genre exists or not
  function isGenre(name) {
    return (getGenre(name) !== undefined) ? true : false
  }

  // Creates the genre and appends the genre
  function addGenre(name) {
    return appendGenre(createGenre(name));
  }

  // Returns an array of genres
  function parse(string) { return string.split(','); }

  // Removes option placeholder
  function removePlaceholder() { $placeholder.remove(); }

  // Adds Genre options to Genres
  function populate(genres) {
    parse(genres).forEach(function (name) {
      if (!(isGenre(name))) {
        addGenre(name);
      }
    });
  }

  populate(genres);

}

$(document).ready(function () {

  console.log('test'); // sanity check

  $('form').on('submit', function (event) {
    event.preventDefault();
    console.log('this is working');

    ajaxMovieRequest();
  });

})

