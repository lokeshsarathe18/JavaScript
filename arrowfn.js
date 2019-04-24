let camera = {
    price: 500,
    weight: 300,
    desc() {
        //not a arrow function
        return `This camera is of ${this.price} dollors`
    }
}

console.log(camera.desc())