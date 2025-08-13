
let currentHour = 8;
let allItems = new Set();

// when button is clicked or enter pressed, check if input was given
// if no input, show alert message (display nicely in html)
// else,
// convert input string to array
// display each item in a new time slot (need place to put it in html)
// display timeout success message (display same place as alert)
// update summary
// clear input

const input = document.getElementById('input');
let inputValue = input.value.split(",");
let alertMessage = document.getElementById('alertMessage');
// alertMessage.textContent = 

const summary = document.getElementById('summary');
const taskList = document.getElementById('taskList');

function addTasks () {
    // taskList.textContent = `your mother`;
    taskList.textContent = `${input.value}`;
}

input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addTasks();
    }
})










// function addTasks () {

//     const inputEl = document.querySelector('input');
//     let inputValue = inputEl.value.trim().split(",");
   
//     // if no input, show alert message
//     if (!inputValue) {
//         showAlert("Enter your tasks!");
//         return;
//     }

//     handleNewSubmission(inputValue);

//     inputEl.value = '';
// }



// function handleNewSubmission (userInput) {

//     const newItems = userInput.filter(item => !allItems.has(item));

//     if (newItems.length === 0) {
//         alert("No new items to add!");
//         return;
//     }

//     for (let i = 0; i < newItems.length; i++) {
//         allItems.add(newItems[i]);
//         const scheduleItem = document.createElement('div');
//         scheduleItem.textContent = `${currentHour}:00 - ${newItems[i]}`;
//         listEl.appendChild(scheduleItem);
//         currentHour++;
//     }

// }

// function showAlert (message, type) {
//     const alert = document.getElementById('alertMessage');
//     alert.textContent = message;
//     alert.className = `alert alert-${type}`;
//     alert.style.display = 'block';
// }

// function clearAllTasks () {
//     if (allItems.size === 0) {
//         alert("Task List is already clear!");
//         return;
//     }

//     updateStats();
//     listEl.innerHTML = '';
// }

// function updateStats () {
//     const taskCount = allItems.size;
//     const nextTime = formatTime(currentHour);
//     summary.innerHTML = `<strong>Current Schedule:</strong>${taskCount} | <strong>Next available time:</strong> ${nextTime}`;
// }












// declare a variable assign it to a random number, specifically, a number between 0 and the length of the array, essentially giving you an index
// let i = Math.floor(Math.random() * array.length);

// Appending HTML to an element. Setting the value of innerHTML lets you append new contents to the existing one of an element (mdn, innerHTML docs)
// const list = document.getElementById("list");
// list.innerHTML += `<li></li>`; // creates one new list item on the page