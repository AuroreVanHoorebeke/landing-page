const body = document.querySelector("body");
const main = document.querySelector("main");
const urlPic = "https://picsum.photos/v2/list";
const urlWeather5 = "http://api.openweathermap.org/data/2.5/forecast?q=Brussels&appid=28f60020b1762edbb924e3df09acb1d4";
//id=524901&
const urlWeather1 = "http://api.openweathermap.org/data/2.5/weather?q=Brussels&units=metric&appid=28f60020b1762edbb924e3df09acb1d4";
const date = document.querySelector(".date");
const time = document.querySelector(".time");
const copyright = document.querySelector(".copyright");
let place = document.querySelector(".location");
const weatherHere = document.querySelector(".weatherHere");
const temperature = document.querySelector(".temperature");
const feelsLikeTemp = document.querySelector(".feelsLikeTemp");
const minima = document.querySelector(".minima");
const maxima = document.querySelector(".maxima");
const sky = document.querySelector(".sky");

// function randImg(){
//     // body.style.backgroundImage = `url(${arrElem.download_url})`
//     // body.style.backgroundSize = "cover";
//     // body.style.height= "100vh";
//     // body.style.width= "100vw";
//     document.body.style.backgroundImage = `url(${array[i].download_url})`
//     setTimeout(randImg(), 1000)
// }

function displayTime(){
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};

    let now = new Date()
    //console.log(now);
    let dateNow = now.toLocaleDateString(undefined, options);
    let timeNow = now.toLocaleTimeString(undefined);
    date.textContent = dateNow;
    time.textContent = timeNow;
    setInterval(displayTime, 1000)
}
displayTime()
fetch(urlPic)
.then(response => response.json())
.then (array => {
    console.log(array)
    let i = 0;
    // for (let i = 0; i < array.length; i++){
    //     console.log(array[i]);
    //     let arrElem = array[i];
    //     let imgUrl = array[i].download_url;
    //     let imgId = array[i].id;
    //     let imgWidth = array[i].width;
    //     let imgHeight = array[i].height;
    //     console.log(imgUrl);
    //     console.log(imgId);
    //     console.log(imgWidth);
    //     console.log(imgHeight);
    //     return arrElem
    // }
    console.log(i);
    function setImg(){
        console.log(i);
        body.style.backgroundImage = `url(${array[i].download_url})`
        copyright.textContent = array[i].author;
        
        setTimeout(setImg, 3000)
        i++;
        if(i == array.length){
            i=0;
        }
    }
    setImg()
    
})
.catch(error => {
    console.log("There was an error!", error)
})

function weatherFetch(){
    fetch(urlWeather1)
    .then(response => response.json())
    .then (array => {
    console.log(array)
        function displayWeather(){
            place.textContent = `Today in ${array.name}`;
            let weatherObj = array.weather[0];
            let tempPressVis = array.main;
            temperature.textContent = `Temperature: ${Math.floor(tempPressVis.temp)}`;
            feelsLikeTemp.textContent = `Feels like: ${Math.floor(tempPressVis.feels_like)}`;
            minima.innerHTML = ` <i class="fas fa-thermometer-quarter"></i> 
            ${Math.floor(tempPressVis.temp_min)}`;
            maxima.innerHTML = `<i class="fas fa-thermometer-three-quarters"></i> ${Math.floor(tempPressVis.temp_max)}`;
            sky.textContent = weatherObj.main;
            if(weatherObj.main == "Clouds"){
                sky.innerHTML = '<p class="clouds"><i class="fas fa-cloud"></i> Cloudy</p>'
            }
            console.log(weatherObj.main);
            setTimeout(displayWeather, 600000)
        }
        displayWeather()
    })
}
weatherFetch()