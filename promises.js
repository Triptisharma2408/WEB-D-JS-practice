let Saathrehpaaye = false;
let p = new Promise((resolve,reject)=>{
    console.log("Running the promise")
    if(Saathrehpaaye){
        resolve("badiya hai");
    }
    else{
        reject("Ok! Bye!");
    }
})

// p
// .then((message)=>{
//     console.log("message");
// })
// .catch((gandamessage)=>{
//     console.log("gandamessage");
// })