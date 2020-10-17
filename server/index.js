// const express = require("express");
// const app = express();
// const dotenv = require("dotenv");
// const list = require("../client/src/list.json");// it gave an error when i switched to es6 syntax via package.json for crushing till it was waiting
const list = [
    {"id": "1", "name": "Sheep", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRadvdSZiSWvImfnnWPzAuBvvkh_8w14r0VlQ&usqp=CAU", "description": "It is the descriptions of sheeps", "price": "$1.99", "numReviews": 3, "rating": 1, "inStock": 20},
    {"id": "2", "name": "Cow", "img": "https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg", "description": "It is the description of a cow", "price": "$6.99", "numReviews": 4, "rating": 2, "inStock": 3},
    {"id": "3", "name": "Horse", "img": "https://equimanagement.com/.image/t_share/MTU5MjI5NjE0MTk4MTA1MzAy/horse-chestnut-outside-head-and-body-shot-istock-145245304-2400.jpg", "description": "It is the description of a horse", "price": "$5.99", "numReviews": 2, "rating": 3, "inStock": 1},
    {"id": "4", "name": "Chicken", "img": "https://www.peta.org/wp-content/uploads/2019/03/chicken-2789493_1920.jpg", "description": "It is the description of a chicken", "price": "$2.99", "numReviews": 1, "rating": 4, "inStock": 10},
    {"id": "5", "name": "Duck", "img": "https://www.duluthnewstribune.com/incoming/article1715552.ece/alternates/BASE_LANDSCAPE/The%20number%20of%20mallards%20and%20most%20other%20ducks%20across%20North%20America%20are%20down%20this%20year%20from%202017%20but%20remain%20above%20long-term%20averages.%20file%20%20News%20Tribune", "description": "It is the description of a Duck", "price": "$1.99", "numReviews": 4, "rating": 5, "inStock": 2}
]
import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config()//initializing it

// url: localhost:5000/api/list
// method: GET
app.get("/api/list", (req, res)=> {
    res.json(list);
})

// url: localhost:5000/api/list/{id}
// method: GET
app.get("/api/list/:id", (req, res)=> {
    const item = list.find(i => i.id === req.params.id);
    res.json(item);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} environment, on port:${PORT}`));

// app.listen(5000, console.log("Localhost:5000 is running"));