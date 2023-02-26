function housetask(brooming, utensils){
    brooming()
    utensils()

    return function(){
        console.log("rs.1000") 
}

}
function brooming(){
    console.log("cleaning done")
}
function utensils(){
    console.log("utensils done")
}
// let x = housetask(brooming, utensils)

// x()
housetask(brooming, utensils)