const mydate = new Date();

const todayDayNumber = mydate.getDay();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=b8bd845eed4e4fab1e047d161ebec271";

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.log(weatherInfo);

    document.getElementById('townName').textContent = weatherInfo.city.name;

let mylist = weatherInfo.list;
    let forecastDayNumber = todayDayNumber;

    for(i=0; i < mylist.length; i++){
        let time = mylist[i].dt_txt;
        if (time.includes ('18:00:00')){
            
            forecastDayNumber +=1;
            if(forecastDayNumber ===7){
            forecastDayNumber = 0;}

            let theDayName = document.createElement("h4");
            theDayName.textContent = weekday[forecastDayNumber];

            let theTemp = document.createElement('p');
            theTemp.innerHTML = weatherInfo.list[i].main.temp + "&176;F";

            let iconcode = weatherInfo.list[i].weather[0].icon;
            let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
            let theIcon = document.createElement('img');
            theIcon.src = iconPath;
            theIcon.alt = `Icon image of ${weatherInfo.list[i].weather[0].description}`;

            let theDay = document.createElement('div');
            theDay.appendChild(theDayName);
            theDay.appendChild(theIcon);
            theDay.appendChild(theTemp);
            document.getElementById('forecastDays').appendChild(theDay);
    
        }
    }
});

const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=b8bd845eed4e4fab1e047d161ebec271";
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
        document.getElementById("speed").innerHTML = weatherInfo.wind.speed;
        document.getElementById("humidity").innerHTML = weatherInfo.main.humidity;
        document.getElementById("hightemp").innerHTML = weatherInfo.main.temp_max;
        let current = `${weatherInfo.weather[0].description}, ${weatherInfo.main.temp}`;
        document.getElementById("current").innerHTML = current.replace(/^\w/, (c) => c.toUpperCase());
    
        const temperature= parseFloat(document.getElementById("temperature").textContent);
        const speed= parseFloat(document.getElementById("speed").textContent);
        let windchill= 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temperature * Math.pow(speed, 0.16));
        windchill= Math.round(windchill);
        if( temperature<=50 && speed > 3){document.getElementById("chill").textContent=windchill;}
        else{document.getElementById("chill").textContent="0";} 
    });