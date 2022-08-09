fetch ('https://api.openweathermap.org/data/2.5/onecall?exclude={minutely}&appid={636f19696100c90191a9c3a1c1db82f4}')
.then(function (response) {
        return response.json();
    })
    .then(function (data){
        console.log(data);
    });