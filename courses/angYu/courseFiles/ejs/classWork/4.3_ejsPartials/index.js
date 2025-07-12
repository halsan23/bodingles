import express from "express";
const app = express();
const port = process.env.PORT || 3000;

// Link static files
app.use(express.static('public'));


// Render the pages
app.get('/', (req, res) => {
   res.render('index.ejs')
})

app.get('/about', (req, res) => {
   res.render('about.ejs')
})

app.get('/contact', (req, res) => {
   res.render('contact.ejs')
})


// enable server "listen" mode
app.listen( port, console.log(`Server is running on http://localhost: ${port}`) );
