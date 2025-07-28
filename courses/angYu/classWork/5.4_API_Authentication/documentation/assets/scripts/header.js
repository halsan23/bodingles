// Header Construction
// ===========================================================================

// assign variables
const header = document.querySelector("#app-header");

// build first part of header
let headText = `
   <span class="headLogo"></span>
   <span class="headTitleShadow">Bodingles<sub>TM</sub></span>
   <span class="headTitle">Bo</span>
   <span class="headTitleb">dingles</span>
   <span class="headScroll"><img src="assets/images/scroll.png" alt=""></span>
   <span class="headSlogan">
      - -&nbsp;&nbsp;&nbsp;Bright
      <img class="sloganBulb" src="assets/images/logos/lightbulb.png" alt="Lightbulb Graphic">
      Ideas&nbsp;&nbsp;&nbsp;- -
   </span>
`;

header.innerHTML = headText;
