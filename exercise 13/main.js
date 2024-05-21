"use strict";
let vehicle = ["Corolla", "Honda", "civic", "suzuki"];
let message = ["i would like to own a "];
console.log(`${message}  ${vehicle[0]}`);
console.log(`${message}  ${vehicle[1]}`);
console.log(`${message}  ${vehicle[2]}`);
console.log(`${message}  ${vehicle[3]}`);
/////////////////or///////////
let transport = ["corolla", "civic", "bmw"];
transport.map((items) => console.log(`i would like to own a ${items}.`));
