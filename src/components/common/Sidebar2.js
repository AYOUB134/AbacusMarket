import React from "react";
import {
  FaUser,
  FaChartBar,
  FaExchangeAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Sidebar2 = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className="">
      {/* Toggle Button for Mobile */}
      <button
        className="md:hidden fixed top-4 right-4 text-white "
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-72  p-4 min-h-screen transform transition-transform duration-300 z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:w-72`}
      >
        {/* Profile Actions */}
        <div className="p-2 rounded-md">
          <div className="flex items-center bg-[#084d71] text-white text-black font-bold p-2 rounded-md">
            <FaUser className="mr-2" />
            PROFILE ACTIONS
          </div>
          <ul className="mt-2 text-sm space-y-1">
            {[
              "Homepage",
              "My Information",
              "Private Messages (0)",
              "Orders (0)",
              "Favorites",
              "Shared Access",
              "Balance",
              "Feedback",
              "Affiliate Stats",
              "Help",
            ].map((item, index) => (
              <li
                key={index}
                className="border-b border-gray-600 py-1 px-2 hover:bg-[#004054] cursor-pointer rounded-md"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Buyers Statistics */}
        <div className="p-2 rounded-md mt-4">
          <div className="flex items-center font-bold p-2">
            <FaChartBar className="mr-2" />
            BUYERS STATISTICS
          </div>
          <div className="text-sm">
            <p className="font-bold">Bought items</p>
            <p className="ml-2">Items Bought: 0</p>
            <p className="font-bold mt-2">Payments</p>
            <p className="ml-2">
              Paid: <span className="text-yellow-400">USD 0.00</span>
            </p>
            <p className="ml-2">
              In Escrow: <span className="text-yellow-400">USD 0.00</span>
            </p>
            <p className="ml-2 font-bold">
              Total purchases: <span className="text-yellow-400">USD 0.00</span>
            </p>
          </div>
        </div>

        {/* Exchange Rates */}
        <div className="p-2 rounded-md mt-4">
          <div className="flex items-center font-bold p-2">
            <FaExchangeAlt className="mr-2" />
            EXCHANGE RATES
          </div>
          <div className="text-sm">
            <p className="font-bold">Bitcoin (BTC)</p>
            <p className="ml-2">
              United States Dollar (USD):{" "}
              <span className="text-yellow-400">95,877.38</span>
            </p>
            <p className="ml-2">
              Canadian Dollar (CAD):{" "}
              <span className="text-yellow-400">136,121.04</span>
            </p>
            <p className="ml-2">
              Euro (EUR): <span className="text-yellow-400">91,617.04</span>
            </p>
            <button className="w-full mt-2  text-white py-1 rounded-md hover:bg-[#00333b]">
              Deposits & Withdrawals (BTC)
            </button>

            <p className="font-bold mt-4">Monero (XMR)</p>
            <p className="ml-2">
              United States Dollar (USD):{" "}
              <span className="text-yellow-400">233.33</span>
            </p>
            <p className="ml-2">
              Canadian Dollar (CAD):{" "}
              <span className="text-yellow-400">331.27</span>
            </p>
            <p className="ml-2">
              Euro (EUR): <span className="text-yellow-400">222.96</span>
            </p>
            <button className="w-full mt-2 bg-[#004054] text-white py-1 rounded-md hover:bg-[#00333b]">
              Deposits & Withdrawals (XMR)
            </button>
          </div>
        </div>
      </div>

      {/* Overlay to close sidebar when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden z-20"
          onClick={toggleSidebar}
        ></div>
      )}
    </aside>
  );
};

export default Sidebar2;
