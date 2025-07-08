import express from 'express';
import { dirname } from "path";
import { fileURLToPath } from "url";
import { body, validationResult } from 'express-validator';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));



app.get( '/', ( req, res ) => res.sendFile( __dirname + "/index.html" ) );


app.post('/', [
  body('username').trim().isLength({ min: 1 }).withMessage('Username is required'),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send(errors.array());
  }
  const page = `
   <form action="/" method="POST">
      <input type="text" name="username" placeholder="username">
      <button type="submit">Submit</button>
   </form><br><br>
  `;
  const username = req.body.username;
  // Process the data here
  res.send(`${page}Hello ${username}!`);
});


app.listen( port, console.log(`Server is running on http://locakhost: ${port}`) );