$(document).ready(function () {

	console.log('test'); // sanity check

	$('form').on('submit', function (event) {

		event.preventDefault();
		console.log('this is working');

		 var input = $('#search-input').val();

		  $.ajax({
			type: "GET",
			url: "http://www.omdbapi.com/?t=" + input,
			data: { name: pokeName, number: pokeNum },
			dataType: "dataType",
			success: function (response) {
				$('#alert').val('Success!');
			}
		  }).done( function( results ) {
			console.log( 'Movie Response:', results) ;
		  });
	});
});