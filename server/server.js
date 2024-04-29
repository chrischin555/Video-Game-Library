import mysql from 'mysql2/promise';
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");
const app = express();

path.resolve()
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

const port = 8081
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gamelibrary"
});

app.listen(port, () => {
  console.log("Listening");
  console.log("Database connected");
})



//SQL query for adding to database
app.post("/signup", (req, res) => {
  const sql = "INSERT INTO users (`Username`, `Pass`, `Email`) VALUES (?, ?, ?)";
  const values = [
    req.body.username,
    req.body.password,
    req.body.email
  ];
  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json({ message: "Something unexpected has occured" + err });
    }
    return res.json({ success: "User added successfully" + data });
  })
})

//SQL query for logging in  
app.post('/login', (req, res) => {
  const sql = "SELECT * FROM users WHERE `Email` = ? AND `Pass` = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json({ message: "Something unexpected has occured" + err });
    }

    if (data.length > 0) {
      return res.json({ success: "Login successful!" + data });
    } else {
      return res.json("Incorrect username/password.");
    }
  })
})


/*app.post("/add_user", (req, res) => {
  const sql =
    "INSERT INTO student_details (`name`,`email`,`age`,`gender`) VALUES (?, ?, ?, ?)";
  const values = [req.body.name, req.body.email, req.body.age, req.body.gender];
  db.query(sql, values, (err, result) => {
    if (err)
      return res.json({ message: "Something unexpected has occured" + err });
    return res.json({ success: "Student added successfully" });
  });
});

app.get("/students", (req, res) => {
  const sql = "SELECT * FROM student_details";
  db.query(sql, (err, result) => {
    if (err) res.json({ message: "Server error" });
    return res.json(result);
  });
});

app.get("/get_student/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM student_details WHERE `id`= ?";
  db.query(sql, [id], (err, result) => {
    if (err) res.json({ message: "Server error" });
    return res.json(result);
  });
});

app.post("/edit_user/:id", (req, res) => {
  const id = req.params.id;
  const sql =
    "UPDATE student_details SET `name`=?, `email`=?, `age`=?, `gender`=? WHERE id=?";
  const values = [
    req.body.name,
    req.body.email,
    req.body.age,
    req.body.gender,
    id,
  ];
  db.query(sql, values, (err, result) => {
    if (err)
      return res.json({ message: "Something unexpected has occured" + err });
    return res.json({ success: "Student updated successfully" });
  });
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM student_details WHERE id=?";
  const values = [id];
  db.query(sql, values, (err, result) => {
    if (err)
      return res.json({ message: "Something unexpected has occured" + err });
    return res.json({ success: "Student updated successfully" });
  });
});*/

/*app.listen(port, () => {
  console.log(`listening on port ${port} `);
});*/