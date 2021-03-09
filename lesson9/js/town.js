const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        if(towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs"){
            let card = document.createElement('section');
            let name = document.createElement('h2');
            let motto= document.createElement('h4');
            let yearFounded = document.createElement('p');
            let population = document.createElement('p');
            let annRainfall = document.createElement('p');
            let image = document.createElement('img');
            let details = document.createElement('div');

        
        image.setAttribute('src', 'images/' + towns[i].photo);
        image.setAttribute('alt', towns[i].name);

        name.textContent = towns[i].name;
        motto.textContent = towns[i].motto;

        yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
        population.textContent = "Population: "+ towns[i].currentPopulation;
        annRainfall.textContent = "Annual Rainfall: " + towns[i].averageRainfall + ' ' + "in.";
        details.setAttribute('id', 'details');

        card.appendChild(image);
        card.appendChild(details);

        details.appendChild(name);
        details.appendChild(motto);
        details.appendChild(yearFounded);
        details.appendChild(population);
        details.appendChild(annRainfall);
        

        document.querySelector('div.cards').appendChild(card);
    }
    }
});
