class Human {
    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }
    getHuman() {
        return `name:${this.name}, age:${this.age}, gender:${this.gender}`
    }
}

class Student extends Human {
    constructor(name, age, gender, qualification) {
        super(name, age, gender)
        this.qualification = qualification
    }

    getStudent() {
        return `name: ${this.name}, age: ${this.age}, gender: ${this.gender}, qualification: ${this.qualification}`
    }
}

const lokesh = new Student('Lokesh', 21, 'Male', "CS Engineer")
console.log(lokesh.getStudent());

