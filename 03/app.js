
const x = 10;
let iteration = 0;
let randomNumber = -1;

while(x !== randomNumber) {
    randomNumber = Math.round(Math.random() * 25);
    iteration++;
    console.log("Wylosowany numer:", randomNumber);
    console.log("Poszukiwany numer:", x);
}

console.log("Potrzebowałeś", iteration, "prób");