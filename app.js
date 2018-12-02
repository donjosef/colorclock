 
function leadingZero(val) {
    return val < 10 ? '0' + val : val;
}

setInterval(function() {
        const hour_span = document.getElementById("hour");
        const min_span = document.getElementById("minute");
        const sec_span = document.getElementById("second");
        let date = new Date();
        let hours = date.getHours();
        let mins = date.getMinutes();
        let secs = date.getSeconds();
        
        hour_span.innerHTML = leadingZero(hours) + ":";
        min_span.innerHTML =  leadingZero(mins) + ":";
        sec_span.innerHTML = leadingZero(secs);        
       
    },1000);