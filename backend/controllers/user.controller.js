
import cloudinary from '../utils/cloudinary.js'
import getDataUri from '../utils/dataUri.js'
import { User } from "../model/user.model.js";

export const userData = async (req, res) => {
  try {
    const { fullname, phoneNumber, email, amount, danDate } = req.body;
    const file = req.file;
    if (!fullname || !phoneNumber || !email || !amount || !danDate) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const donor = await User.findOne({ email });
    const name = await User.findOne({ fullname });
    if (donor || name) {
      return res.status(400).json({
        success: false,
        message: "donor is already exist",
      });
    }
    if (!file) {
      return res.status(400).json({
        success: false,
        message: "File is missing",
      });
    }
    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

    const donors = await User.create({
      fullname,
      phoneNumber,
      email,
      amount,
      danDate,
      paymentPhoto: cloudResponse.secure_url,
    });
    return res.status(200).json({
      success: true,
      donors,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};
