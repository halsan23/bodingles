// 1. Use the inquirer npm package to get user input.
// 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
// 3. Create a txt file to save the user input using the native fs node module.
// import inquirer from "inquirer";
// import qr from "qr-image";
// import fs from "fs";


// // input
// inquirer
//    .prompt([{
//       message: "Type in your URL: ",
//       name: "URL",
//       }])
//    .then((answers) => {
//       const url = answers.URL;
//       var qr_svg = qr.image(url);
//       qr_svg.pipe(fs.createWriteStream("./images/qr_image.png"));
//    })
//    .catch((error) => {
//       if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//       } else {
//       // Something else went wrong
//       }
//    });


Use npm qrcode-generator

To use the qrcode-generator npm package, you can follow these steps. First, you need to install the package using npm. You can do this by running the command npm install qrcode-generator in your project directory.

Once installed, you can create a QR code by initializing a QRCode object with the desired type number and error correction level. The type number can range from 1 to 40, or you can set it to 0 for auto detection. The error correction level can be 'L', 'M', 'Q', or 'H'.

After creating the QRCode object, you can add data to encode using the addData method. This method takes the data string and an optional mode parameter, which can be 'Numeric', 'Alphanumeric', 'Byte' (default), or 'Kanji'.

Once the data is added, you can generate the QR code. The package provides methods to create an ASCII representation of the QR code using createASCII and an SVG representation using createSvgTag. The createASCII method allows you to specify the cell size and margin, while createSvgTag offers additional options such as scalability.

Additionally, the package includes a method qrcode.stringToBytes(s) which converts a string to an array of bytes.

This can be useful if you need to work with the raw data of the QR code.

For more detailed information and examples, you can refer to the documentation on the npm page for qrcode-generator.





// define the variables
// let outPut = document.querySelector(".output");

// $(document).on("keypress", "input", function(evt) {
//    if (evt.which == 13) {
//       var inputVal = $(this).val();
//       if (inputVal === "") {
//          inputVal = "www.bodingles.com";
//       }

//       var qr_svg = qr.image(inputVal);
//       qr_svg.pipe(fs.createWriteStream("qr_image.png"));

//       outPut.innerHTML = `
//          <p>Barcode for ${inputVal} is:</p>
//          <p><img src="./images/qr_image.png"></p>
//       `;
//    }
// });

// textInput.addEventListener('click', () => {
//    textInput.value = "";
//    outPut.innerText = "";
// });
