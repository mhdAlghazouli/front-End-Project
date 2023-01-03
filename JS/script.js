//call the elements to use them in the DOM
let userInput = document.getElementById('userInput');
const searchBtn = document.getElementById('searchBtn');
const content =document.getElementById('content-container');
const sortBy = document.getElementById('sortBy');
console.dir(sortBy)
const propertyType = document.getElementById("propertyType")
const loadMore = document.getElementById('loadMore');
//create limit variables to add it to the api
let limit = 10;

//add listener to the window
window.addEventListener('DOMContentLoaded', e => {
  e.preventDefault();

  //add event to the search button
  searchBtn.addEventListener('click', event => {
    
    searchBtn.classList.add('is-loading');
    forSaleFunc();
    searchBtn.disabled = 'true';
    //add event to the load more button
    loadMore.addEventListener('click',() => {
      
      limit += 10;
      forSaleFunc();
      loadMore.classList.add('is-loading');
      
    });
    
  });
  
});











