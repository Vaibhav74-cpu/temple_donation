import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/constant";

import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

function FormSubmit() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    fullname: "",
    phoneNumber: "",
    email: "",
    amount: "",
    danDate: "",
    file: null,
  });
  const [showQr, setShowQr] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("email", input.email);
    formData.append("amount", input.amount);
    formData.append("danDate", input.danDate);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      setLoading(true);
      const res = await axios.post(`${USER_API_ENDPOINT}/post`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res?.data?.success) {
        toast.success(res.data.message || "Dan Details submitted succesfully");
        navigate("/");
        toast.dismiss();
        // setTimeout(() => {
        //   navigate("/");
        // }, 800);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-4xl  mx-auto mt-20  px-6">
      <div className="flex flex-col lg:flex-row gap-28 items-center lg:items-start">
        <div className="">
          <form
            onSubmit={submitHandler}
            className="border border-gray-300 bg-white shadow-xl rounded-2xl p-6 max-w-md w-full"
          >
            <h1 className="font-serif font-semibold mb-2">
              Enter your Name & Contact
            </h1>
            <div>
              <Input
                type="text"
                placeholder="Enter your name"
                name="fullname"
                value={input.fullname}
                onChange={handleInput}
                className="text-sm text-gray-500 font-serif mt-3"
              />
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Enter your Phone Number"
                name="phoneNumber"
                value={input.phoneNumber}
                onChange={handleInput}
                className="text-sm text-gray-500 font-serif mt-3"
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="Enter email"
                name="email"
                value={input.email}
                onChange={handleInput}
                className="text-sm text-gray-500 font-serif mt-3"
              />
            </div>
            <div>
              <Input
                type="number"
                placeholder="Enter amount"
                name="amount"
                value={input.amount}
                onChange={handleInput}
                className="text-sm text-gray-500 font-serif mt-3"
              />
            </div>
            <div>
              <Input
                type="date"
                name="danDate"
                value={input.danDate}
                onChange={handleInput}
                className="text-sm text-gray-500 font-serif mt-3"
              />
              <Label className="text-sm text-gray-500 font-serif m-2">
                Add your dan date
              </Label>
            </div>

            <div>
              <Button
                type="button"
                onClick={() => setShowQr(!showQr)}
                className="bg-gradient-to-r from-[#FF7A18] to-[#FF4B4B] w-full mt-3"
              >
                Qr Scanner
              </Button>
              {showQr && (
                <div className="border-2 border-dashed border-orange-400 rounded-xl p-4 flex justify-center items-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                    alt="QR Code"
                    className="w-48 h-48 object-contain"
                  />
                </div>
              )}

              <Input
                type="file"
                name="file"
                accept="/*"
                className="cursor-pointer"
                onChange={fileHandler}
              />
              <Label className="text-sm text-gray-500 font-serif ">
                Add your payment screenshot
              </Label>
            </div>

            <div className="mt-3">
              {loading ? (
                <Button className="w-full bg-gradient-to-r from-[#FF7A18] to-[#FF4B4B] mt-2">
                  <Loader2 className="h-2 mr-2 w-full animate-spin" />
                  Please Wait
                </Button>
              ) : (
                <Button className="w-full bg-gradient-to-r from-[#FF7A18] to-[#FF4B4B] mt-2">
                  Submit
                </Button>
              )}
            </div>
          </form>
        </div>
        <div className="hidden lg:block">
          <img
            src="https://cdn.shopify.com/s/files/1/0815/1000/7089/files/Suryadev-CP104_480x480.jpg?v=1704777997"
            alt="kushmanda"
            className="w-[420px] h-[520px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default FormSubmit;
