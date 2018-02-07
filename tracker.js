"use strict";

// function locationLoop(model) {
//     navigator.geolocation.getCurrentPosition(
//         (pos) => {
//             model.position = pos;
//             console.log(model);
//             setTimeout(() => { locationLoop(model); }, 1000);
//         }
//     );
// }

// var model = {};

// locationLoop(model);

navigator.geolocation.watchPosition((pos) => {
    console.log(pos);
    document.getElementById('monitor').innerHTML = `<h3>lat: ${pos.coords.latitude}</h3>
                                                    <h3>long: ${pos.coords.longitude}</h3>
                                                    <h3>speed: ${pos.coords.speed}</h3>`;
});