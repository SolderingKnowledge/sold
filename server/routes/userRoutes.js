import express from "express";
const router = express.Router();
import { authUser, registerUser, getUserProfile } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

//it is not protected route to register user
router.route("/").post(registerUser);

router.post("/login", authUser);

// protected route to protect it, you just put first argument
// Basically it goes with jwt to get authorization
router.route("/profile").get(protect, getUserProfile);



export default router;