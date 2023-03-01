window.onload = function(){
//1.Select an element
let elements = document.getElementsByTagName('div')
console.log(elements);
// console.log(elemets[0]);
// console.log(elemets[0].children);
// console.log(elemets[0].children[0]);

let lis = document.getElementsByClassName("item");
console.log(lis);

let cpp = document.getElementById('cpp');
console.log(cpp);
}

// 2. Create an Element
let li = document.createElement('li');

li.innerHTML = <Strong>Android</Strong>;

let ul = document.getElemntById('Courses');
ul.appendchild(li)

// use append child instead of innerHTML

