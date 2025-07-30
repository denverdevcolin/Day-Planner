
const array = ["Walk", "Study", "Workout", "Call a loved one", "Hydrate", "Read five pages of something", "Do the dishes", "Prep for dinner", "Shower", "Laundry"];

// this variable is assigned a number, specifically, a number between 0 and the length of the array, essentially giving me an index
// let i = Math.floor(Math.random() * array.length);

// Appending HTML to an element. Setting the value of innerHTML lets you append new contents to the existing one of an element (mdn, innerHTML docs)
const list = document.getElementById("list");
// list.innerHTML += `<li></li>`; // creates one new list item

// creates one new list item for each element in the array
for (let i = 0; i < array.length; i++) {
    list.innerHTML += `<li>${array[Math.floor(Math.random() * array.length)]}</li>`;
}

