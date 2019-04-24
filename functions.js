//function statement
function print(name) {
    return `your name is ${name}`
}
console.log(print('lokesh'));

//function Expression
let printf = function (name) {
    console.log(`your name is ${name}`);
}
printf('Kannu')

//Arrow function 
let printc = (name) => console.log(`your name is ${name}`);
printc('Ashu')

////////////////////////////////////////////////////////////////////////////
//functions are Objects

function greet() {
    console.log("hi");
}

console.log(greet);

greet.loki = 'Lokesh'
console.log(greet.loki);

function log(a) {
    a()
}

log(function () {
    console.log('Lokiqwergf');
})

