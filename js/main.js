
// const array = ["Walk", "Study", "Workout", "Clean one room", "Call a loved one", "Hydrate", "Read five pages of something", "Do the dishes", "Prep for dinner", "Shower", "Laundry"];

const btnEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.getElementById('list');
// create an array and add each value with push?
let array = [];

btnEl.addEventListener('click', () => {
    // const inputValue = inputEl.value;
    const inputValue = inputEl.value;
    array.push(inputValue);
    for (let i = 0; i < array.length; i++) {
        listEl.insertAdjacentHTML('beforeend', `<li>${inputValue}</li>`);
    }
    
});

// declare a variable assign it to a random number, specifically, a number between 0 and the length of the array, essentially giving you an index
// let i = Math.floor(Math.random() * array.length);

// Appending HTML to an element. Setting the value of innerHTML lets you append new contents to the existing one of an element (mdn, innerHTML docs)
// const list = document.getElementById("list");
// list.innerHTML += `<li></li>`; // creates one new list item on the page

// create one new list item for each element in the array
// for (let i = 0; i < array.length; i++) {
//     list.innerHTML += `<li>${array[i]}</li>`;

    // unordered list ends up receiving duplicates. how do we keep them out?
    // 


