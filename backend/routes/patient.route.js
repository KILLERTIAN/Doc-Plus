import express from "express";
import { createUser, getUser, getUsers, deleteUser, updateUser } from "../controllers/patient.controller.js";
import { upload } from "../middlewares/multer.middleware.js"; // Assuming you have multer middleware for file upload

const router = express.Router();

// Use Firebase UID instead of patient ID in routes
router.get("/:uid", getUser); // Fetch user by UID
router.get("/", getUsers); // Fetch all users

// Create a new user with avatar upload
router.route("/").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }
        
    ]),
     createUser);

router.put("/:uid", updateUser); // Update user by UID
router.delete("/:uid", deleteUser); // Delete user by UID

export default router;
