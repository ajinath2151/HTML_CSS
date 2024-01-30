
function showTime() {
    setInterval(() => {        
        let time = new Date();
        document.getElementById("currTime").innerHTML = time.toString();
    }, 1000);
}