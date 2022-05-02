window.onload = () => {
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = '﹖';

    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Pokèmon',
            location: {
                position: '100 100 0',
            },
        },
    ];
}

var models = [
    {
        url: 'scene.gltf',
        scale: '100 100 100',
        info: 'Magnemite, Lv. 5, HP 10/10',
        rotation: '270 0 0',
        position: '100 100 0',
    },
    {
        url: 'truebumbly.gltf',
        scale: '500 500 500',
        rotation: '270 0 0',
        info: 'Articuno, Lv. 80, HP 100/100',
        position: '100 100 0',
    },
    {
        url: 'truebumbly.gltf',
        scale: '500 500 500',
        rotation: '270 0 0',
        info: 'Articuno, Lv. 80, HP 100/100',
        position: '100 100 0',
    },
];

var modelIndex = 0;
var setModel = function (model, entity) {
    if (model.scale) {
        entity.setAttribute('scale', model.scale);
    }

    if (model.rotation) {
        entity.setAttribute('rotation', model.rotation);
    }

    entity.setAttribute('gltf-model', model.url);

    const div = document.querySelector('.instructions');
    div.innerText = model.info;
};

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
         let lo = place.location.position;

        let model = document.createElement('a-entity');
        model.setAttribute('position', ${lo});

        setModel(models[modelIndex], model);

        model.setAttribute('animation-mixer', '');

        document.querySelector('button[data-action="change"]').addEventListener('click', function () {
            var entity = document.querySelector('[position]');
            modelIndex++;
            var newIndex = modelIndex % models.length;
            setModel(models[newIndex], entity);
        });

        scene.appendChild(model);
    });
}