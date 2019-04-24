let myCourse = {
    title: "JavaScript",
    duratnion: "3 hrs",
    price: "free",
    getSummary: function () {
        console.log(`title : ${this.title}, duration : ${this.duratnion}, price : ${this.price}`);
    },
}
myCourse.price = 599
//console.log(myCourse)
myCourse.getSummary()

let student = new Object();
student.name = 'Lokesh'
student.age = 21
student['course'] = 'CSE'
student['getSummary'] = function () {
    console.log(`name : ${this.name}, age : ${this.age}, course : ${this.course}`);
}
//console.log(student);
student.getSummary(45)

