function age() {
    console.log('lokesh');
    console.log(this); // refers to window/ global object
}

age()

var obj = {
    name: function(){
        function print(){
            console.log(this); // this refers to window object as it is not member function of obj
            
        }
        print()
    }
}

obj.name()