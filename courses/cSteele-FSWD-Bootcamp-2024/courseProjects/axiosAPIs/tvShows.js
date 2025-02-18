// TV Shows API
// https://www.tvmaze.com/api

// Set Base Variables
const form = document.querySelector('#searchForm');
const showInput = document.querySelector('#showInput');
const tvShowDisplay = document.querySelector('#tvShowDisplay');
document.getElementsByName('showInput')[0].placeholder = 'TV Show';


form.addEventListener('submit', async function (evt) {
   // prevent default form processing actions
   // so we can control this with javaScript
   evt.preventDefault();

   // the form element has properties found by using console.dir(form);
   // we can access the value of the form input from these properties
   // specifically the "elements.query.value" properties
   const searchTerm = form.elements.showInput.value;

   document.getElementsByName('showInput')[0].value = '';
   document.getElementsByName('showInput')[0].placeholder = 'TV Show';
   tvShowDisplay.innerText = '';

   // send request for TV Show data
   const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);

   // display the results
   displayImages(res.data)
})


// create and display the new image
const displayImages = (shows) => {
   // count through each show
   for (let item of shows) {
      // if database has no img to display
      if (!item.show.image) {
         let showName = document.createElement('SPAN');
         showName.innerHTML = `<p><b>${item.show.name}</b></p><p>No Image<br>Available</p>`;
         tvShowDisplay.append(showName);
      // if database does have an img to display
      } else {
         const img = document.createElement('IMG');
         img.src = item.show.image.medium;
         tvShowDisplay.append(img);
      }
   }
}