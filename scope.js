function first() {
    let a = 10
    second()
    function second() {
        let b=20
        console.log(a+b);
        
    }
}

function third(){
    console.log('before');
    second() // cant be accessed as second is not in global scope
    console.log('after');
}
third() // second is not defined