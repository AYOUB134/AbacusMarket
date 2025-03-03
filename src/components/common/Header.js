import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gray-900 sticky text-white">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex-shrink-0 mb-4 sm:mb-0">
          <Link to="/" className="text-2xl font-bold">
            Mega Market
          </Link>
          {/* <img src="/newLogo.png" alt="Mega Market" className="w-24 " /> */}
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <Link to="/" className="flex items-center w-full sm:w-auto">
            <FaUserCircle className="w-10 h-10 text-gray-300 mr-2 flex-shrink-0" />
            <div className="text-sm">
              <p>
                Logged in as <span className="font-semibold">devs360</span>
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
          </Link>
          <Link
            to="/login"
            className="bg-red-500 hover:bg-red-600 text-white text-sm py-1 px-2 rounded w-full sm:w-auto text-center"
          >
            Logout
          </Link>
        </div>
      </div>
      <div className=" py-2">
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
