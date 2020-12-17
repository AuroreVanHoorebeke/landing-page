const body = document.querySelector("body");
const main = document.querySelector("main");
const url = "https://picsum.photos/v2/list";
const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const time = document.querySelector(".time");

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
    // console.log(now);
    let fullDate = now.toLocaleDateString('fr-FR', options);
    let dayNow = now.toLocaleDateString('fr-FR', options);
    let timeNow = now.toLocaleTimeString('fr-FR');
    day.textContent = dayNow;
    time.textContent = timeNow;
    setInterval(displayTime, 1000)
}
displayTime()
fetch(url)
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
        document.body.style.backgroundImage = `url(${array[i].download_url})`
        setTimeout(setImg, 30000)
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