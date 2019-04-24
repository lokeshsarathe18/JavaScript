var Person = function (name, yearOfBirth, job) {
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
    this.getAge = function () {
        return 2018 - this.yearOfBirth
    }

    // functions in JS are also Objects thus they take up memory space when function constructor is called
    // to pervent this extra memory we add our function to prototype

    // Adding member function to prototype create 1 function for all objects of that prototype
    // Otherwise will create 1 copy for each object so created using function constructor
}

Person.prototype.getName = function () {
    return this.name
}

var lokesh = new Person('Lokesh', 1997, 'Student')

console.log(lokesh);
//console.log(lokesh.getName());

var student = {
    name: 'Default',
    age: 18,
    course: 'CSE',
    getAge: function () {
        return this.age
    }
}


var ashu = Object.create(student)
console.log(ashu.getAge());

