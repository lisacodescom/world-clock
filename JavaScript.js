function city(){
let dallasElement = document.querySelector("#dallas")
let dallasDateElement = dallasElement.querySelector(".date")
let dallasDate = moment().tz("America/Dallas");
dallasDateElement.innerHTML = dallasDate.format("MMMM Do YYYY");
let dallasTimeElement = dallasElement.querySelector(".time")
let dallasTime = dallasDate.format("h:mm:ss [<small>]A[</small>]");
dallasTimeElement.innerHTML = dallasTime;



let parisElement = document.querySelector("#paris")
let parisDateElement = parisElement.querySelector(".date")
let parisDate = moment().tz("Europe/Paris");
parisDateElement.innerHTML = parisDate.format("MMMM Do YYYY")
let parisTimeElement = parisElement.querySelector(".time")
let parisTime = parisDate.format("h:mm:ss [<small>]A[</small>]");
parisTimeElement.innerHTML = parisTime;

}
setInterval(city,1000)

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  console.log(cityTime);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="cities">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss [<small>]A[</small>]"
        )}
    </div>`;

}


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

