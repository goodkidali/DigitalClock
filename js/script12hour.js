let dayText = document.querySelector(".day")
let monthText = document.querySelector(".month")
let numberText = document.querySelector(".number")
let timeText = document.querySelector(".time")

var allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var allDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

setInterval(() => {
    let date = new Date()
    let day = allDays[date.getDay()]
    let month = allMonths[date.getMonth()]
    let number = date.getDate()
    let hour = date.getHours()-12
    let min = date.getMinutes()
    let sec = date.getSeconds()

    if(hour < 10){
        hour = "0" + hour
    }
    if(min < 10){
        min = "0" + min
    }
    if(sec < 10){
        sec = "0" + sec
    }



    dayText.textContent = day
    monthText.textContent = month
    numberText.textContent = "-" + number
    timeText.textContent = hour + ":" + min + ":" + sec
})