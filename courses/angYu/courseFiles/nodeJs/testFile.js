// import node fs (file system)
const fs = require("fs");

// write to a new file
// fs.writeFile("message.txt", "Hello from badDoggy :)", (err) => {
//   if (err) {
//     console.error('Error writing to file:', err);
//     return;
//   }
//   console.log('File written successfully!');
// });


// read from an existing file
fs.readFile('message.txt', "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});