let city = document.querySelector(".city")
let searchBar = document.querySelector(".searchBar")
let searchBtn = document.querySelector(".searchBtn")
let weatherStatus = document.querySelector(".weatherStatus")
let temp = document.querySelector(".temp")
let country = document.querySelector(".country") 

// API anrop
function fetchData() {
  fetch('https://api.openweathermap.org/geo/1.0/direct?q='+searchBar.value+'&appid=f8ea10d3a094f9396fb9b3d58618d731') // skickar ett anrop till API servern som svarar med ett löfte tillbaka
  .then(response => response.json()) // Om löftet från header är uppfyllt körs funktionen som retunerar body i JSON format
  .then(data =>{   // Om löftet från body är uppfyllt och blivit parsed, körs funktionen som hanterar data i JSON.
    lat = data[0].lat // Hämtar ut latitude och anger den till lat
    lon = data[0].lon // Hämtar ut latitude och anger den till lon
    city.innerHTML = data[0].name
    country.innerHTML = data[0].country
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon=-'+lon+'&appid=f8ea10d3a094f9396fb9b3d58618d731&units=metric') // Om data från föregående anrop lyckats och är tillgängligt, körs en ny fetch med lat och lon beroende på vad användaren har angett 
    .then(response => response.json())      // (läs rad 11)
      .then(data => {       // (Läs rad 12)
        weatherStatus.innerHTML = data.weather[0].description
        temp.innerHTML = data.main.temp.toFixed(0)+"°C"
      }) 
  })

  
}


 searchBtn.addEventListener("click",()=>{ // Lyssnar efter klick på sökknappen, om ett klick görs så körs funktionen.
  fetchData()
  searchBar.value = ""; // rensar sökfältet
})
 



