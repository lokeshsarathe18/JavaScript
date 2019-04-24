// localStorage.setItem('0','Complete Assignments')
// localStorage.setItem('1','Go to GYM')
// localStorage.setItem('2','Learn JS')
// localStorage.setItem('3','Watch IPL MI vs DC')
// localStorage.setItem('4','Lokesh')

for (let index = 0; index < li.length; index++) {
    while (li[index] && li[index].children[0])
        ul.removeChild(li[index])
}
