function add(firstnumber){
    if(!firstnumber) return 0;
    let sum = firstnumber;
    
    function addMore(nextnumber){
        if(!nextnumber) return sum;
        sum += nextnumber;
    return addMore;

    }
    return addMore

}

console.log(add())
console.log(add(1)(2)())
console.log(add(1)(2)(3)())
console.log(add(1)(2)(3)(4)())
console.log(add(1)(2)(3)(4)(5)())
console.log(add(1)(2)(3)(4)(5)(6)())