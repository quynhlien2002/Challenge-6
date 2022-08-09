var citySearch = $('.city-search');
var button = $('.btn');
var cityName = $('.card-title');
var temp = $('#temp');
var wind = $('#wind');
var humidity = $('#humidity');
var uv = $('#uv');

button.addEventListener('click', function(){
    fetch ('http://api.openweathermap.org/geo/1.0/direct?q='+citySearch.value+'&appid=636f19696100c90191a9c3a1c1db82f4')
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        console.log(data);
    });
});



