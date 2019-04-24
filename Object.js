var personProto = {
    name: 'Lokesh',
    job: "student",
    yearOfBirth: "1997",
    getAge: function () {
        return 2018 - this.yearOfBirth
    }
}

var lokesh = Object.create(personProto)

var ashu = Object.create(personProto, {
    name: { value: 'Ashu' },
    yearOfBirth: { value: 1997 },
    job: { value: 'Master' },
    liki: { value: 'Loki' } // new property added to prototype
})

console.log(personProto);

console.log(lokesh.getAge());
console.log(ashu.getAge());

/////////////////////////////////////////////////////////////////////////////////////////////

var student = new Object()
student["name"] = 'Kannu'
student.age = 21
student.course = 'CSE'
student.address = new Object() //Object as data member of Object
student.address.street = 'MIG 242'
student.address.city = 'Bhopal'
student.address.state = "M.P."
student.address.country = 'India'
/*student.getYOB = function () {
    console.log(2019 - this.age);
}*/
console.log(student);
console.log("city: " + student["address"]["city"])
//{ name: 'Kannu', age: 21, course: 'CSE', getYOB: [Function] }


///////////////////////////////////////////////////////////////////////////////////////////////

console.log("///////////////////////////////////////");


var JSONtoString = JSON.stringify(student)
console.log(JSONtoString);

var StringToJSON = JSON.parse(JSONtoString)
console.log(StringToJSON);
