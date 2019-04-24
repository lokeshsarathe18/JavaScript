let users = new Map()
users.set(1, 'Lokesh')
users.set(2, 'Ashu')
users.set(1, 'Kannu')

console.log(users.size);
for (const key of users.keys()) {
    console.log(key + ' : ' + users.get(key));
}

for (const [key, value] of users.entries()) {
    //console.log(key + ' : ' + value);
    console.log(`${key} : ${value}`);
}

users.forEach((value, key) => console.log(`${key} : ${value}`));

let a = [['1','one'],['2','two'],['3','three']]
let myMap = new Map(a)
for (const [key, value] of myMap.entries()) {
    console.log(key + " = " + value);
}
