let loc = document.querySelector('.search');
let container = document.getElementById('container');
let searchButton = document.querySelector('.search-button');
const key = "83a6907f2d0f6a09a2e2ba6d14e45531";
let result = document.querySelector('.result');


let getInfo = () => { 
    let place = loc.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${key}`;
    if(place.length <= 0){
        result.innerHTML = `<p style="text-align:center">Please enter a place name</p>`;
    }
    else {
        fetch(url).then(resp => resp.json()).then((data) => {
            
            if(data.cod === "404")
            {   
                result.innerHTML = `<p class="msg">${data.message}</p>
                <img src="404.png" style="width:100px;height:100px;">`;
            }
            else {
                result.innerHTML = `
                <div class="InfoFirst">
                <h2 style="text-align:center">${data.name}</h2>
                    <img src="${data.weather[0].main}.png" class="weatherImg">
                    <p class="temp">${parseInt(parseFloat(data.main.temp)*10)/10}°C<br>${data.weather[0].main}</p>
                    <p style="text-align:center;font-weight:bold">${data.weather[0].description}</p>
                    <div class="otherInfo"><span>Humidity : ${data.main.humidity}</span>
                    <span>Wind Speed : ${parseInt(data.wind.speed)}</span>
                    </div>
                </div>
                `;
            }
        }).catch(error =>{
            result.innerHTML = `<p class="msg">Error Occured</p>`;
        })
    }
    
}

searchButton.addEventListener("click",getInfo);
window.addEventListener("load",getInfo);
window.addEventListener('keydown',(e) =>{
    if(e.key === 'Enter')
    {
        getInfo();
    }
});