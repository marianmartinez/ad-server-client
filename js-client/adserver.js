$( document ).ready(function() 
{
    
    var url1 = "./response.json";
    var url2 = "./response1.json";

	$.ajax({
	  method: "GET",
	  url: "/advertisements",
	  dataType: "json",
	  data: {some_parameter: 'hello'}
	})
	.done(function( response ) {
      var imgSource = response.newAdvertisement;
      $('#banner').attr("src", imgSource);
 	});

});

 