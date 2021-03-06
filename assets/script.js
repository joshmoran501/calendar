var container = document.getElementById("container")
var rightNow = moment().format("HH")
var textfield = document.getElementsByName("textfield")
var saveBtn = document.getElementsByClassName("saveBtn")
var today = document.getElementById("currentDay")

today.innerText = `Today's date is ${moment().format(`MMMM Do YYYY`)}`

// generate timeblocks
for (let hour=9; hour<18; hour++) {   
    var timeDisplayed = moment(hour, `H`)
    var hourID = document.getElementById(`${timeDisplayed.format(`H`)}`)
    container.innerHTML += `<div class="row">
    <div class="col hour">${timeDisplayed.format(`h A`)}</div>
    <input name="textfield" type="text" id="${timeDisplayed.format(`HH`)}" class="col-10"></input>
    <button id="${timeDisplayed.format(`HH`)}btn" class="saveBtn col">&#128190</button>
    </div>`
}

// change color of input box based on time
function colorHandler() {    
    for (let i=0; i<9; i++) {
        var value = textfield[i].getAttribute("id")
        if(rightNow > value){
            textfield[i].classList.add("past");
        }
        if(rightNow == value){
            textfield[i].classList.add("present");
        }
        if(rightNow < value){
            textfield[i].classList.add("future");
        }
    } 
}

colorHandler()

// save values to local storage, any x+9 values are to get it to match up with the hour in military time, which my ids use
for(let x=0; x<9; x++) {
    var btnValue = saveBtn[x].getAttribute("id")
    this[btnValue].addEventListener("click",saveEvent)
    function saveEvent () {
    localStorage.setItem(x+9,textfield[x].value)
    }
}

// add existing values to page after refresh
for(let x=0; x<9; x++) {
    textfield[x].value= localStorage.getItem(x+9)
}

// automatically change textblock color at the hour mark
function updateMoment() {
    var currentMoment = moment().format("mm:ss")
    if (currentMoment == "00:00") {
    colorHandler()
    }
}

setInterval(updateMoment, 1000)

// change header date at midnight
function updateDate() {
    var midnight = moment().format("HH:mm:ss") 
    if (midnight== "00:00:00") {
    today.innerText = `Today's date is ${moment().format(`MMMM Do YYYY`)}`
    }
}

setInterval(updateDate,1000)