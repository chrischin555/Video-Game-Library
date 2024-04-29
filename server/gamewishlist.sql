CREATE DATABASE gamelibrary;

CREATE TABLE Users (
    UserID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Username VARCHAR(255) NOT NULL,
    Pass VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL
    
);

CREATE TABLE Games (
    GameID INT PRIMARY KEY,
    GameTitle VARCHAR(255) NOT NULL,
    Category VARCHAR(255),
    DateReleased DATE,
    Publisher VARCHAR(255)
);

CREATE TABLE Platforms (
    PlatformID INT PRIMARY KEY,
    GameID INT,
    Platform VARCHAR(255) NOT NULL,
    FOREIGN KEY (GameID) REFERENCES Games(GameID)
);

CREATE TABLE WishList (
    WishlistID INT PRIMARY KEY,
    UserID INT,
    GameID INT,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (GameID) REFERENCES Games(GameID)
);

CREATE TABLE Reviews (
    ReviewID INT PRIMARY KEY,
    UserID INT,
    GameID INT,
    Comment TEXT,
    Rating INT
);