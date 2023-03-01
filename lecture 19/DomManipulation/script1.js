//query selector -- first element
//querySelectorAll -- all elements

let div = document.querySelectorAll('.item');
console.log(div);
for(let i = 0; i< div.length; i++){
    div[i].innerText += ' - Course';
}

// 3. delete an element
