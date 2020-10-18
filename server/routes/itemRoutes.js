import express from 'express'
import asyncHandler from "express-async-handler";
const router = express.Router()
import Item from "../models/itemModel.js";



// description: Fetch all things for sale
// route:       GET /api/items
// access:      Public
router.get("/", asyncHandler(async (req, res) =>  {
    const items = await Item.find({});
    // throw new Error("Error intentions");//check the <Alert /> component to handle error
    res.json(items);
}))

// description: Fetch a single item by id
// route:       GET /api/items/{id}
// access:      Public
router.get("/:id", asyncHandler(async (req, res) =>  {
    const item = await Item.findById(req.params.id);
    if(item){
        res.json(item);
    } else {
        // res.status(404).json({message: "Item not found!"});
        res.status(404);
        throw new Error("Item not found");
    }
}))

export default router;