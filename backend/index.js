import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import path from "path";
dotenv.config();

const app = express();
const _dirname = path.resolve(); // backend folder path

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
const corsOptions = {
  origin: "https://temple-donation-bu0g.onrender.com",
  credentials: true,
};
app.use(cors(corsOptions));

// app.use(cors())

app.use("/api/v1/user", userRoute);
app.use("/api/v1/admin", adminRoutes);

app.use(express.static(path.join(_dirname, "/frontend/dist")));
//for unkonwn route hits shows frontend home screen
app.get(/.*/, (_, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  connectDB();
  console.log(`server is running on http://localhost:${PORT}`);
});
