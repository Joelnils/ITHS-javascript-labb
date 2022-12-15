let väder = document.querySelector('.weather')
var input = document.querySelector('.searchWeather')
var btn = document.querySelector('.search-Btn')
var card = document.querySelector('.card')

btn.addEventListener('click', function() {
    fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + input.value, options)
        .then((response) => response.json())
        .then((data) => {
            if (data.temp === undefined) {
                return
            }
            väder.innerHTML += `
            <div class ="weather">
            <div class="card" style="width: 18rem;">
           <ul class="list-group list-group-flush">
           <li class="list-group-item">Temperature ${data.temp}&#x2103;</li>
           <li class="list-group-item">Feels like ${data.feels_like}&#x2103;</li>
          <li class="list-group-item">Min-temp ${data.min_temp}&#x2103;</li>
          <li class="list-group-item">Max-temp ${data.max_temp}&#x2103;</li>
          <li class="list-group-item">Humidity ${data.humidity}%</li>
          </ul>
         </div>
         <div class="card" style="width: 18rem;">
         <ul class="list-group list-group-flush">
         <li class="list-group-item">Clouds ${data.cloud_pct}%</li>
         <li class="list-group-item">Wind-speed ${data.wind_speed} M/s</li>
        <li class="list-group-item">Wind-speed ${data.wind_speed} M/s</li>
        <li class="list-group-item">Sunrise ${data.sunrise}&#127749;</li>
        <li class="list-group-item">Sunset ${data.sunset}&#127751;</li>
        </ul>
       </div>
    </div>`;
        });
    const refreshPage = () => {
        location.reload();
    }

    btn.addEventListener('click', refreshPage)



})
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '23fec5118amshb9b808e5cc78477p1eda76jsn9518db2c9e0f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};