//real Real Estate api
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dd4478f7d1mshda225f66ed69b87p1fc374jsnea047b9f379e',
		'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
	}
};

// for sale api function 
function forSaleFunc() {
  let userInputArr = userInput.value.split(', ');
  let usCity = userInputArr[0];
  let usState = userInputArr[1];
  
  fetch(`https://realty-in-us.p.rapidapi.com/properties/list-${propertyType.value}?state_code=${usState}&city=${usCity}&offset=0&limit=${limit}&sort=${sortBy.value}&beds_min=${document.getElementById('minBeds').value}`, options)
  .then(response => response.json())
  .then(data => {
    console.log(data.listings)

    content.innerHTML = render(data.listings);

    searchBtn.classList.remove('is-loading');

    loadMore.style.display = 'block';

    loadMore.classList.remove('is-loading');


    const detail = document.querySelectorAll('.detail');
    
  })
  .catch(err => console.error(err));
};


//Google Autocomplete Api
function activatePlacesSearch () {
  let autoComplete = new google.maps.places.Autocomplete(userInput);

}






