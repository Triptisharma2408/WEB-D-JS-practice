function goajaenge(placementstatus){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        if (placementstatus){
            resolve("okay time to go to goa!");
        }
        else {
            reject("lag gyi");
        }
    },3000);
})
}
let p = goajaenge(true);
p
.then((message)=>{
    console.log(message);
})
.catch((gandamessage)=>{
    console.log(gandamessage);
})