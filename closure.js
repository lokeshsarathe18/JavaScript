function print() {
    let a = 5
    return function (v) {
        console.log(a + v);
    }
}
let lokesh = print()
lokesh(5)
// print()(5)