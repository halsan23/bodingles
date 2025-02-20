// let rootPath = '';
// var root = window.location.hostname;
// console.log(`root = ${root}`);

// const getRoot = () => {
//   if (window.location.hostname === 'halsan23.github.io') {
//     return 'halsan23.github.io/bodingles';
//   } else {
//     return '.';
//   }
// }

// rootPath = getRoot();

// console.log(`rootPath = ${rootPath}`);



let appHeader = `
    <nav>
      <span class="headLogo"></span>
      <span class="headTitle">Bo</span>
      <span class="headTitleb">dingles<sub>TM</sub></span>
      <span class="headScroll"><img src="/images/scroll.png" alt=""></span>
      <span class="headSlogan">
        - -&nbsp;&nbsp;&nbsp;Bright
        <a href="/temp/temp.html"><img class="sloganBulb" src="/images/logos/lightbulb.png" alt="Lightbulb Graphic"></a>
         Ideas&nbsp;&nbsp;&nbsp;- -
      </span>
    </nav>
`;

document.getElementById("app-header").innerHTML = appHeader;
