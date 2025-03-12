// Calling packages
const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");

//  Define paths to Express config
const publicDirectory = path.join(__dirname, "../public");
const viewsDirectory = path.join(__dirname, "../templates/views");
const partialsDirectory = path.join(__dirname, "../templates/partials");

// exposing public folder  for the client
app.use(express.static(publicDirectory));

//Set up handlebars engine and view location
app.set("view engine", "hbs");
app.set("views", viewsDirectory);
hbs.registerPartials(partialsDirectory);

// Routes
app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather",
    myName: "Daniel",
    status: "Student",
    errorMsg: "Page not found",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    description: " if You need any help, please throw any queation you want",
    myName: "Daniel",
    status: "Student",
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
  res.send({
    forecast: "it is gonna rain today",
    location: "it is gonna show a locaion",
  });
});
app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    myName: "Daniel",
    errorMessage: "Help article not found",
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
