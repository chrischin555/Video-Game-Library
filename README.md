# Video Game Library

This is our Video Game Library! This application is built using React and Node.js. Before running this application... 

# Requirements
MySQL needs to be installed on the operating machine. In addition, run npm install in your terminal to 
install all the necessary dependencies and packages to run this React application.
To get the database running, create a database named 'gamelibrary'. 
Afterward, open MySQL Workbench or MySQL command line and run SOURCE (path to gamewishlist.sql). 

Then, create a new workspace with all imported files then open a terminal in the project folder and perform the following actions:

# Back-End
1) Make sure your sql server is up and running on your side. 
2) CD to the "server" directory within the project(to switch to the directory where the server is)
3) Change the root, localhost, and password to what the root, localhost and password is in server.js for the current user.
4) ![image](https://github.com/chrischin555/Video-Game-Library/assets/54284709/aa8fe5b1-11e7-482c-b03f-e21875f5d367)
Make sure that all the the sql settings and password are to your sql information within your machine.
5) Run 'npm i mysql2' to install mysql2 (mysql2 is the more popular package to install instead of MySQL)
6) Run 'npm install' to install the necessary dependencies for managing the back end. 
7) Run 'npm start' in your terminal to start the backend server. When your terminal says that you are listening at the port 8081, the backend server should be running.

# Front-End 
1) CD frontend_app (to switch to the directory where the front-end application is)
2) Change the code for the video game pages in the Components folder to match the current userID after logging in. This can be checked through the Users table
(we could have made it so that it grabs the user's ID on log in, but we did not implement that).
3) Run npm install to install the dependencies needed for running the application.
4) Run 'npm start' to start the frontend_application.  
