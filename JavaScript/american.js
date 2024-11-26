

  function initStreetView() {
    var locations = {
        'york-street-view': { lat: 48.85617140219573, lng: 2.3320851859505107},
        'commonwealth-street-view': { lat: 14.5871549, lng: 120.9807297 }, 
        'bataan-street-view': { lat: 15.315669488912741, lng: 120.58095756244137 }, 
        'independence-street-view': { lat: 14.580200175310022, lng: 120.9739921590726 } 
    };

   

    
    for (var id in locations) {
        var panorama = new google.maps.StreetViewPanorama(
            document.getElementById(id), {
                position: locations[id],
                pov: {
                    heading: 165,
                    pitch: 0
                },
                zoom: 1
            });
    }
}

window.onload = initStreetView;