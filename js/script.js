// Object Destructing

let person = {
    firstName: "Muzahid",
    lastName: "Islam",
    dob: '09-27-1995'
}

// let fname = person.firstName,
// lname = person.lastName,
// dob = person.dob;
//let { firstName : fname, lastName, dob } = person;
//console.log(fname, lastName, dob);


function display({ firstName : fname, lastName, dob  }) {
    console.log(fname, lastName, dob);
}

display(person);
