import React from 'react';
import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-blue-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link to="/" className="text-2xl font-bold">
            Abacus Market
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center">
            <FaUserCircle className="w-10 h-10 text-gray-300 mr-2" />
            <div className="text-sm">
              <p>
                Logged in as <span className="font-semibold">devs360</span>
              </p>
              <p>
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
          <Link to="/login" className="bg-red-500 hover:bg-red-600 text-white text-sm py-1 px-2 rounded">
            Logout
          </Link>
        </div>
      </div>
      <div className="bg-blue-700 py-2">
        <div className="container mx-auto px-4 flex justify-center space-x-4 text-sm">
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
    </header>
  );
};

export default Header;