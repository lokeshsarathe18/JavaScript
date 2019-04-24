//alert('You are the BOSS, Lokesh')
console.log(document.title);
document.title = "NewTitle"
//console.log(document.documentURI);

document.querySelector('h1').textContent = ('I am groot!')

let newElement = document.createElement('p')
newElement.textContent = 'I am added via JS'
document.querySelector('body').appendChild(newElement)

let lokesh = function () {
    alert('Hurrrrrrray, You clicked on ClickMe')
}

document.querySelector('button').addEventListener('click', (event) => {
    event.target.textContent = 'I was clicked'
})

document.querySelector('#myinput').addEventListener('input',(event)=>{
    let check = event.target.value
    
})
