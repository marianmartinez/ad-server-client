$( document ).ready(function() {
    
    var url1 = "./response.json";
    var url2 = "./response1.json";

	$.ajax({
	  method: "GET",
	  url: "localhost:3000/advertisements"
	})
	.done(function( data ) {
      var imgSource = data.newAdvertisement;
      $('#banner').attr("src", imgSource);
 	});
});

 