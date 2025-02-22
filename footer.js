// Footer Construction
// ===========================================================================

// assign variables
const footer = document.querySelector("#app-footer");

// build Footer
const foot = () => {
  let foot = `
    <div>Website created by badDoggy</div>
    <div>|</div>
    <div>2024</div>
    <div>|</div>
    <div>&copy; All Rights Reserved</div>
`;
}

// Get footer data & insert into #app-footer
const appFoot = foot();
footer.innerHTML = appfoot;