//live Clock script By Ahmedinoo
function time (){
    let date = new Date()
    let second = date.getSeconds() //0-60
    let minute = date.getMinutes() //0-60
    let hour = date.getHours() //0-23
    let session;
    if (hour <= 12) {
        hour = hour;
        session = "A.M."
        if (hour === 0){
            hour = 12;
        }
    } 
    else {
        hour = hour - 12; //change from the 24-hour notation to the 12-hour pm/am notation.
        session = "P.M."
    }
    document.getElementById("clock").innerHTML = `${hour}:${minute}:${second} ${session}`
}
setInterval(time, 1000);






