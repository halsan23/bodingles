// Header Construction
// ===========================================================================

// assign variables
const header = document.querySelector("#app-header");

// build first part of header
let headText = `
<span class="headLogo"></span>
<span class="headTitleShadow">Bodingles<sub>TM</sub></span>
<a href="/index.html">
    <span class="headTitle">Bo</span>
    <span class="headTitleb">dingles</span>
</a>
<span class="headScroll"><img src="/images/scroll.png" alt=""></span>
<span class="headSlogan">
    - -&nbsp;&nbsp;&nbsp;Bright
`;

// build second part of header
// if on page index.html, add link to temp.html
if (window.location.pathname == '/' || window.location.pathname == '/index.html') {
    headText += `
        <a href="temp/temp.html"><img class="sloganBulb" src="images/logos/lightbulb.png" alt="Lightbulb Graphic"></a>
            Ideas&nbsp;&nbsp;&nbsp;- -
        </span>
    `;
} else {
    headText += `
        <img class="sloganBulb" src="/images/logos/lightbulb.png" alt="Lightbulb Graphic">
            Ideas&nbsp;&nbsp;&nbsp;- -
        </span>
    `;
}
header.innerHTML = headText;

// log window paths
// console.log(`window.location.host : ${window.location.host}`);
// console.log(`window.location.hostname : ${window.location.hostname}`);
// console.log(`window.location.pathname : ${window.location.pathname}`);
// console.log(`rootPath : ${rootPath}`);
