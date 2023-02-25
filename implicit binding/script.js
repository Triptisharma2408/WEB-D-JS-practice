let vaibhav = {
    lastname: 'Sharma',
    age: 19,
    updateplacementstatus: function(status){
        this.placementstatus = status;
        console.log(this);
    }
}
let sakshi = {
    lastname: 'Bansal'
    age: 20,
    updateplacementstatus: function(status){
        this.placementstatus = status;
        console.log(this);
    }
}
vaibhav.updateplacementstatus("Adobe");
sakshi.updateplacementstatus("google");