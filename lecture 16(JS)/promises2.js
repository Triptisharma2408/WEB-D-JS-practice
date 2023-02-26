function download(url){
    return new Promise((resolve, reject)=>{
        console.log("download begins");
        setTimeout(()=>{
            if(!url) return reject("Url isn't present");

            let downloadedfile = url.split('/').pop();
            resolve(downloadedfile);
        },3000);

    })
}
function compress(downloadedfile){
    return new Promise((resolve, reject)=>{
        console.log("compression starts!");
        setTimeout(()=>{
            if(!downloadedfile) return reject("compression can't be completed");
            let compressedfile = downloadedfile.split('.')[0]+'.zip'
            resolve(compressedfile);
        },3000);

    })
}
function upload(compressedfile){
    return new Promise((resolve, reject)=>{
        console.log("uploading starts");
        setTimeout(()=>{
            if(!compressedfile) return reject("no files to upload");
            
            let newurl = 'https://newmovie.com/'+compressedfile;
            resolve(newurl);
        },3000);
    })
}

let url = 'https://movies.com/avengers.mp4';
download(url)
.then((downloadedfile)=>{
    console.log("download finish")
    return compress(downloadedfile);
})
.catch((err)=>{
    console.log(err);
})
.then((compressedfile)=>{
    console.log("compression completes");
    // console.log(compressedfile)
    return upload(compressedfile);

})
.then((uploadedfile)=>{
    console.log("uploading completes");
    // console.log(compressedfile)
    return upload(url);
})


