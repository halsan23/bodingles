import express from "express";
const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
   const d = new Date();
   let day = d.getDay();

   let dayType = 'a weekday';
   let msg = ('. Shouldn\'t your ass be at work :/');

   if (day === 0 || day === 6) {
      dayType = 'the weekend';
      msg = ('. Lets Partay!!');
   }

  res.render('index.ejs', { dayType: dayType, advice: msg });
});


// enable server "listen" mode
app.listen( port, console.log(`Server is running on http://locakhost: ${port}`) );