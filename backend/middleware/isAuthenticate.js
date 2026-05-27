import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../model/user.model.js";
dotenv.config();
// import { JWT_SECRET_KEY } from "../utils/constant.js";

const isAuthenticate = async (req, res, next) => {
  try {
    let token;
    token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized user, no token",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    // Attach user to request
    req.user = user;

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
