
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
  $.ajax(request);
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
  console.log(data);

  genres(data.Genre);

  function setPoster(img) {
    $('#poster', { background:'url(' + img + ')' });
  }``
}

function Genre(name) {
  return $(document.createElement('option')).data('genre', name);
}

function genres(genres) {
  var $genres = $('#genres');
  var $placeholder = $('#option-placeholer');

  console.log('Genres');

  function createGenre(name) {
    var $genre = new Genre(name);
    $genre.val(name);
    $genre.text(name);
    return $genre;
  }

  function appendGenre($genre) {
    $genres.append($genre);
    return $genres;
  }

  function getGenre(name) {
    return $genres.data(name);
  }

  // Returns if the genre exists or not
  function isGenre(name) {
    if (getGenre(name) !== undefined) {
      return true;
    }
    return false;
  }

  // Creates the genre and appends the genre
  function addGenre(name) {
    return appendGenre(createGenre(name));
  }

  // Returns an array of genres
  function parse(string) { return string.split(','); }

  // Removes option placeholder
  function removePlaceholder() {
     $placeholder.remove();
  }

  // Adds Genre options to Genres
  function populate(genres) {
    console.log('populating');
    removePlaceholder();

    parse(genres).forEach(function (name) {
      console.log('Checking for genre: ' + name);

      if (isGenre(name) === false) {
        console.log('Genre not found: ' + name);
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

