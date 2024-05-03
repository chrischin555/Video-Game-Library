CREATE TABLE Users (
  UserID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Username VARCHAR(255) NOT NULL,
  Pass VARCHAR(255) NOT NULL,
  Email VARCHAR(255) NOT NULL,
  UNIQUE KEY (Username),
  UNIQUE KEY (Email)
);

CREATE TABLE Games (
  GameID INT AUTO_INCREMENT PRIMARY KEY,
  GameTitle VARCHAR(255) NOT NULL,
  Category VARCHAR(255) DEFAULT NULL,
  DateReleased date DEFAULT NULL
);

CREATE TABLE Platforms (
  PlatformID INT AUTO_INCREMENT PRIMARY KEY,
  Platform VARCHAR(255) NOT NULL
);

CREATE TABLE Publishers (
  PublisherID INT AUTO_INCREMENT PRIMARY KEY,
  Publisher VARCHAR(255) NOT NULL
);

CREATE TABLE WishList (
    WishlistID INT PRIMARY KEY,
    UserID INT DEFAULT NULL,
    GameID INT DEFAULT NULL,
    UNIQUE KEY(WishListID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (GameID) REFERENCES Games(GameID)
);

CREATE TABLE Reviews (
    ReviewID INT PRIMARY KEY,
    UserID INT NOT NULL,
    GameID INT NOT NULL,
    Comment TEXT,
    Rating INT NOT NULL, 
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (GameID) REFERENCES Games(GameID)
);

CREATE TABLE Games_Platform (
  GamesPlatform INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  GameID INT DEFAULT NULL,
  PlatformID INT DEFAULT NULL,
  FOREIGN KEY (GameID) REFERENCES Games(GameID),
  FOREIGN KEY (PlatformID) REFERENCES Platforms(PlatformID)
);

CREATE TABLE Games_Publishers (
  GameID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  PublisherID INT DEFAULT NULL,
  FOREIGN KEY (GameID) REFERENCES Games(GameID),
  FOREIGN KEY (PublisherID) REFERENCES Publishers(PublisherID)
);