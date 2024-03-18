function BulbHandler(bulbValue) {
    if (bulbValue==="on"){
        document.getElementById("Img").src = "./Bulbon.jpg"
    }
    else{
        document.getElementById("Img").src = "./BulbOff.jpg"
    }
}