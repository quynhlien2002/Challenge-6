var citySearch = document.querySelector(".city-search");
var button = document.querySelector(".btn");
var cityName = document.querySelector("card-title");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");
var uv = document.getElementById("uv");

button.addEventListener('click', function(){
    fetch ('https://api.openweathermap.org/data/2.5/weather?q='+citySearch.value+'&appid=636f19696100c90191a9c3a1c1db82f4')
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        console.log(data);
    });
});



