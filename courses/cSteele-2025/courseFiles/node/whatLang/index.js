// import required packages
const franc = require('franc');
const langs = require('langs');
const color = require('colors');


// run input stream from console
const input = process.argv[2];
// get the language code based on the console input
const langCode = franc(input);


// error check if can't identify language
if (langCode === 'und') {
   console.log('Undefined Language, please try more letters;'.red)
} else {
   // convert the language code into the language name
   const language = langs.where("3", langCode);

   // output the language name
   console.log(`My best guess is: ${language.name}`.green);
}
