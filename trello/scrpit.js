var ul = document.getElementById('list')
var li

let addButton = document.getElementById('add')
addButton.addEventListener('click', addItem)

let removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem)

let removeAll = document.getElementById('removeAll')
removeAll.addEventListener('click', removeAllItems)

function showItems(){
    for (let index = 0; index < localStorage.length; index++) {
        console.log(localStorage.getItem(`${index}`));
    }
}

function addItem() {
    let input = document.getElementById('input')
    let value = input.value
    let textNode = document.createTextNode(value)
    if (value === '') {
        let h = document.createElement('h3')
        textNode = 'Enter activity name to add'
        h.textContent = 'Enter activity name to add'
        let body = document.querySelector('body')
        body.appendChild(h)

        return false
    }else{
        li = document.createElement('li')
        li.setAttribute('class','mycheck')
        let checkBox = document.createElement('input')
        checkBox.type = 'checkbox'
        checkBox.setAttribute('id','check')
        let lable = document.createElement('lable')
        ul.appendChild(li)
        li.appendChild(checkBox)
        lable.appendChild(textNode)
        li.appendChild(lable)
        ul.insertBefore(li,ul.childNodes[0])
        input.value = ''
    }
}

function removeItem() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
}

function removeAllItems() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0])
            ul.removeChild(li[index])
    }
}