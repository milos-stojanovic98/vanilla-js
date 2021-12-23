const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Avgust",
    "September",
    "October",
    "November",
    "December"
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednessday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
const showMore = document.querySelector(".show-more");
const descriptionDiv = document.querySelector(".description-div");


showMore.addEventListener("click", function(){
    descriptionDiv.classList.toggle("show-description");
})


let futureDate = new Date(2022, 4, 8, 15, 30, 0);

const year = futureDate.getFullYear();
const date = futureDate.getDate();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const seconds = futureDate.getSeconds();


const month = months[futureDate.getMonth()];
const day = weekdays[futureDate.getDay()];

giveaway.textContent = `Giveaway ends at: ${month} ${date}th,  ${year}, ${hours}:${minutes}:${seconds}0 pm (CEST) `;

//kad ce doci
const futureTime = futureDate.getTime();

function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;
    //1s = 1000ms
    //1min = 60s
    //1hour = 60min
    //1day = 24hr

    //values in ms
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    //calculate all values 
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    //set values array
    const values = [days,hours,minutes,seconds];

    function format(item){
        if(item < 10){
            return item = `0${item}`;
        }
        return item;
    }

    items.forEach(function(item,index){
        item.innerHTML = format(values[index]);
    });
    if(t<=0 ){
        clearInterval(countdown);
        deadline.innerHTML = `<h3> Giveaway ended! </h3>`;
    }
}
//countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();