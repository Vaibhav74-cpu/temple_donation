import React, { useState } from "react";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { toast } from "sonner";
import axios from "axios";
import { ADMIN_API_ENDPOINT } from "@/utils/constant";
import useGetAllDonors from "@/hooks/useGetAllDonors";
import { useSelector } from "react-redux";


// const ADMIN_USERNAME = "admin";
// const ADMIN_PASSWORD = "admin";
function AdminPage() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://temple-donation-bu0g.onrender.com/api/v1/admin/login`, {
        username: input.username,
        password: input.password,
      });
      localStorage.setItem("adminToken", res.data.token);

      toast.success(res.data.message);
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
