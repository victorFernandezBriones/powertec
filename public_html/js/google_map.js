
var google;

function init() {
    var myCenter = new google.maps.LatLng(-33.046004, -71.354465);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {center: myCenter, zoom: 15, zoomControl: true,scrollwheel: false};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position: myCenter, animation: google.maps.Animation.BOUNCE});
    var infowindow = new google.maps.InfoWindow({
        content: "Powertec"
    });

    infowindow.open(map, marker);
    marker.setMap(map);

}
google.maps.event.addDomListener(window, 'load', init);