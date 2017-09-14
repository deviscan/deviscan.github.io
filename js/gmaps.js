function initMap() {
        var myLatLng = {lat: 13.0755457, lng: 80.2357695};
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
          title: 'DeviScan!'
        });
      }