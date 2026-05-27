import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { toast } from "sonner";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAdminInfo } from "@/redux/userSlice";

function AdminPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { adminInfo } = useSelector((state) => state.user);
  useEffect(() => {
    if (adminInfo) {
      navigate("/admin/login/get");
    }
  }, [adminInfo]);
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/admin/login`,
        {
          username: input.username,
          password: input.password,
        },
        { withCredentials: true },
      );

      dispatch(setAdminInfo(res.data));
      toast.success(res.data.message || "Login succesfulluy");
      navigate("/admin/login/get");
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };
  return (
    <div>
      <form
        className="max-w-md mx-auto mt-28 border border-gray-300 bg-white rounded-md shadow-lg p-4"
        onSubmit={handleLogin}
      >
        <div>
          <Label className="font-sans  font-semibold text-md">
            Enter Admin Username
          </Label>
          <Input
            type="text"
            name="username"
            value={input.username}
            className="text-sm text-gray-500 font-serif mt-2"
            placeholder="Enter your username"
            onChange={handleInput}
          />
        </div>
        <div className="mt-3">
          <Label className="font-sans  font-semibold text-md">
            Enter Admin Password
          </Label>
          <Input
            type="text"
            name="password"
            value={input.password}
            className="text-sm text-gray-500 font-serif mt-2"
            placeholder="Enter your username"
            onChange={handleInput}
          />
        </div>
        <div>
          <Button
            className="w-full bg-gradient-to-r from-[#FF7A18] to-[#FF4B4B] mt-4"
            type="submit"
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AdminPage;
