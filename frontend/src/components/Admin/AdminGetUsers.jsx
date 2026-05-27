import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useGetAllDonors from "@/hooks/useGetAllDonors";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { logout } from "@/redux/userSlice";
import {  Trash2 } from "lucide-react";

function AdminGetUsers() {
  // ✅ fetch donors
  useGetAllDonors();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { adminInfo } = useSelector((state) => state.user);
  if (!adminInfo) {
    navigate("/");
  }
  const donors = useSelector((store) => store.admin.donors) || [];

  const handleLogout = async (req, res) => {
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/admin/logout`,
        {},
        { withCredentials: true },
      );
      dispatch(logout());
      toast.success(res?.data?.message || "Logout Successfully");
      navigate("/");
    } catch (error) {
      toast.error(error?.data?.message || "Error while logout");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure want to delete this dan data")) {
      try {
        const res = await axios.delete(
          `http://localhost:8000/api/v1/admin/delete/${id}`,
          {},
          { withCredentials: true },
        );
        navigate("/");
        toast.success(
          res?.message || res?.data?.message || "Dan data deleted successfully",
        );
      } catch (error) {
        toast.error(error?.data?.message || error?.message);
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto my-12">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">All Donors</h2>
        <button
          className="p-1 m-1 bg-slate-200 hover:bg-slate-500 rounded-xl text-center justify-center p"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <Table>
        <TableCaption>
          A list of recent <span className="text-gray-500">Donors</span>.
        </TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Donor Name</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Dan Date</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Dan Amount</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {donors.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-gray-500">
                No donors found
              </TableCell>
            </TableRow>
          ) : (
            donors.map((donor) => (
              <TableRow
                key={donor._id}
                className={donor.amount > 2500 ? "bg-blue-400" : ""}
              >
                <TableCell className="font-medium">{donor.fullname}</TableCell>
                <TableCell>{donor.phoneNumber}</TableCell>
                <TableCell>
                  {new Date(donor.danDate).toLocaleDateString()}
                </TableCell>
                <TableCell>{donor.email}</TableCell>
                <TableCell className=" font-semibold">{donor.amount}</TableCell>
                <TableCell>
                  {" "}
                  <button
                    className=" hover:text-red-700 transition"
                    onClick={() => handleDelete(donor._id)}
                  >
                    <Trash2 size={18} />
                  </button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default AdminGetUsers;
