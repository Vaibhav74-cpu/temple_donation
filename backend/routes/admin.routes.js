import express from "express";
import { adminLogin, getAllDonors } from "../controllers/admin.controller.js";
import isAuthenticate from "../middleware/isAuthenticate.js";
import { adminLogout } from "../controllers/admin.controller.js";
import singleUpload from "../middleware/multer.js";
import { deleteUserData } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/login", adminLogin);
router.post("/logout", singleUpload, isAuthenticate, adminLogout);
router.get("/donors", isAuthenticate, getAllDonors);
router.route("/delete/:id").delete(deleteUserData);

export default router;
