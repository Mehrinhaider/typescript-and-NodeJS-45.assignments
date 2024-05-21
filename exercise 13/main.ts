let vehicle:string[] = ["Corolla", "Honda", "civic", "suzuki"]
let message:string[] = ["i would like to own a "]
console.log(`${message}  ${vehicle[0]}`);
console.log(`${message}  ${vehicle[1]}`);
console.log(`${message}  ${vehicle[2]}`);
console.log(`${message}  ${vehicle[3]}`);

/////////////////or///////////


let transport:string[] = ["corolla", "civic","bmw"]
transport.map((items) =>  console.log(`i would like to own a ${items}.`))





