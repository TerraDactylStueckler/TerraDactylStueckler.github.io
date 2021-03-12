const temperature= parseFloat(document.getElementById("temperature").textContent);
const speed= parseFloat(document.getElementById("speed").textContent);
let windchill= 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temperature * Math.pow(speed, 0.16));
windchill= Math.round(windchill);
if( temperature<=50 && speed > 3){document.getElementById("chill").textContent=windchill;}
else{document.getElementById("chill").textContent="0";} 
    
