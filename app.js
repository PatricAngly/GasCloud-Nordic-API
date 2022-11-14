let city = document.querySelector(".city")
let searchBar = document.querySelector(".searchBar")
let searchBtn = document.querySelector(".searchBtn")
let weatherStatus = document.querySelector(".weatherStatus")
let temp = document.querySelector(".temp")
let country = document.querySelector(".country") 

// API anrop
function fetchData() {
  fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchBar.value}&appid=f8ea10d3a094f9396fb9b3d58618d731`) // skickar ett anrop till API servern som svarar med ett löfte tillbaka
  .then(response => response.json()) // Om löftet från header är uppfyllt körs funktionen som retunerar body i JSON format
  .then(data =>{   // Om löftet från body är uppfyllt och blivit parsed, körs funktionen som hanterar data i JSON.
    lat = data[0].lat // Hämtar ut värdet och anger den till lat
    lon = data[0].lon // (Läs rad 13) fast anger till lon  
    city.innerHTML = "The local weather in " + data[0].name // hätmar värdet från JSON och lägger det i taggen
    country.innerHTML = "Country: "+data[0].country // (Läs rad 15)
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f8ea10d3a094f9396fb9b3d58618d731&units=metric`) // Om data från föregående anrop lyckats och är tillgängligt, körs en ny fetch med lat och lon från den stad användaren har angett 
    .then(response => response.json())      // (läs rad 11)
      .then(data => {      // (Läs rad 12)
        weatherStatus.innerHTML = data.weather[0].description // (Läs rad 15)
        temp.innerHTML = data.main.temp.toFixed(0)+"°C" // (Läs rad 15)
        if(data.weather[0].main == "Clear"){
          document.body.style.backgroundImage = "url(img/sun-3588618_960_720.jpg)"; 
          document.body.className = "imageStyle"
        }  
        if(data.weather[0].main == "Clouds"){
          document.body.style.backgroundImage = "url(img/clouds-49520_960_720.jpg)"
          document.body.className = "imageStyle"
        }                                                                                       // if satser som väljer rätt blid efter väder status.
        if(data.weather[0].description == "Snow"){
          document.body.style.backgroundImage = "url(img/winter-landscape-4532412_960_720.jpg)"
          document.body.className = "imageStyle"
        }
        if(data.weather[0].description == "Rain", "Drizzle"){
          document.body.style.backgroundImage = "url(img/row-boats-2264338_960_720.jpg)"
          document.body.className = "imageStyle"
        } 
      })   
  })
  .catch(err => alert("Ingen stad hittades")) // om ett löfte inte uppfylls eller lyckas körs en catch funktion  
}


 searchBtn.addEventListener("click",()=>{ // Lyssnar efter klick på sökknappen, om ett klick görs så körs funktionen.
  fetchData() // kör fetch funktionen
  searchBar.value = ""; // rensar sökfältet
})
 



