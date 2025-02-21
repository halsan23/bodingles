let rootPath = '';

const getRoot = () => {
  if (window.location.hostname === 'halsan23.github.io') {
    return 'halsan23.github.io/bodingles/';
  } else {
    return '/';
  }
}

rootPath = getRoot();

let appHeader = `
    <nav>
      <span class="headLogo"></span>
      <span class="headTitle">Bo</span>
      <span class="headTitleb">dingles<sub>TM</sub></span>
      <span class="headScroll"><img src="${rootPath}images/scroll.png" alt=""></span>
      <span class="headSlogan">
        - -&nbsp;&nbsp;&nbsp;Bright
        <a href="${rootPath}temp/temp.html"><img class="sloganBulb" src="${rootPath}images/logos/lightbulb.png" alt="Lightbulb Graphic"></a>
         Ideas&nbsp;&nbsp;&nbsp;- -
      </span>
    </nav>
`;

document.getElementById("app-header").innerHTML = appHeader;
