import React, { useState } from "react";
import {
  FaShoppingCart,
  FaHeart,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Sidebar = ({ darkMode = false, toggleDarkMode = () => {} }) => {
  const [notificationCount, setNotificationCount] = useState(1);
  const [cryptoChoice, setCryptoChoice] = useState("Bitcoin");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 text-black rounded mt-5 "
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-white  w-80 p-4 h-screen fixed md:static top-0 left-0 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } z-40 md:z-0 overflow-y-auto scrollbar-hide`}
      >
        {/* User Info Section */}
        <div className="mb-4 p-4 border border-gray-700 rounded-lg">
          <h2 className="text-sm font-bold">
            devs360 (0) <span className="text-green-500">100%</span>
          </h2>
          <p className="text-xs">
            Vendor Level: <span className="font-bold">1</span>
          </p>
          <div className="bg-red-600 text-white text-xs px-3 py-1 rounded mt-2 cursor-pointer">
            Notifications ({notificationCount})
          </div>
          <div className="flex flex-wrap justify-between mt-2 gap-2">
            <div className="flex items-center">
              <input
                type="radio"
                name="crypto"
                value="Bitcoin"
                checked={cryptoChoice === "Bitcoin"}
                onChange={() => setCryptoChoice("Bitcoin")}
                className="mr-2"
              />{" "}
              Bitcoin
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="crypto"
                value="Monero"
                checked={cryptoChoice === "Monero"}
                onChange={() => setCryptoChoice("Monero")}
                className="mr-2"
              />{" "}
              Monero
            </div>
          </div>
          <p className="text-xs text-gray-400">0.00000000</p>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <button className=" bg-[#4aa0ba] text-white p-2 rounded flex items-center justify-center text-xs">
              <FaShoppingCart className="mr-2" /> My Orders
            </button>
            <button className=" bg-[#4aa0ba] text-white p-2 rounded flex items-center justify-center text-xs">
              <FaHeart className="mr-2" /> My Favorites
            </button>
            <button className="  bg-[#4aa0ba]  text-white p-2 rounded flex items-center justify-center text-xs">
              <FaCog className="mr-2" /> My Settings
            </button>
            <button className="  bg-[#4aa0ba] text-white  p-2 rounded flex items-center justify-center text-xs">
              <FaSignOutAlt className="mr-2" /> Log Out
            </button>
          </div>
          <button className=" bg-[#4aa0ba] text-white w-full mt-3 py-2 rounded text-xs ">
            MY ABACUS
          </button>
        </div>

        {/* What's New Section */}
        <div className="mb-4 p-4 border border-gray-700 rounded-lg">
          <h3 className="text-sm font-bold">WHAT'S NEW FOR ME?</h3>
          <p className="text-xs text-gray-400">
            {notificationCount} unread notification
            {notificationCount > 1 ? "s" : ""}
          </p>
          <a href="#" className="text-blue-400 text-xs">
            Click here to see all
          </a>
          <div className="mt-3 bg-blue-100 text-black p-3 rounded">
            <p className="text-xs">
              Welcome to Abacus Market, we will do our best to make it your
              home...
            </p>
          </div>
        </div>

        {/* Browse Categories Section */}
        <button className=" bg-[#4aa0ba] text-white w-full py-2 rounded mb-3 text-xs">
          BROWSE CATEGORIES
        </button>
        <ul className="text-xs cursor-pointer space-y-2">
          <li className="hover:text-yellow-400">Drugs & Chemicals (31319)</li>
          <li className="hover:text-yellow-400">Counterfeit items (369)</li>
          <li className="hover:text-yellow-400">Digital Products (4926)</li>
          <li className="hover:text-yellow-400">Fraud (5683)</li>
          <li className="hover:text-yellow-400">Guides & Tutorials (4869)</li>
          <li className="hover:text-yellow-400">Jewels & Gold (58)</li>
          <li className="hover:text-yellow-400">Carded items (49)</li>
          <li className="hover:text-yellow-400">Services (520)</li>
          <li className="hover:text-yellow-400">Software & Malware (1277)</li>
          <li className="hover:text-yellow-400">Security & Hosting (265)</li>
          <li className="hover:text-yellow-400">Other Listings (166)</li>
        </ul>

        {/* Search Section */}
        <div className="  bg-[#4aa0ba] text-white mt-4 p-4 border border-gray-700 rounded-lg">
          <input
            type="text"
            placeholder="Search Product"
            className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-xs"
          />
          <input
            type="text"
            placeholder="Search Vendor"
            className="w-full p-2 rounded bg-gray-800 border border-gray-600 mt-2 text-xs"
          />
          <select className="w-full p-2 rounded bg-gray-800 border border-gray-600 mt-2 text-xs">
            <option>Most popular item</option>
          </select>
          <button className=" bg-[#4aa0ba] text-white w-full mt-3 py-2 rounded text-xs">
            Search
          </button>
        </div>

        {/* Latest News Section */}
        <div className="mt-4 p-4 border border-gray-700 rounded-lg">
          <h3 className="text-sm font-bold">LATEST NEWS</h3>
          <div className="bg-blue-100 text-black p-3 mt-2 rounded">
            <p className="text-xs">
              February 14, 2023 - HAPPY NEW YEAR TO ALL ABARIANS!
            </p>
          </div>
          <div className="bg-blue-100 text-black p-3 mt-2 rounded">
            <p className="text-xs">June 26, 2022 - Abacus is open again...</p>
          </div>
          <div className="bg-blue-100 text-black p-3 mt-2 rounded">
            <p className="text-xs">
              January 07, 2022 - First update of the year...
            </p>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
