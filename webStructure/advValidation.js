document.querySelector('.myform').addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event.target.username.value);
    console.log(event.target.email.value);
    console.log(event.target.pwd.value);
    console.log(event.target.pwdcheck.value);
    let pwd = event.target.pwd.value
    let pwdcheck = event.target.pwdcheck.value
    if (pwd === pwdcheck) {
        console.log('all cleared');
    }else{
        alert('ENter same password in both tabs'); 
    }
})