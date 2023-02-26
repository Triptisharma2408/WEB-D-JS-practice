function home(cleaning, learning){
    cleaning()
    learning()
    return function earning(){
        console.log("earning money")
        return function sleeping(){
            console.log("slept")
        }

    }

}
let x = home(cleaning, learning)
function cleaning(){
    console.log("brooming")

}
function learning(){
    console.log("learning code")
}
function earning(){
    console.log("earning money")

}