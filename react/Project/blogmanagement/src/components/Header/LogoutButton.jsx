import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutButton() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      inline-block
      px-4
      py-2
      text-sm
      sm:px-6
      sm:py-2
      sm:text-base
      duration-200
      hover:bg-blue-100
      rounded-full
      w-full
      sm:w-auto
      text-center
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutButton;
