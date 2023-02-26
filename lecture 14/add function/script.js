function add(){

}
console.log(add(1)(2)())
console.log(add(1)(2)(3)())
console.log(add(1)(2)(4)(5)())
console.log(add(1)(2)(4)(5)(6)())
console.log(add(1)(2)(4)(5)(6)(7)())

let x = fun(); //equation a
x(); //equation b //x needs to be function  
//substitute equation a in equation b
// ==>x() == fun()();

//let us assume: fun()() == fun1
let fun = fun1(); //only possble when fun1 is a function