// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */


     
$("#search-button").click(function(){
$('.gallery').empty();
var searchTerm = $('input').val();
var request_url = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "g&rating=pg&api_key=dc6zaTOxFJmzC";     
          
    $.ajax({
    url: request_url,
    method: "GET",
    success: function(response) {
        //     // YOUR CODE GOES HERE
        // //console.log(response.data[2].images[2]);
        // var pic = response.data[0].url

         var pic_url = response.data[0].images.original.url;
     $('.gallery').append('<img src="' + pic_url + '" />')
      },


  
    }); 
});

