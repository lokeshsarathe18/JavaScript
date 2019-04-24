let userName = "lokesh@gmail.com"
let pwd = "12345678"

let checkUserName = function (userName) {
    if (userName.toLowerCase().includes("@gmail.com")) {
        return true
    }
    return false
}

let checkPwd = function (pwd) {
    if (pwd.length > 7) {
        return true
    }
    return false
}

if (checkPwd(pwd) && checkUserName(userName)) {
    console.log("COmplete your sign-up")
}else{
    console.log("ENtered data in not valid")
}