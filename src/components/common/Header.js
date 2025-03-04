import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import logo from '../imgs/updatedlogo.png';

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")); // Get user data
  // console.log("user is ",user.data.username)

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data
    navigate("/login"); // Redirect to login
  };

  return (
    <header className="sticky text-white bg-white">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex-shrink-0 mb-4 sm:mb-0">
          <Link to="/">
            <img src={logo} alt="Mega Market" className="w-24" />
          </Link>
        </div>
        <div className=" bg-[#4aa0ba] flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto rounded p-2">
          {user ? (
            <div className="flex items-center w-full sm:w-auto">
              <FaUserCircle className="w-10 h-10 text-gray-300 mr-2 flex-shrink-0" />
              <div className="text-sm">
                <p>
                  Logged in as <span className="font-semibold">{user.data.username}</span>
                </p>
                <p className="flex flex-wrap gap-2">
                  BTC:{" "}
                  <Link to="/balance" className="hover:underline">
                    0.00000000
                  </Link>{" "}
                  / XMR:{" "}
                  <Link to="/balance?crypto=xmr" className="hover:underline">
                    0.00000000
                  </Link>
                </p>
              </div>
            </div>
          ) : (
            <p className="text-sm text-center">Not logged in</p>
          )}

          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white text-sm py-1 px-2 rounded w-full sm:w-auto text-center"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-green-500 hover:bg-green-600 text-white text-sm py-1 px-2 rounded w-full sm:w-auto text-center"
            >
              Login
            </Link>
          )}
        </div>
      </div>
      <div className=" bg-[#4aa0ba] py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
            <span className="flex items-center">
              <span className="text-green-400 mr-1">▲</span>USD 97,364.55
            </span>
            <span className="flex items-center">
              <span className="text-green-400 mr-1">▲</span>CAD 137,030.60
            </span>
            <span className="flex items-center">
              <span className="text-green-400 mr-1">▲</span>EUR 92,596.36
            </span>
            <span className="flex items-center">
              <span className="text-green-400 mr-1">▲</span>AUD 152,290.44
            </span>
            <span className="flex items-center">
              <span className="text-green-400 mr-1">▲</span>GBP 77,271.27
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
