import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../model/user.model.js";
dotenv.config();
// import { JWT_SECRET_KEY } from "../utils/constant.js";

const isAuthenticate = async (req, res, next) => {
  try {
    let token;
    token = req.cookies.jwt;
    console.log("token", token);

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized user, no token",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // const user = await User.findById(decoded.userId).select("-password");
    if (decoded.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Admin access only",
      });
    }

    console.log("decoded", decoded);

    // Attach admin data
    req.admin = decoded;

    next();
  } catch (error) {
    console.log("AUTH ERROR:", error.message);

    return res.status(401).json({
      success: false,
      message: "Unauthorized user, token failed",
      error: error.message,
    });
  }
};

export default isAuthenticate;
