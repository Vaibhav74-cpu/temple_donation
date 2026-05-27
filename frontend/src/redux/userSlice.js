import { createSlice } from "@reduxjs/toolkit";

// Safely get adminInfo from localStorage
const adminInfoFromStorage = localStorage.getItem("adminInfo")
  && localStorage.getItem("adminInfo") !== "undefined"
    ? JSON.parse(localStorage.getItem("adminInfo"))
    : null;

const userSlice = createSlice({
  name: "user",

  initialState: {
    adminInfo: adminInfoFromStorage,
  },

  reducers: {
    setAdminInfo: (state, action) => {
      state.adminInfo = action.payload;

      localStorage.setItem(
        "adminInfo",
        JSON.stringify(action.payload)
      );
    },

    logout: (state) => {
      state.adminInfo = null;

      // Remove only adminInfo
      localStorage.removeItem("adminInfo");
    },
  },
});

export const { setAdminInfo, logout } = userSlice.actions;

export default userSlice.reducer;