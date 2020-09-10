
let dataDB = {}
let weather = document.getElementsByClassName("weather");
let search = document.getElementsByClassName("inputvalue");
console.log(name);
function Jack(){
if (search[0].value != "New York" && search[0].value != "new york"){
   weather[0].innerHTML = "N/A. Check Back Soon";
   weather[1].innerHTML = '';
   weather[2].innerHTML = '';
   weather[3].innerHTML = '';
   return 0
}
fetch("http://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=ee982b225185f4399365c41e8e84b9d0")
.then(response => response.json())
.then(data => {
   dataDB = {Temperature: data.main.temp ,
       wet: data.weather[0].main, 
       Weather: data.weather[0].description,
        feels: data.main.feels_like};
   
})
.then( () => {
   weather[0].innerHTML = 'Temp :' + ' ' + dataDB.Temperature;
   weather[1].innerHTML = 'Weather :' + ' ' + dataDB.wet;
   weather[2].innerHTML = 'Description :' + ' ' + dataDB.Weather;
   weather[3].innerHTML = 'Feels_Like :' + ' ' + dataDB.feels;
   search[0].value = '';
   /* ^ Adds all that data to elements */


})
}
