const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
 .then(function (response) {
   return response.json();
 })
   .then (function (jsonObject) {
     const towns = jsonObject["towns"];
     const event = document.querySelector(".events"); //writes the events to the div in document with id=events
     console.log(towns);

     const townfilter = towns.filter((town) => town.name == "Soda Springs");
     townfilter.forEach((town) => {
       let title = document.createElement("h2");
       let eventadd = document.createElement("div");

       title.innerHTML = town.name + ` Events`; //writes the h2 title

       let myevents = town.events;
       for (i = 0; i < myevents.length; i++) {
         let activity = document.createElement("li");
         activity.innerHTML = `${town.events[i]}`
         eventadd.append(activity);
       };
       event.append(title);
       event.append(eventadd);
     });
   });
