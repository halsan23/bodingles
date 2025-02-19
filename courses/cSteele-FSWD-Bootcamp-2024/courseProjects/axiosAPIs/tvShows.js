// TV Shows API
// https://www.tvmaze.com/api

// Set Base Variables
const form = document.querySelector('#searchForm');
const showInput = document.querySelector('#showInput');
const tvShowDisplay = document.querySelector('#tvShowDisplay');
const errorDisp = document.querySelector('#errorDisp');
document.getElementsByName('showInput')[0].placeholder = 'TV Show';


form.addEventListener('submit', async function (evt) {
   // prevent default form processing actions
   // so we can control this with javaScript
   evt.preventDefault();

   // the form element has properties found by using console.dir(form);
   // we can access the value of the form input from these properties
   // specifically the "elements.query.value" properties
   const searchTerm = form.elements.showInput.value;

   // clear text input field on submit
   // reset text input placeholder
   document.getElementsByName('showInput')[0].value = '';
   document.getElementsByName('showInput')[0].placeholder = 'TV Show';
   tvShowDisplay.innerText = '';

   try {
      // send request for TV Show data
      const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);

      // display the results
      displayShows(res.data);

      } catch (evt) {
         errorDisp.innerHTML = `<span class="error">${evt}</span>`;
         console.log(evt);
   }
})


// create and display the new image
const displayShows = (shows) => {

   // count through each show
   for (let item of shows) {
      thisShow = item.show;
      console.log(thisShow);

      let divParent = document.createElement('DIV');
      divParent.className = "divParent";
      let divImage = document.createElement('DIV');
      divImage.className = "divImage";
      let divText = document.createElement('DIV');
      divText.className = "divText";

      // if database has no img to display
      if (!thisShow.image) {
         divImage.innerHTML = `<p>No Image<br>Available</p>`;

      // if database does have an img to display
      } else {
         const img = document.createElement('IMG');
         img.src = thisShow.image.medium;
         divImage.append(img);
      }
      divParent.append(divImage);

      let prating = document.createElement('P');
      prating.innerText = `Average Rating: ${thisShow.rating.average}`;
      divText.append(prating);

      pPrem = document.createElement('P');
      pPrem.innerText = `Premiered: ${thisShow.premiered}`;
      divText.append(pPrem);

      pEnd = document.createElement('P');
      pEnd.innerText = `Ended: ${thisShow.ended}`;
      divText.append(pEnd);

      divParent.append(divText);
      tvShowDisplay.append(divParent);
   }
}
