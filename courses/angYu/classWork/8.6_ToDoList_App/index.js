import express from "express";
import pg from 'pg';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
   user: "postgres",
   password: "password",
   host: "localhost",
   database: "toDoList",
   port: 5432,
});
db.connect();
let todos = [];


// ====================================================================== //
app.get("/", async (req, res) => {
   try {
      const result = await db.query("SELECT * FROM todos ORDER BY id ASC");
      todos = result.rows;
      res.render("index.ejs", {
         listTitle: "Honey Do's",
         listItems: todos,
      });
   } catch (err) {
      console.log(err);
   }
});


app.post("/add", async (req, res) => {
   const todo = req.body.newItem;
   try {
      await db.query("insert into todos (todo) values ($1)", [todo]);
      res.redirect("/");
   } catch (err) {
      console.log(err);
   }
});


app.post("/edit", async (req, res) => {
   const id = req.body.updatedItemId;
   const todo = req.body.updatedItemTitle;
   try {
      await db.query("update todos set todo = ($1) where id = $2", [todo, id]);
      res.redirect("/");
   } catch (err) {
      console.log(err);
   }
});


app.post("/delete", async (req, res) => {
   const id = req.body.deleteItemId;
   try {
      await db.query("delete from todos where id = $1", [id]);
      res.redirect("/");
   } catch (err) {
      console.log(err);
   }
});



app.listen(port, () => console.log(`Server running on port ${port}`));
