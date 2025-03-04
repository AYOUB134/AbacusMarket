import React from "react";
import { useNavigate } from "react-router-dom";
import SignupData from "./SignupData";

const Signup = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div
      className="min-h-screen flex flex-col "
      style={{ backgroundColor: "" }}
    >
      {/* Header with Logo */}
      <div className="text-center py-4">
        <span
          className="text-2xl font-bold  cursor-pointer"
          onClick={handleLogoClick}
        >
          MEGA MARKET
        </span>
      </div>

      <div className="flex flex-grow items-center justify-center">
        <main className="flex-grow rounded-lg shadow-md w-full max-w-md">
          <div>
            <SignupData />
          </div>
        </main>
      </div>

    </div>
  );
};

export default Signup;
