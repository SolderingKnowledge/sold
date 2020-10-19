import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
    let token
    // console.log(req.headers.authorization);
    if( req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        console.log("Token found")
        try {
            token = req.headers.authorization.split(" ")[1]; //get just the token without Bearer
            const decoded = jwt.verify(token, process.env.JWT_SECRET); // compares
            // console.log("decoded", decoded);
            req.user = await User.findById(decoded.id).select("-password");// sending all but password
            next();
        } catch (error) {
            console.error("error in catch", error);
            res.status(401);
            throw new Error("Not authorized, token failed!");
        }
    }
    if(!token){
        res.status(401);
        throw new Error("Not authorized, no token");
    }
});

export { protect };