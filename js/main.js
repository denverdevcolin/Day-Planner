
// const array = ["Walk", "Study", "Workout", "Clean one room", "Call a loved one", "Hydrate", "Read five pages of something", "Do the dishes", "Prep for dinner", "Shower", "Laundry"];

const btnEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.getElementById('list');

btnEl.addEventListener('click', () => {

    let inputValue = inputEl.value.split(",");

    // checkDupes(inputValue);
   
    for (let i = 0; i < inputValue.length; i++) {

        if (inputValue[i] == listEl.innerText) {
            throw new Error(`${inputValue[i]} is already in your task list!`)
        } else {
            listEl.insertAdjacentHTML('beforeend', `<li>${inputValue[i]}</li>`);
        }
    }

});

function checkDupes (listItems) {

    // if the next inputValue contains an item already in the listItems?
    
    // if the listItems on the page already have something that's in inputValue?
    

}

// declare a variable assign it to a random number, specifically, a number between 0 and the length of the array, essentially giving you an index
// let i = Math.floor(Math.random() * array.length);

// Appending HTML to an element. Setting the value of innerHTML lets you append new contents to the existing one of an element (mdn, innerHTML docs)
// const list = document.getElementById("list");
// list.innerHTML += `<li></li>`; // creates one new list item on the page

// create one new list item for each element in the array
// for (let i = 0; i < array.length; i++) {
//     list.innerHTML += `<li>${array[i]}</li>`;


