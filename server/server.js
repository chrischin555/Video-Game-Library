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
  password: "class437$",
  database: "gamelibrary"
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  // Instead of "Database connected", actually check the connection:
  db.connect(err => {
    if (err) {
      console.error('Error connecting to the database:', err);
    } else {
      console.log('Database successfully connected');
    }
  });
});

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
});

app.get('/user/details', (req, res) => {
  const email = req.query.email;
  console.log("Fetching user details for email:", email);

  const query = 'SELECT Username, Email FROM Users WHERE Email = ?';
  db.query(query, [email], (err, results) => {
    // Improved error handling and response
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: 'An error occurred while fetching user details' });
    }
    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });
});


// Endpoint to get user's wishlist
app.get('/user/wishlist', (req, res) => {
  const email = req.query.email;
  console.log("Fetching wishlist for email:", email);

  const query = `SELECT Games.GameID, Games.GameTitle, Games.Category, Games.DateReleased, Games.Publisher 
                 FROM Games 
                 JOIN WishList ON Games.GameID = WishList.GameID 
                 JOIN Users ON WishList.UserID = Users.UserID 
                 WHERE Users.Email = ?`;
  db.query(query, [email], (err, results) => {
      if (err) {
          console.error("Database error during fetching wishlist:", err);
          return res.status(500).send('Database error during fetching wishlist');
      }
      console.log("Wishlist items retrieved:", results);
      res.send(results);
  });
});


// Endpoint to get user's reviews
app.get('/user/reviews', (req, res) => {
  const email = req.query.email;
  console.log("Fetching reviews for email:", email);

  const query = `SELECT Reviews.ReviewID, Reviews.Comment, Reviews.Rating, Games.GameTitle 
                 FROM Reviews 
                 JOIN Games ON Reviews.GameID = Games.GameID 
                 JOIN Users ON Reviews.UserID = Users.UserID 
                 WHERE Users.Email = ?`;
  db.query(query, [email], (err, results) => {
      if (err) {
          console.error("Database error during fetching reviews:", err);
          return res.status(500).send('Database error during fetching reviews');
      }
      console.log("Reviews retrieved:", results);
      res.send(results);
  });
});



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