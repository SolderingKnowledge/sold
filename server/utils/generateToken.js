import jwt from "jsonwebtoken";

const generateToken = id => {
    return jwt.sign({id}, process.env.JWT_SECRET, { expiresIn: "30d"});// generating token from .env file and making it to expire in 30days
}

export default generateToken;