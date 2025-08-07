
const btnEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.getElementById('list');
let startHour = 8;

btnEl.addEventListener('click', () => {

    let inputValue = inputEl.value.split(",");
   
    for (let i = 0; i < inputValue.length; i++) {

        let time = `${startHour}:00`;
        startHour++;
        
        listEl.insertAdjacentHTML(
            'beforeend',
            `<li>${time} -${inputValue[i]}</li>`
        );


    }

    inputEl.value = '';

});




// declare a variable assign it to a random number, specifically, a number between 0 and the length of the array, essentially giving you an index
// let i = Math.floor(Math.random() * array.length);

// Appending HTML to an element. Setting the value of innerHTML lets you append new contents to the existing one of an element (mdn, innerHTML docs)
// const list = document.getElementById("list");
// list.innerHTML += `<li></li>`; // creates one new list item on the page