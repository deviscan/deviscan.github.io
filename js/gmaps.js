function initMap() {
        var myLatLng = {lat: 13.075682, lng: 80.237969};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: myLatLng,
          scrollwheel: false,
              navigationControl: false,
              mapTypeControl: false,
              scaleControl: false,
              draggable: false
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
        });
      }