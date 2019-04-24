print() // function statement can be called

function print() {
    console.log('Lokesh');
}

//printf() // gives error when calling function expression

var printf = function () {
    console.log('Kannu');
}

console.log(name); // undefined when accessing before declaring but not give error
//works even within function

//console.log(firstname); // gives error

var name = 'Ashu'
let firstname = 'lokesh'

console.log(firstname);

a = 'Kannu'
console.log(a);
