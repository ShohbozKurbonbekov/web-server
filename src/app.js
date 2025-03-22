// Calling packages
const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
const forecast = require("./utils/forecast.js");
const geoCode = require("./utils/geocode.js");

//  Define paths
const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// exposing public folder  for the client
app.use(express.static(publicPath)); // Middleware design.

//Set up handlebars engine and view location
app.set("views", viewsPath);
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath); // (This method tells Handlebars where your partial templates are located so it can use them in your views.)

// Routers
app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather",
    myName: "Daniel",
    errorMsg: "Page not found",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    description: " if You need any help, please throw any queation you want",
    myName: "Daniel",
    errorMsg: "Help article not found",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    myName: "Daniel",
    status: "Student",
  });
});

app.get("/weather", (req, res) => {
  const address = req.query.address;
  if (!address) {
    return res.send("Please provide an address");
  }

  geoCode(address, (error, { lat, long, location } = {}) => {
    if (error) {
      res.send({ error });
    } else {
      forecast(lat, long, (forecastError, forecastData) => {
        if (forecastError) {
          res.send({
            error: forecastError,
          });
        } else {
          res.json({
            forecast: forecastData,
            location,
            address,
          });
        }
      });
    }
  });
});
app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }

  console.log(req.query.search);
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    myName: "Daniel",
    errorMessage: "Help not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "4004",
    myName: "Daniel",
    errorMessage: "Page not found",
  });
});

// Building a server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running on: localhost:${PORT}`);
});

// app.com
// app.com/help
// app.com/about
