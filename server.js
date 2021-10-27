// import modules

import express from 'express'
import * as recipeDb from "./data/recipe-db.js"

console.log(recipeDb)

// Create Express application

const app = express()

// Configure the app (app.set)

app.set("view engine", "ejs")

// Mount Middleware (app.use)



// Mount routes

// localhost:3000/
app.get("/", function(req, res) {
  // redirects to localhost:3000/home from localhost:3000
  res.redirect("/home")
})

// localhost:3000/home
app.get("/home", function(req, res) {
  res.send("<h1>Recipes</h1>")
})
app.get("/recipes", function(req, res){
  recipeDb.find({}, function (error, recipes) {
    res.render("recipes/index", {
      error: error,
      recipes: recipes
    })
  })
})

// Tell our app to listen on port 3000

app.listen(3000, function() {
})