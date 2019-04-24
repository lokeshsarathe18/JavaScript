function myValidation(){
    let input = document.getElementById('myinput').value
    if (isNaN(input) || input<1 || input>21) {
        document.querySelector('h1').textContent = 'Not a valid Input'
        //alert('Not a valid Input')
    }else{
        document.querySelector('h1').textContent = 'This input is Okay.'
        //alert('This input is Okay.')
    }
}