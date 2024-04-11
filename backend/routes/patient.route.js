import express from "express";
import { createUser, getUser, getUsers, deleteUser, updateUser } from "../controllers/patient.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

router.get("/:uid", getUser); 
router.get("/", getUsers);

router.route("/").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }
        
    ]),
     createUser);

router.put("/:uid", updateUser); 
router.delete("/:uid", deleteUser); 

export default router;