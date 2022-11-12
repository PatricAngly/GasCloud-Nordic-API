let city = document.querySelector(".city")
let searchBar = document.querySelector(".searchBar")
let searchBtn = document.querySelector(".searchBtn")
let weatherStatus = document.querySelector(".weatherStatus")
let temp = document.querySelector(".temp")
let country = document.querySelector(".country") 

// API anrop
function fetchData() {
  fetch('https://api.openweathermap.org/geo/1.0/direct?q=helsingborg&appid=f8ea10d3a094f9396fb9b3d58618d731') // skickar ett anrop till API servern som svarar med ett löfte tillbaka
  .then(response => response.json()) // Om löftet från header har lyckasts körs funktionen som retunerar body
  .then(data =>{   // Om löftet body har lyckats och blivit parsed, körs funktionen som hanterar data från JSON format.
    lat = data[0].lat // Hämtar ut latitude och anger den till lat
    lon = data[0].lon // Hämtar ut latitude och anger den till lon
    console.log(lat, lon)
  })

  
}
fetchData()






