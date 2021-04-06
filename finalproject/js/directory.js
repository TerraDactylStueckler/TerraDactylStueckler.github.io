fetch('./directory.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const directory = jsonObject['directory'];
    for (let i = 0; i < directory.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let address = document.createElement('p');
        let hours = document.createElement('p');
        let website = document.createElement('p');
        let phone = document.createElement('p');
        let image = document.createElement('img');

        
        image.setAttribute('src', directory[i].image);
        image.setAttribute('alt', directory[i].name + " " + directory[i].lastname + " " + (i + 1));
        h2.textContent = directory[i].name
        address.textContent = "Address: " + directory[i].address;
        hours.textContent = "Hours: "+ directory[i].hours;
        website.textContent = "Website: "+ directory[i].website;
        phone.textContent = "Phone: "+ directory[i].phone;

        card.appendChild(h2);
        card.appendChild(address);
        card.appendChild(hours);
        card.appendChild(phone)
        card.appendChild(website)
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
    }
});