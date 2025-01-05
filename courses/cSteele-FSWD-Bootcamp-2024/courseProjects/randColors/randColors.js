const button = document.querySelector('button');
const head4 = document.querySelector('h4');
const head6 = document.querySelector('h6');


button.addEventListener('click', function () {
    const [foreColor, backColor] = makeRandColor();
    head4.style.color = foreColor;
    head6.style.color = foreColor;
    document.body.style.backgroundColor = backColor;
    head6.innerText = `New Background Color is: ${backColor}`;
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    let fc = '#000000';
    const bc = `rgb(${r}, ${g}, ${b})`;

    const numbs = r + g + b;

    if (numbs < 275) {
        fc = '#ffffff';
    }

    console.log(`${fc} / ${bc}`);

    return [fc, bc];
}
