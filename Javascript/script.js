// 'use strict';
// var a = 5;
// var b = "hello";
// var c = true;
// let d = 10;
// const e = "Hello world"

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

// let x = {
//     a: 121345,
//     b: "hello",
//     c: true
//  }
 
// console.log(x.a)
// console.log(x.b)
// console.log(x.c)

let obj = {
    '': 'Empty string',
    ' ': 'Space',
    a: 30
}

console.log(obj [''])
console.log(obj [' '])
console.log(obj ['a'])

let arr = [
    "Hello", 1,2,3,"World",true
]
arr.push(3214)
arr[10] = "some value"
console.log(arr)
arr.pop()


for (let i = 0 ; i < arr.length; i++){
    console.log(arr[i])
}

let obj1 = {
    x: 'Empty string',
    y: 'Space',
    z: 30
}
for(let i in obj1){
    console.log(obj1[i])
}