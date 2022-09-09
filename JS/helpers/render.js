function render(objArr) {
  let housesArr = objArr.map(currentHouse => {

      return `
        <div class="mt-6 has-background-white row" style="width:18rem; margin-bottom:16px; border-radius: 15px;">
          <div class="column">
            <img src="${noImage(currentHouse)}" style="width:18rem; height:200px; border-radius: 15px;"/>
          </div>
          <div class="column">
          <span style="font-size:25px; font-family:monospace;">Address: </span>
          
            <h2 style="font-size:18px;">${currentHouse.address}</h2>
          </div>
          <div class="column">
          <span style="font-size:25px; font-family:monospace;">Price: </span>
            <h2 style="font-size:15px;">${currentHouse.price}</h2>
          </div>
          <div class="column">
            <button class="detail button is-success is-focused"><a href="${currentHouse['rdc_web_url']}" target="_blank" style="color:white;">Click</a></button>
          </div>
        </div>
        
      `

  });
  return housesArr.join('');
};
//helper function to add a photo to the current house that has no photo
function noImage (currentHouse) {
  if(currentHouse.photo_count == 0){
    currentHouse.photo = 'https://media.istockphoto.com/vectors/cute-cottage-vector-id165794938?k=20&m=165794938&s=612x612&w=0&h=MaF2jZpxrr_h7WdZih0ZngNJl_w3CH-2Q9to52hCP24='
  }else if(currentHouse.photo_count > 0){
    currentHouse.photo = currentHouse.photo
  }
  return currentHouse.photo
}