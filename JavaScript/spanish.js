

  function initStreetView() {
    var locations = {
        'magellan-street-view': { lat: 10.293689273852987, lng: 123.90192807790916 }, 
        'missionary-street-view': { lat: 10.294223066618006, lng: 123.90252872208922 }, 
        'katipunan-street-view': { lat: 14.591105923364704, lng: 120.98116606421488 }, 
        'independence-street-view': { lat: 14.445333162202893, lng: 120.90695736441783 } 
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