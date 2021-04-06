fetch('./data.json')
 .then(function (response) {
   return response.json();
 })
   .then (function (jsonObject) {
     const chamber = jsonObject["chamber"];
     const event = document.querySelector(".events"); //writes the events to the div in document with id=events
     console.log(chamber);

     const chamberfilter = chamber.filter((chamber) => chamber.name == "Lander");
     chamberfilter.forEach((chamber) => {
       let title = document.createElement("h2");
       let eventadd = document.createElement("div");

       title.innerHTML = chamber.name + ` Events`; //writes the h2 title

       let myevents = chamber.events;
       for (i = 0; i < myevents.length; i++) {
         let activity = document.createElement("li");
         activity.innerHTML = `${chamber.events[i]}`
         eventadd.append(activity);
       };
       event.append(title);
       event.append(eventadd);
     });
   });