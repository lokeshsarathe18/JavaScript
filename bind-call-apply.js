/*Applications
* function binding
* finction curring

*/

// bind method of function objects



// call method of function objects



/*apply method of array */
//ES5
function addFourAges(a, b, c, d) {
    return a + b + c + d
}

let ages = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(addFourAges.apply(null, ages));

//takes first 4 elements of array as parameters of addFourAges

//ES6
console.log(addFourAges(...ages));//spread operator(...args) spreads array elements as function parameters