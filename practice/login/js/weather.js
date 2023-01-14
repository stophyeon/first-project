const API_KEY = "5cf2a670c653e850e9769626e518acff"

function success(position) {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child")
            const city = document.querySelector("#weather span:last-child")
            city.innerHTML = data.name
            weather.innerHTML = `${data.weather[0].main} / ${data.main.temp}`
        })
}
function fail() {
    alert("I can't find you")
}

navigator.geolocation.getCurrentPosition(success, fail)
