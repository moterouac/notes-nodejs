const express = require('express');
const { errorHandler } = require("./config/middlewares/error-handler-middleware");
const mongoDB = require("./config/database/mongodb");

var app = express();

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }
  
app.set("port", process.env.PORT || 5003);
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});

// Database connect
mongoDB.connect();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.get(`${process.env.API_VERSION_ROUTE}/health`, (req, res) => {
    res.send("User service is running");
  });
app.use(process.env.API_VERSION_ROUTE, require("./config/routes/user-routes"));

// Error handlers
app.use(errorHandler);