import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  return (
    <div className="flex items-center justify-center min-h-[40vh]">
      {!user || !user.userName.trim() ? (
        <div className="text-xl font-semibold text-gray-700">Please login</div>
      ) : (
        <div className="text-2xl font-bold text-green-600">
          Welcome, {user.userName}!
        </div>
      )}
    </div>
  );
}

export default Profile;
