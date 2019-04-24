const student = {
    name: 'Lokesh',
    age:21,
    gender: 'M',
    profession: 'Developer'
}

//localStorage.setItem('student',JSON.stringify(student))

console.log(JSON.parse(localStorage.getItem('student')).name);
