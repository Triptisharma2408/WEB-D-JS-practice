// setTimeout(function(){
//     console.log("Hello")

// }, 3000)

// let id = setInterval(function(){
//     console.log("yes!!")
// }, 10)
// console.log(id);

// setTimeout(function(){
//     clearInterval(id)
    
// }, 3000)

let id = setInterval(function(){
    console.log("hello");
}, 10, setTimeout(function(){
    clearInterval(id)
    
}, 3000));

// letid = SI(fun, 10, ST(Idclear, 3000))

console.log("hello world")

