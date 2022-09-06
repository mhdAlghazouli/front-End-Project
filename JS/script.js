//call the elements to use them in the DOM
let userInput = document.getElementById('userInput');
const searchBtn = document.getElementById('searchBtn');
const content =document.getElementById('content-container');
const sortBy = document.getElementById('sortBy');


//add listener to the window
window.addEventListener('DOMContentLoaded', e => {
  e.preventDefault();
  
  searchBtn.addEventListener('click', event => {
    searchBtn.classList.add('is-loading');
    forSaleFunc();
    
  });
  
})










