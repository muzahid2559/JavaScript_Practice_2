// Swap Variables


//normal swapping
let a, b;
a = 8; b= 20;

let temp = a;
a = b;
b = temp;

console.log(`a = ${a} and b = ${b}`);


//easily swapping
let c, d;
c = 10; d= 30;

[c, d] = [d , c];

console.log(`c = ${c} and d = ${d}`);

