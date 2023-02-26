function outerfun(){
    console.log("Inside outer fun");
    let a = 1;

    function innerfun(){
        console.log("Inside inner fun");
        
        a++;
        return a;
    }
    return innerfun;

}

let fun = outerfun();
console.log(fun());
console.log(fun());

let fun1 = outerfun();
console.log(fun1());
console.log(fun1());
console.log(fun1());
console.log(fun1());