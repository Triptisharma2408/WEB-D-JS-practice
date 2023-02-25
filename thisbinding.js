console.log(this);
console.log(this.alert('Hello'));

function add(){
    console.log("Inside add", this);
}
add();
// implicit binding