// qrcode-generator
// https://www.npmjs.com/package/qrcode-generator
// ========================================================

// define the variables
let outPut = document.querySelector(".output");
let barcodeOutput = document.querySelector("#placeHolder");

// set options for qr-code generator
const typeNumber = 4;
const errorCorrectionLevel = 'M';


$(document).on("keypress", "input", function(evt) {
   if (evt.which == 13) {
      let inputVal = $(this).val();
      if (inputVal === "") {
         inputVal = "www.bodingles.com";
      }

      // output
      outPut.innerHTML = `<p>Barcode for <b>${inputVal}</b> is:</p>`;
      let qr = qrcode(typeNumber, errorCorrectionLevel);
      qr.addData(inputVal);
      qr.make();
      barcodeOutput.innerHTML = qr.createImgTag(4,4);
   }
});


// reset for new Input
textInput.addEventListener('click', () => {
   textInput.value = "";
   outPut.innerText = "";
   barcodeOutput.innerHTML = "";
   let qr = "";
});
