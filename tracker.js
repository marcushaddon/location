"use strict";
let currentLocation = {};
let pin = null;

function main() {
    navigator.geolocation.watchPosition((pos) => {
        console.log(pos);
        currentLocation = pos.coords;
        document.getElementById('monitor').innerHTML = `<h3>lat: ${pos.coords.latitude}</h3>
                                                        <h3>long: ${pos.coords.longitude}</h3>
                                                        <h3>speed: ${pos.coords.speed}</h3>`;
        document.getElementById('distancetopin').innerHTML = distanceToPin();
    });
}

function distanceToPin() {
    if (pin === null) {
        return Infinity;
    }
    let x1 = pin.latitude;
    let x2 = currentLocation.latitude;
    let y1 = pin.longitude;
    let y2 = currentLocation.longitude;
    let distance = Math.sqrt(
        Math.pow((x2 - x1), 2) - Math.pow((y2 - y1), 2)
    );
    
    return distance;

}

document.getElementById('drop-pin').addEventListener('click', () => {
    pin = currentLocation;
    
});

main();