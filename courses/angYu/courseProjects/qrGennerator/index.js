// QR Code Generators
// ========================================================
// qrcode-generator
// https://www.npmjs.com/package/qrcode-generator
// --------------------------------------------------------
// qrcode
// https://www.npmjs.com/package/qrcode
// ========================================================



// define the variables
let outPut = document.querySelector(".output");
let barcodeOutput = document.querySelector("#placeHolder");

const typeNumber = 4;
const errorCorrectionLevel = 'L';


$(document).on("keypress", "input", function(evt) {
   if (evt.which == 13) {
      let inputVal = $(this).val();
      if (inputVal === "") {
         inputVal = "www.bodingles.com";
      }

      // output
      outPut.innerHTML = `<p>Barcode for ${inputVal} is:</p>`;
      let qr = qrcode(typeNumber, errorCorrectionLevel);
      qr.addData(inputVal);
      qr.make();
      barcodeOutput.innerHTML = qr.createImgTag();
   }
});


// reset for new Input
textInput.addEventListener('click', () => {
   textInput.value = "";
   outPut.innerText = "";
   barcodeOutput.innerHTML = "";
   let qr = "";
});

$(document).keydown(function(evt) {
   if (evt.which == 8) {
      textInput.value = "";
      outPut.innerText = "";
      barcodeOutput.innerHTML = "";
      let qr = "";
   }
});
