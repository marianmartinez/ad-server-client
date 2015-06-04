var url = "./test/json/response.json";

 makeRequest(url);

 //var http_request = false;

    function makeRequest(url) {

        http_request = false;

        if (window.XMLHttpRequest) { // Mozilla, Safari,...
            http_request = new XMLHttpRequest();
        } else if (window.ActiveXObject) { // IE
            try {
                http_request = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    http_request = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {}
            }
        }

        if (!http_request) {
            alert('Falla :( No es posible crear una instancia XMLHTTP');
            return false;
        }
        http_request.onreadystatechange = displayBanner;
        http_request.open('GET', url, true);
        http_request.send(null);

    }

    function displayBanner() {
        //alert(http_request.responseText);
    	//console.log(http_request.readyState + ' ' + http_request.status);

        if (http_request.readyState == 4) {
            if (http_request.status == 200) {
            	//var data = JSON.parse(http_request.responseText);
                //alert(http_request.responseText);
                document.getElementById("banner").src = JSON.parse(http_request.responseText).ad;
                document.getElementById("banner-link").href = JSON.parse(http_request.responseText).url_click;
            } else {
                alert('Hubo problemas con la petición.');
            }
        }

    }