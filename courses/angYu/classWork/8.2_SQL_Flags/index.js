import express from "express";
import pg from 'pg';

const app = express();
const port = process.env.PORT || 3000;

let quiz = '';
let totalCorrect = 0;
let currentQuestion = {};

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Database
// ===================================================== //
const db = new pg.Client({
   user: 'postgres',
   password: 'password',
   host: 'localhost',
   port: 5432,
   database: 'world'
});

db.connect();

db.query('SELECT * FROM flags', (err, res) => {
   if (err) {
      console.error('Database Query Error', err.stack);
   } else {
      quiz = res.rows;
   }
   db.end();
});
// ===================================================== //

// GET home page
app.get("/", async (req, res) => {
   totalCorrect = 0;
   await nextQuestion();
   res.render("index.ejs", { question: currentQuestion });
});


// POST a new post
app.post("/submit", (req, res) => {
   let answer = req.body.answer.trim();
   let isCorrect = false;
   if (currentQuestion.name.toLowerCase() === answer.toLowerCase()) {
      totalCorrect++;
      isCorrect = true;
   }

   nextQuestion();
   res.render("index.ejs", {
      question: currentQuestion,
      wasCorrect: isCorrect,
      totalScore: totalCorrect
   });
});


async function nextQuestion() {
   const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
   currentQuestion = randomCountry;
}


app.listen(port, () => console.log(`Server Listening on port: ${port}`));
