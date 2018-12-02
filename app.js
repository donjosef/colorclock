const current_col = document.querySelector('.current-color');

function rgbToHex(...rgb) {
    return rgb.map(val => {
        const hex = val.toString(16);
        return hex.length == 1 ? '0' + hex : hex;
    }).join("");
}


 function changeColor(h, m, s) {
    var red = Math.round(255 * ( h/23 ));
    var green = Math.round(255 * ( m/59 ));
    var blue = Math.round(255 * ( s/59 ));

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    current_col.innerHTML = `rgb(${red}, ${green}, ${blue})` + '<br>' + 'Exadecimal: ' + '#' + rgbToHex(red, green, blue);
 }

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
       
    changeColor(hours, mins, secs)
},1000);