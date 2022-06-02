var container = document.getElementById("container")
var rightNow = moment().format("HH")
var textfield = document.getElementsByName("textfield")

// generate timeblocks
for (let hour=9; hour<18; hour++) {   
    var timeDisplayed = moment(hour, `H`)
    var hourID = document.getElementById(`${timeDisplayed.format(`H`)}`)
    container.innerHTML += `<div class="row">
    <div class="col hour">${timeDisplayed.format(`h A`)}</div>
    <input name="textfield" type="text" id="${timeDisplayed.format(`HH`)}" class="col-10"></input>
    <button id="${timeDisplayed.format(`H`)}btn" class="col saveBtn">&#128190</button>
    </div>`;
    // checkTime()
}

// change color of input box based on time
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


// save inputted values
function saveEvent () {

}