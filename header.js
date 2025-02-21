// Header Construction
// ===========================================================================

// assign variables
const header = document.getElementById("app-header");
let rootPath = '';
let head1 = '';
let head2 = '';

// github root fix
const getRoot = () => {
    if (window.location.hostname === 'halsan23.github.io') {
      return 'halsan23.github.io/bodingles/';
    } else {
      return '/';
    }
  }

rootPath = getRoot();

// build first part of header
head1 = `
    <span class="headLogo"></span>
    <span class="headTitle">Bo</span>
    <span class="headTitleb">dingles<sub>TM</sub></span>
    <span class="headScroll"><img src="${rootPath}images/scroll.png" alt=""></span>
    <span class="headSlogan">
        - -&nbsp;&nbsp;&nbsp;Bright
`;

// build second part of header
// if on page index.html, add link to temo.html
if (window.location.pathname === '/index.html') {
    head2 = `
        <a href="${rootPath}temp/temp.html"><img class="sloganBulb" src="${rootPath}images/logos/lightbulb.png" alt="Lightbulb Graphic"></a>
            Ideas&nbsp;&nbsp;&nbsp;- -
        </span>
    `;
} else {
    head2 = `
        <img class="sloganBulb" src="${rootPath}images/logos/lightbulb.png" alt="Lightbulb Graphic">
            Ideas&nbsp;&nbsp;&nbsp;- -
        </span>
    `;
}

// build the complete header and insert it into app-header <div>
let appHead = head1 + head2;
header.innerHTML = appHead;

// log window paths
console.log(`window.location.hostname : ${window.location.hostname}`);
console.log(`rootPath : ${rootPath}`);
console.log(`window.location.hostname : ${window.location.pathname}`);
