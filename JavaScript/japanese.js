
  function initStreetView() {
    var locations = {
        'pearlharbor-street-view': { lat: 21.35838076966674, lng: -157.96321669252987 }, 
        'mcarthur-street-view': { lat: 11.172289678189252, lng: 125.01215242344938 }, 
        'independence-street-view': { lat: 14.580200175310022, lng: 120.9739921590726 }, 
        'military-street-view': { lat: 14.8277310945604, lng: 120.21174084300785 },
        'martiallaw-street-view': { lat: 14.591250725024858, lng: 120.98141724955791 },
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