import express from 'express';
import ejs from 'ejs';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 3000;
const url = 'https://api.tomorrow.io/v4/weather/forecast?location=new%20york';
const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'accept-encoding': 'deflate, gzip, br'}
};

app.use(express.static('public'));


app.get("/", async (req, res) => {
   res.render('index.ejs');
});


// app.get("/", async (req, res) => {
//    try {
//       const result = await axios.get(url, options);
//       console.log(result.data);
//       res.render('index.ejs', { content: result.data });
//    } catch (err) {
//       console.error(err)
//    }
// });


app.listen( port, () => console.log(`Server listening on port ${port}`));