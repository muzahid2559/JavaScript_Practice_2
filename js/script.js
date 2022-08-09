// Callback Function 

// setTimeout(function(){
//     console.log("Hello World!");
// }, 5000);

// let persons = [
//     {firstName: "Muzahidul", lastName: "Islam"},
//     {firstName: "Fazle", lastName: "Rahat"}
// ]

// function createPerson(person) {
//    setTimeout(function() {
//        persons.push(person);
//    }, 4000); 
// }

// function getPerson() {
//     setTimeout(function(){
//         let output = '';
//         persons.forEach(function(person){
//             output += `<li>${person.firstName} ${person.lastName}</li>`
//         }); 
//         document.getElementById('output').innerHTML = output;
//     }, 1000);
// }

let persons = [
    {firstName: "Muzahidul", lastName: "Islam"},
    {firstName: "Fazle", lastName: "Rahat"}
]

function createPerson(person, callback) {
   setTimeout(function() {
       persons.push(person);
       callback();
   }, 2000); 
}

function getPerson() {
    setTimeout(function(){
        let output = '';
        persons.forEach(function(person){
            output += `<li>${person.firstName} ${person.lastName}</li>`
        }); 
        document.getElementById('output').innerHTML = output;
    }, 500);
}

createPerson({firstName:"Rony", lastName: "Chy"}, getPerson);
createPerson({firstName:"Jibon", lastName: "Ahmed"}, getPerson);