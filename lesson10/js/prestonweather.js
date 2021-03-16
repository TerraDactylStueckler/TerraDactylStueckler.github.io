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

const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=b8bd845eed4e4fab1e047d161ebec271";

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.log(weatherInfo);

    document.getElementById('townName').textContent = weatherInfo.city.name;

let mylist = weatherInfo.list;
    let forecastDayNumber = todayDayNumber;

    for(i=0; i < mylist.length; i++){
        let time = mylist[i].dt_txt;
        if (time.includes ('21:00:00')){
            
            forecastDayNumber +=1;
            if(forecastDayNumber ===7){
            forecastDayNumber = 0;}

            let theDayName = document.createElement("span");
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


    //const temperature = document.querySelector('#current-temp');
    //temperature.textContent = jsObject.main.temp;

   // const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
   // const desc = jsObject.weather[0].description;  // note how we reference the weather array
   // document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    //document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    //document.getElementById('icon').setAttribute('alt', desc);
 // });