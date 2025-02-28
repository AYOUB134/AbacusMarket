import React from 'react';
import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart, FaEnvelope, FaWallet, FaUser, FaLifeRing, FaStore, FaLink, FaHeartbeat, FaMoon, FaBell } from 'react-icons/fa'; // Importing icons

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={`py-4 ${darkMode ? 'bg-gray-900' : 'bg-blue-900'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex-shrink-0">
       
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-gray-500' : 'text-white hover:text-blue-200'}`}>
            <FaHome className="mr-1" /> Home
          </Link>
          <Link to="/orders" className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-gray-500' : 'text-white hover:text-blue-200'}`}>
            <FaShoppingCart className="mr-1" /> Orders (0)
          </Link>
          <Link to="/messages" className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-gray-500' : 'text-white hover:text-blue-200'}`}>
            <FaEnvelope className="mr-1" /> Messages (0)
          </Link>
          <Link to="/balance" className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-gray-500' : 'text-white hover:text-blue-200'}`}>
            <FaWallet className="mr-1" /> Wallets
          </Link>
          <Link to="/editprofile" className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-gray-500' : 'text-white hover:text-blue-200'}`}>
            <FaUser className="mr-1" /> Profile
          </Link>
          <Link to="/support" className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-gray-500' : 'text-white hover:text-blue-200'}`}>
            <FaLifeRing className="mr-1" /> Support (0)
          </Link>
          <Link to="/become-vendor" className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-gray-500' : 'text-white hover:text-blue-200'}`}>
            <FaStore className="mr-1" /> Become a Vendor
          </Link>
          <Link to="/url-verification" className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-gray-500' : 'text-white hover:text-blue-200'}`}>
            <FaLink className="mr-1" /> URL Verification
          </Link>
          <Link to="/harm-reduction" className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-gray-500' : 'text-white hover:text-blue-200'}`}>
            <FaHeartbeat className="mr-1" /> Harm Reduction
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className={`focus:outline-none ${darkMode ? 'text-gray-300' : 'text-white'}`} onClick={toggleDarkMode}>
            <FaMoon className="w-6 h-6" />
          </button>
          <Link to="/notifications" className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-gray-500' : 'text-white hover:text-blue-200'}`}>
            <FaBell className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;