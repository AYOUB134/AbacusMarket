import React, { useState } from "react";
import {
  FaShoppingCart,
  FaHeart,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";

const Sidebar = ({ darkMode = false, toggleDarkMode = () => {} }) => {
  const [notificationCount, setNotificationCount] = useState(1);
  const [cryptoChoice, setCryptoChoice] = useState("Bitcoin");
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState([]);

  const categories = [
    {
      name: "Drugs & Chemicals",
      count: 31319,
      subcategories: [],
    },
    {
      name: "Counterfeit items",
      count: 369,
      subcategories: [
        { name: "Clothing", count: 85 },
        { name: "Electronics", count: 23 },
        { name: "Jewelry", count: 14 },
        { name: "Money", count: 30 },
        { name: "Fake IDs", count: 149 },
        { name: "Other", count: 68 },
      ],
    },
    {
      name: "Digital Products",
      count: 4926,
      subcategories: [
        { name: "E-Books", count: 802 },
        { name: "Erotica", count: 1834 },
        { name: "Fraud Software", count: 559 },
        { name: "Game Keys", count: 32 },
        { name: "Legit Software", count: 613 },
        { name: "Other", count: 1086 },
      ],
    },
    {
      name: "Fraud",
      count: 5683,
      subcategories: [
        { name: "Accounts & Bank Drops", count: 2153 },
        { name: "CVV & Cards", count: 584 },
        { name: "Dumps", count: 854 },
        { name: "Personal Information & Scans", count: 1296 },
        { name: "Other", count: 796 },
      ],
    },
    {
      name: "Guides & Tutorials",
      count: 4869,
      subcategories: [
        { name: "Drugs", count: 273 },
        { name: "Fraud", count: 2279 },
        { name: "Hacking", count: 783 },
        { name: "Security & Anonymity", count: 328 },
        { name: "Social Engineering", count: 409 },
        { name: "Other", count: 797 },
      ],
    },
    {
      name: "Jewels & Gold",
      count: 58,
      subcategories: [
        { name: "Gold", count: 53 },
        { name: "Silver", count: 5 },
        { name: "Other", count: 0 },
      ],
    },
    {
      name: "Carded items",
      count: 49,
      subcategories: [
        { name: "Appliances", count: 0 },
        { name: "Clothing", count: 42 },
        { name: "Digital", count: 5 },
        { name: "Electronics", count: 1 },
        { name: "Other", count: 1 },
      ],
    },
    {
      name: "Services",
      count: 520,
      subcategories: [
        { name: "Social Engineering", count: 213 },
        { name: "Carding", count: 158 },
        { name: "Other", count: 149 },
      ],
    },
    {
      name: "Software & Malware",
      count: 1277,
      subcategories: [
        { name: "Botnets & Malware", count: 152 },
        { name: "Exploits", count: 42 },
        { name: "Exploits Kits", count: 66 },
        { name: "Security Software", count: 286 },
        { name: "Other", count: 731 },
      ],
    },
    {
      name: "Security & Hosting",
      count: 265,
      subcategories: [
        { name: "Hosting", count: 27 },
        { name: "VPN", count: 94 },
        { name: "Socks", count: 34 },
        { name: "Shells", count: 45 },
        { name: "Cpanels", count: 14 },
        { name: "Other", count: 51 },
      ],
    },
    {
      name: "Other Listings",
      count: 0,
      subcategories: [],
    },
  ];

  const toggleCategory = (categoryName) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((name) => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 text-black rounded "
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
          <div className=" bg-[#4aa0ba] text-white text-xs px-3 py-1 rounded mt-2 cursor-pointer">
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
            <button className=" bg-[#4aa0ba] text-white  p-2 rounded flex items-center justify-center text-xs">
              <FaSignOutAlt className="mr-2" /> Log Out
            </button>
          </div>
          <button className=" bg-[#4aa0ba] text-white w-full mt-3 py-2 rounded text-xs ">
            MY MEGA
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
              Welcome to MEGA Market, we will do our best to make it your
              home...
            </p>
          </div>
        </div>

        {/* Browse Categories Section */}
        <button className=" bg-[#4aa0ba] text-white w-full py-2 rounded mb-3 text-xs">
          BROWSE CATEGORIES
        </button>
        <ul className="text-xs cursor-pointer space-y-2">
          {categories.map((category) => (
            <li key={category.name} className="">
              <div
                className="flex justify-between items-center"
                onClick={() => toggleCategory(category.name)}
              >
                {category.name} ({category.count})
                {category.subcategories.length > 0 && (
                  <span>
                    {expandedCategories.includes(category.name) ? (
                      <FaChevronDown />
                    ) : (
                      <FaChevronRight />
                    )}
                  </span>
                )}
              </div>
              {expandedCategories.includes(category.name) && (
                <ul className="ml-4 mt-2">
                  {category.subcategories.map((subcategory) => (
                    <li
                      key={subcategory.name}
                      className=""
                    >
                      {subcategory.name} ({subcategory.count})
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Search Section */}
        <div className=" text-black mt-4 p-4 border border-gray-700 rounded-lg">
          <input
            type="text"
            placeholder="Search Product"
            className="w-full p-2 rounded border border-gray-600 text-xs"
          />
          <input
            type="text"
            placeholder="Search Vendor"
            className="w-full p-2 rounded  border border-gray-600 mt-2 text-xs"
          />
          <select className="w-full p-2 rounded  border border-gray-600 mt-2 text-xs">
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
            <p className="text-xs">June 26, 2022 - MEGA is open again...</p>
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