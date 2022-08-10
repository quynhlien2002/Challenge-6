var citySearch = document.querySelector(".form-control");
var button = document.querySelector(".btn");
var cityName = document.getElementById("city-name");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");
var uv = document.getElementById("uv");
var today = moment().format('MMMM Do YYYY, h:mm:ss a');


button.addEventListener('click', function(){
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
    
    var lat = data['coord']['lat'];
    var lon = data ['coord']['lon'];
    
    localStorage.setItem('lat', lat);
    localStorage.setItem("lon", lon);

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
                var uvValue = data['uvi'];
                console.log(uv)
                console.log(uvValue)
                uv.innerHTML = uvValue;
            })
            
            });
        



// var lat = data['coord']['lat'];
// var lon = data ['coord']['lon'];

// fetch('https://api.openweathermap.org/data/3.0/onecall?lat='+lat+'&lon='+lon+'&appid=636f19696100c90191a9c3a1c1db82f4')
//     .then (function(response){
//         return response.json();
//     })
//     .then(function (data){
//         var uvValue = data['uvi'];
//         console.log(uv)
//         console.log(uvValue)
//         uv.innerHTML = uvValue;
//     })
    
//     });

//     var nameValue = data['name'];
//     var tempValue = data['main']['temp'];
//     var windValue = data['wind']['speed'];
//     var humidityValue = data['main']['humidity'];
//     console.log(data);

//     cityName.innerHTML = nameValue + " " + " " + today;
//     temp.innerHTML = "Temp: " + tempValue + " Farenheit";
//     wind.innerHTML = "Wind: " + windValue + " MPH";
//     humidity.innerHTML = "Humidity: " + humidityValue + "%";
