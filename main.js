// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
var customerDiv = document.querySelector(".customerList");
function getCustomers() {
  "use strict";
  fetch("https://randomuser.me/api/?results=12")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data.results);
      var people = data.results;
      for (var i = 0; i < people.length; i++) {
        createId(people[i]);
      }
    });
}
getCustomers();

function createId(personConfig) {
  var personDiv = document.createElement("div");
  personDiv.setAttribute("class", "info");
  customerDiv.appendChild(personDiv);
  var personPic = document.createElement("img");
  personPic.setAttribute("class", "pic");
  personPic.src = personConfig.picture.large;
  personDiv.appendChild(personPic);
  var personName = document.createElement("p");
  personName.setAttribute("class", "name");
  personName.innerHTML =
    personConfig.name.first + "&nbsp" + personConfig.name.last;
  personDiv.appendChild(personName);
  var personEmail = document.createElement("p");
  personEmail.setAttribute("class", "email");
  personEmail.innerHTML = personConfig.email;
  personDiv.appendChild(personEmail);
  var personAddress = document.createElement("p");
  personAddress.setAttribute("class", "address");
  personAddress.innerHTML =
    personConfig.location.street +
    "<br>" +
    personConfig.location.city +
    ", " +
    personConfig.location.state +
    "&nbsp" +
    personConfig.location.postcode;
  personDiv.appendChild(personAddress);
  var personCell = document.createElement("p");
  personCell.setAttribute("class", "cell");
  personCell.innerHTML = personConfig.cell;
  personDiv.appendChild(personCell);
}
