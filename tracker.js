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
    document.getElementById('monitor').innerHTML = `lat: ${pos.coords.latitude}<br>
                                                    long: ${pos.coords.longitude}<br>
                                                    speed: ${pos.coords.speed}`;
});