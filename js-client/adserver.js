$( document ).ready(function() {
    
    var url1 = "./response.json";
    var url2 = "./response1.json";

	$.ajax({
	  method: "GET",
	  url: url1
	})
	.done(function( data ) {
      var imgSource = data.ad;
      $('#banner').attr("src", imgSource);
 	});
});

 