
// create an array of items that you might want to accomplish on any given day

const array = ["Walk", "Study", "Workout", "Call a loved one", "Hydrate", "Read five pages of something", "Do the dishes", "Prep for dinner", "Shower", "Laundry"];

// create some variables and assign them to each list item

let timeSlot1 = document.getElementById("time-slot1");
let timeSlot2 = document.getElementById("time-slot2");
let timeSlot3 = document.getElementById("time-slot3");
let timeSlot4 = document.getElementById("time-slot4");
let timeSlot5 = document.getElementById("time-slot5");
let timeSlot6 = document.getElementById("time-slot6");

// the time slots will be put into an array so we can loop through that too
let timeArray = [timeSlot1, timeSlot2, timeSlot3, timeSlot4, timeSlot5, timeSlot6];

// append/add an array item to the innerhtml
// timeSlot1.innerHTML += array[0];
// timeSlot2.innerHTML += array[1];
// timeSlot3.innerHTML += array[2];
// timeSlot4.innerHTML += array[3];
// timeSlot5.innerHTML += array[4];

// great, now you need to get the for loop to do that

// loop through the array
for (let i = 0; i < array.length; i++) {
    for (let k = 0; i < timeArray.length; i++) {
        timeArray[i].innerHTML += array[i];
    }
}

