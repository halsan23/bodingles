import express from 'express';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



// GET / POST requests
// ===================================================== //

// display basic page
app.get('/', async (req, res) => {
   try {
      res.render('index.ejs');
   } catch (err) {
      res.render('index.ejs', { error: { err } });
   }
})


// process input for weather display
app.post('/', async (req, res) => {
   let location = await processInput(req.body.location.trim());
      try {
         res.render('index.ejs');
      } catch (err) {
      res.render('index.ejs', { error: { err } });
      }
})


// start server in "listening mode"
app.listen( port, () => console.log(`Server listening on port ${port}`));
