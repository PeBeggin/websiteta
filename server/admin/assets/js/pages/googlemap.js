var map;
function initMap() {
    // Simple map
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 50.735670, lng: 9.766216},
        zoom: 6
    });


    // Map with marker
    var center = {lat: 50.73, lng: 9.76};

    var map = new google.maps.Map(document.getElementById("map-marker"), {
        scaleControl: true,
        center: center,
        zoom: 8
    });

    var infowindow = new google.maps.InfoWindow;
    infowindow.setContent("<p>&nbsp; &nbsp; YOUR LOCATION</p>");

    var marker = new google.maps.Marker({map: map, position: center});
    marker.addListener("click", function() {
        infowindow.open(map, marker);
    });
}