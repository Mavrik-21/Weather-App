let weather = {
    apiKey:"281b08f9a9dc48c9dd0309d74ba2c553",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apiKey
        ).then((Response) => Response.json())  
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp,humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in "+name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".desc").innerText = description;
        document.querySelector(".temp").innerText = temp+"°C";
        document.querySelector(".humid").innerText = "Humidity: "+humidity+"%";
        document.querySelector(".wind").innerText = "Wind Speed: "+speed+" km/h";
        document.querySelector(".weather").classList.remove("loading");
    },

    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".btn").addEventListener("click",function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("Delhi");
