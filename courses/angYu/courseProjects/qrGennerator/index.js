// qrcode-generator
// https://www.npmjs.com/package/qrcode-generator
// ========================================================

// define the variables
let outPut = document.querySelector(".output");
let qrCodeOutput = document.querySelector("#placeHolder");

// set options for qr-code generator
const typeNumber = 4;
const errorCorrectionLevel = 'M';

// add keypress event for ENTER key
$(document).on("keypress", "input", function(evt) {
   if (evt.which == 13) {
      let inputVal = $(this).val();
      if ($(this).val() === "") {
         inputVal = "www.bodingles.com";
      }

      // process the output
      outPut.innerHTML = `<p>QR Code for <b>${inputVal}</b> is:</p>`;
      let qr = qrcode(typeNumber, errorCorrectionLevel);
      qr.addData(inputVal);
      qr.make();
      qrCodeOutput.innerHTML = qr.createImgTag(4,4);
   }
});


// reset for new Input
textInput.addEventListener('click', () => {
   textInput.value = "";
   outPut.innerText = "";
   qrCodeOutput.innerHTML = "";
   qr = "";
});
