import express from "express";
import { adminLogin, getAllDonors } from "../controllers/admin.controller.js";
import isAuthenticate from "../middleware/isAuthenticate.js";
import { adminLogout } from "../controllers/admin.controller.js";
import singleUpload from "../middleware/multer.js";

const router = express.Router();

router.post("/login", adminLogin);
router.post("/logout", singleUpload, adminLogout);
router.get("/donors", isAuthenticate, getAllDonors);

export default router;
