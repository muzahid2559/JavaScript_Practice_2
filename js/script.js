// Spread Operator ...
 
let numbers = [23, 1, 0, -1];

console.log(Math.max(...numbers));

let person = ["Muzahidul", "Islam"]

let test = (fname, lname) => {
    console.log(`Hello ${fname} ${lname}`);
}

test(...person);