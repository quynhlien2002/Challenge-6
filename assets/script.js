var citySearch = document.querySelector(".form-control");
var button = document.querySelector(".btn");
var cityName = document.getElementById("city-name");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");
var uv = document.getElementById("uv");
var today = moment().format('MMMM Do YYYY, h:mm:ss a');
var futureDate = document.getElementsByClassName('date-future');
var futureTemp = document.getElementsByClassName('temp-future');
var futureWind = document.getElementsByClassName('wind-future');
var futureHumidity = document.getElementsByClassName('humidity-future');
var searchHistory = document.querySelector('.search-history');


button.addEventListener('click', function(whenClick){
    fetch ('https://api.openweathermap.org/data/2.5/weather?q='+citySearch.value+'&units=imperial&appid=636f19696100c90191a9c3a1c1db82f4')
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var windValue = data['wind']['speed'];
    var humidityValue = data['main']['humidity'];
    console.log(data);

    cityName.innerHTML = nameValue + " " + " " + today;
    temp.innerHTML = "Temp: " + tempValue + " Farenheit";
    wind.innerHTML = "Wind: " + windValue + " MPH";
    humidity.innerHTML = "Humidity: " + humidityValue + "%";
    
    var lat = data.coord.lat;
    var lon = data.coord.lon;
    
    localStorage.setItem('lat', lat);
    localStorage.setItem("lon", lon);
    localStorage.setItem('nameValue', nameValue)
});

var lat = localStorage.getItem('lat');
var lon = localStorage.getItem('lon');
console.log(lat);
console.log(lon);
        
fetch('https://api.openweathermap.org/data/2.5/uvi?appid=636f19696100c90191a9c3a1c1db82f4&lat='+lat+'&lon='+lon)
            .then (function(response){
                return response.json();
            })
            .then(function (data){
                var uvValue = data['value'];
                console.log(uv)
                console.log(uvValue)
                uv.innerHTML = "UV Index: " + uvValue;
            })
            
fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&cnt=5&units=imperial&appid=636f19696100c90191a9c3a1c1db82f4')
     .then(function(response){
    return response.json();
     })
     .then(function(data){
    console.log(data);
     for (i=0; i<=5; i++){
        var dateFuture = data['daily'][i]['dt'];
        var dateConvert = new Date(dateFuture*1000);
        var tempFuture = data['daily'][i]['temp']['day'];
        var windFuture =data['daily'][i]['wind_speed'];
        var humidityFuture = data['daily'][i]['humidity'];
            console.log(dateConvert);
            console.log(tempFuture);
            console.log(windFuture);
            console.log(humidityFuture);
                
            futureDate[i].innerHTML = dateConvert.toLocaleString();
            futureTemp[i].innerHTML = tempFuture  + " Farenheit";
            futureWind[i].innerHTML = windFuture + " MPH";
            futureHumidity[i].innerHTML = "Humidity: " + humidityFuture + " %";
                
            var nameValue = localStorage.getItem("nameValue");

// for (i=0; i<nameValue.length; i++){
//     if (nameValue){
//         searchHistory.innerHTML = nameValue;
//     }
// }
            };
        })
            });

// searchHistory.addEventListener('click', function(){
//     whenClick(nameValue);
// })



