window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Magnemite',
            location: {
                lat: 44.496470,
                lng: 11.320180,
            }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gltf-model', 'scene.gltf');
        model.setAttribute('rotation', '270 0 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '500 500 500');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('scene'))
        });

        scene.appendChild(model);
    });
}