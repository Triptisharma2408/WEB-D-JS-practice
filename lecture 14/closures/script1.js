function outerfun(){
    let a =1;
    function innerfun(){
        a++;
        function innermostfun(){
            a++;
            return a;
        }
        return innermostfun;
    }
    return innerfun;
}
let fun1 = outerfun();
let fun11 = fun1();
let fun12 = fun1();
let fun2 = outerfun();
let fun21 = fun2();


console.log(fun11());
console.log(fun12());

console.log(fun11());
console.log(fun12());

console.log(fun11());
console.log(fun12());

console.log(fun21());
console.log(fun21());
console.log(fun21());