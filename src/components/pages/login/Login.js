import React from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../common/Breadcrumb";
import LoginData from "./LoginData";

const Login = () => {
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
          className="text-2xl font-bold text-white cursor-pointer"
          onClick={handleLogoClick}
        >
          MEGA MARKET
        </span>
      </div>

      <div className="flex flex-grow items-center justify-center">
        <main className="flex-grow rounded-lg shadow-md w-full max-w-md">
          <div>
            <LoginData />
          </div>
        </main>
      </div>

      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Breadcrumb />
        </div>
      </footer>
    </div>
  );
};

export default Login;
