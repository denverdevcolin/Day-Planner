
const array = ["Walk", "Study", "Workout", "Call a loved one", "Hydrate", "Read five pages of something", "Do the dishes", "Prep for dinner", "Shower", "Laundry"];

// this variable is assigned a number, specifically, a number between 0 and the length of the array, essentially giving me an index
// let i = Math.floor(Math.random() * array.length);

// then i want to see on the page as an h1 the random array value that corresponds to the random index we plug into it with bracket notation
// arrayItem.innerHTML = array[i];

// if i = 2 then we should see "Workout" appear as an h1 on the page. to test this, I want to console.log(i)
// console.log(i); // works as expected

// Appending HTML to an element. Setting the value of innerHTML lets you append new contents to the existing one of an element (mdn, innerHTML docs)
const list = document.getElementById("list");
// list.innerHTML += `<li></li>`; // creates one new list item

// creates one new list item for each element in the array
for (let i = 0; i < array.length; i++) {
    list.innerHTML += `<li>${array[i]}</li>`;
}