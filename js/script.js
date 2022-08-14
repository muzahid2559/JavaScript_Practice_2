// Normal Declaration
function saySomething(name) {
    console.log('Hello ' + name);
}

// Function Expression

let saySomething1 = function(name2) {
    console.log('Hello ' + name2);
}

// Arrow Function (ES6)

let saySomething2 = (name3) => {
    console.log("I am " + name3);
}

let saySomething3 = name3 => console.log("I am " + name3);

let saySomething4 = name => {return  name;}




saySomething("Muzahid");
saySomething1("Khandakar");
saySomething2("Learn JavaScript");
saySomething3("Learn JavaScript");
saySomething4("Learn JavaScript");