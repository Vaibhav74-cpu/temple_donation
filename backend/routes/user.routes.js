import express from "express";
import { userData } from "../controllers/user.controller.js";
import singleUpload from "../middleware/multer.js";

const router = express.Router();

router.route("/post").post(singleUpload, userData);


export default router;
