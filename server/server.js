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

//SQL query to get user information
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

//SQL query to get reviews
app.get('/games/reviews', (req, res) => {
  console.log("Fetching reviews:");

  const gameId = req.query.gameId;
  console.log("Game ID: " + gameId);

  const query = `SELECT Reviews.ReviewID, Reviews.Comment, Reviews.Rating, Games.GameTitle
  FROM Reviews 
  JOIN Games ON Reviews.GameID = Games.GameID
  WHERE Games.GameID = ?` 
  
  db.query(query, [gameId], (err, results) => {
    if (err) {
      console.error("Database error during fetching reviews:", err);
      return res.status(500).send('Database error during fetching reviews');
    }
    console.log('Reviews retrieved:', results);
    res.send(results);
  });
});

// Endpoint to get user's wishlist
app.get('/user/wishlist', (req, res) => {
  const email = req.query.email;
  console.log("Fetching wishlist for email:", email);

  const query = `SELECT Games.GameID, Games.GameTitle, Games.Category, Games.DateReleased, Publishers.Publisher 
    FROM Games 
    JOIN Games_Publishers ON Games.GameID = Games_Publishers.GameID
    JOIN Publishers ON Publishers.PublisherID = Games_Publishers.PublisherID
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

//SQL query to obtain information about the current game
app.get('/games', (req, res) => {
  const query = `SELECT Games.GameTitle, Games.Category, Games.DateReleased, Platforms.Platform, Publishers.Publisher
    FROM Games
    INNER JOIN Games_Platform ON Games.GameID = Games_Platform.GameID
    INNER JOIN Platforms ON Games_Platform.PlatformID = Platforms.PlatformID
    INNER JOIN Games_Publishers ON Games.GameID = Games_Publishers.GameID
    INNER JOIN Publishers ON Games_Publishers.PublisherID = Publishers.PublisherID`;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Database error during fetching games:", err);
      return res.status(500).send('Database error during fetching games');
    }
    console.log("Games retrieved:", results);
    res.send(results);
  });
});

//SQL query to add a review
app.post("/user/add-review", (req, res) => {
  const userId = req.body.userId;
  const gameId = req.body.gameId;
  const rating = req.body.rating;
  const comment = req.body.comment;

  const sql = "INSERT INTO Reviews (UserID, GameID, Rating, Comment) VALUES (?, ?, ?, ?)";
  const values = [userId, gameId, rating, comment];

  console.log("query: ", sql)
  console.log("values: ", values)

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error adding review:", err);
      return res.status(500).json({ error: "Failed to add review" });
    }
    console.log("Added review:", result);
    return res.json({ success: true });
  });
});

//SQL query to add to wishlist
app.post("/user/add-to-wishlist", (req, res) => {
  const userId = req.body.userId;
  const gameId = req.body.gameId;

  const sql = "INSERT INTO WishList (UserID, GameID) VALUES (?, ?)";
  const values = [userId, gameId];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error adding to wishlist:", err);
      return res.status(500).json({ error: "Failed to add to wishlist" });
    }
    console.log("Added to wishlist:", result);
    return res.json({ success: true });
  });
});

