import jwt from "jsonwebtoken";
import { User } from "../model/user.model.js";
import {
  ADMIN_PASSWORD,
  ADMIN_USERNAME,
  JWT_SECRET_KEY,
} from "../utils/constant.js";

export const adminLogin = (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "username and password are required",
      });
    }

    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      return res.status(400).json({
        success: false,
        message: "invalid admin credentials",
      });
    }
    const token = jwt.sign({ role: "admin" }, JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    return res.status(200).json({
      success: true,
      message: "admin login successfully",
      token,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};


export const getAllDonors = async (req, res) => {
  try {
    const donors = await User.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: donors.length,
      donors,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to fetch donors",
    });
  }
};
