const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=42.8330&lon=-108.7307&exclude=minutely,hourly,daily&units=imperial&appid=b8bd845eed4e4fab1e047d161ebec271";

fetch(apiURL)
const d = new Date();

const todayDayNumber = d.getDay();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
console.log(weekday[6]);

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.log(weatherInfo);

    document.getElementById("townName").textContent = weatherInfo.city.name;

    let mylist = weatherInfo.list;
  
    let forecastDayNumber = todayDayNumber;

    for (i = 0; i < mylist.length; i++) {
      var time = mylist[i].dt_txt;
      if (time.includes("18:00:00")) {
        forecastDayNumber += 1;
        if (forecastDayNumber === 7) {
          forecastDayNumber = 0;
        }

        let theDayName = document.createElement("h4");
        theDayName.textContent = weekday[forecastDayNumber];

        let theTemp = document.createElement("p");
        theTemp.innerHTML = weatherInfo.list[i].current.temp + "ºF";

        let iconcode = weatherInfo.list[i].weather[0].icon;
        let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
        let theIcon = document.createElement("img");
        theIcon.src = iconPath;
        theIcon.alt = `Icon image of ${weatherInfo.list[i].weather[0].description}`;

        let theDay = document.createElement("div");
        theDay.appendChild(theDayName);
        theDay.appendChild(theIcon);
        theDay.appendChild(theTemp);
        document.getElementById("forecastDays").appendChild(theDay);
      }
    }
  });

const apiURL2 = `//api.openweathermap.org/data/2.5/onecall?lat=42.8330&lon=-108.7307&exclude=minutely,hourly,daily&units=imperial&appid=b8bd845eed4e4fab1e047d161ebec271`;
fetch(apiURL2)
.then((response) => response.json())
.then((weatherInfo) => {
  document.getElementById("humidity").innerHTML = weatherInfo.current.humidity;
  document.getElementById("temperature").innerHTML = weatherInfo.current.temp;

 const temperature = parseFloat(
    document.getElementById("temperature").textContent
  );
  
});



