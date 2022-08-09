//https://jsonlint.com (ai website ta holo: amra je JSON likhsi seta valid kina dekhar jnno)

//string
//number
//Object(JSON)
//array 
//boolean
//null

///Doesn't Support undefined,date,function
var student = {
    name: "Rahim",
    age: 26,
    hometown: "Dhaka",
    married: false,
    dob: 1995-05-12,
    test_null: null,
    test_undefined: undefined,
    greet: function(){ //function
        console.log(`Hello ${this.name}`);
    }
};

var student_json = JSON.stringify(student);

console.log(student_json);

var student_new = JSON.parse(student_json);
console.log(student_new);