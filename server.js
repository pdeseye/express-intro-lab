// import modules

import express from 'express'
import * as receipeDb from "./data/receipe-db.js"

console.log(receipeDb)

// Create Express application

const app = express()

// Configure the app (app.set)

app.set("view engine", "ejs")

// Mount Middleware (app.use)



// Mount routes

// localhost:3000/
app.get("/receipes", function(req, res){
  receipeDb.find({}, function (error, receipes) {
    res.render("receipes/index", {
      error: error,
      receipes:receipes
    })
  })
})

// Tell our app to listen on port 3000

app.listen(3000, function() {
})