
// const btnEl = document.querySelector('button');
const addBtn = document.getElementById('addTasks');
const clearBtn = document.getElementById('clearTasks');

const inputEl = document.querySelector('input');
const listEl = document.getElementById('list');

const summary = document.getElementById('summary');

let currentHour = 8;
let allItems = new Set();

clearBtn.addEventListener('click', () => {
    
    clearAllTasks();
});

addBtn.addEventListener('click', () => {

    let inputValue = inputEl.value.split(",");
   
    // for (let i = 0; i < inputValue.length; i++) {
    //     let time = `${currentHour}:00`;
    //     currentHour++;
        
    //     listEl.insertAdjacentHTML(
    //         'beforeend',
    //         `<li>${time} -${inputValue[i]}</li>`
    //     );
    // }

    handleNewSubmission(inputValue);

    const taskCount = allItems.size;
    const nextTime = formatTime(currentHour);
    summary.innerHTML = `<strong>Current Schedule:</strong>${taskCount} | <strong>Next available time:</strong> ${nextTime}`;

    inputEl.value = '';
    
});

function handleNewSubmission (userInput) {

    const newItems = userInput.filter(item => !allItems.has(item));

    if (newItems.length === 0) {
        alert("No new items to add!");
        return;
    }

    for (let i = 0; i < newItems.length; i++) {
        allItems.add(newItems[i]);
        const scheduleItem = document.createElement('div');
        scheduleItem.textContent = `${currentHour}:00 - ${newItems[i]}`;
        listEl.appendChild(scheduleItem);
        currentHour++;
    }

}

function clearAllTasks () {
    if (allItems.size === 0) {
        alert("Task List is already clear!");
        return;
    }
}












// declare a variable assign it to a random number, specifically, a number between 0 and the length of the array, essentially giving you an index
// let i = Math.floor(Math.random() * array.length);

// Appending HTML to an element. Setting the value of innerHTML lets you append new contents to the existing one of an element (mdn, innerHTML docs)
// const list = document.getElementById("list");
// list.innerHTML += `<li></li>`; // creates one new list item on the page