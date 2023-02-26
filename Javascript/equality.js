console.log(1 == 1)// true
console.log(1 == 2)// false

console.log(Infinity)
console.log(-Infinity)
console.log(3/0)

console.log(3+(-3))
console.log(Infinity+(-Infinity))// NaN: Not a Number

console.log(1 == 1)// true
console.log(1 == 2)// false
console.log('' == 1)// true
console.log(+'')
//lose equality operator(==)
console.log("1 == '1'" ,1 == '1')// true

//strict equality operator
console.log("1 === '1'" ,1 === '1')// true

// a = 10
// b = 10
// a = b

console.log("'' == [] ",''== [])// true
console.log("'' == 0 ",''== 0)// true
console.log("0 == [] ",0 == [])// true
console.log("'\\t' == 0 ", '\t' == 0)// true
console.log("'\\t' == '' ",'\t'== '')// true

//parseInt and parseFloat
let str = "123"
let num = parseInt(str)
console.log(num)

str = "abc123"
num = parseInt(str)
console.log(num)

