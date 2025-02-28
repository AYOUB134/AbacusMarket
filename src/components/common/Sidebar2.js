import { FaUser, FaChartBar, FaExchangeAlt } from "react-icons/fa";

const Sidebar2 = () => {
  return (
    <div className="w-72  text-white p-4 min-h-screen">
      {/* Profile Actions */}
      <div className="  p-2 rounded-md">
        <div className="flex items-center bg-yellow-500 text-black font-bold p-2 rounded-md">
          <FaUser className="mr-2" />
          PROFILE ACTIONS
        </div>
        <ul className="mt-2 text-sm space-y-1">
          {["Homepage", "My Information", "Private Messages (0)", "Orders (0)", "Favorites", "Shared Access", "Balance", "Feedback", "Affiliate Stats", "Help"].map((item, index) => (
            <li key={index} className="border-b border-gray-600 py-1 px-2 hover:bg-[#004054] cursor-pointer rounded-md">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Buyers Statistics */}
      <div className="  p-2 rounded-md mt-4">
        <div className="flex items-center font-bold p-2">
          <FaChartBar className="mr-2" />
          BUYERS STATISTICS
        </div>
        <div className="text-sm">
          <p className="font-bold">Bought items</p>
          <p className="ml-2">Items Bought: 0</p>
          <p className="font-bold mt-2">Payments</p>
          <p className="ml-2">Paid: <span className="text-yellow-400">USD 0.00</span></p>
          <p className="ml-2">In Escrow: <span className="text-yellow-400">USD 0.00</span></p>
          <p className="ml-2 font-bold">Total purchases: <span className="text-yellow-400">USD 0.00</span></p>
        </div>
      </div>

      {/* Exchange Rates */}
      <div className="  p-2 rounded-md mt-4">
        <div className="flex items-center font-bold p-2">
          <FaExchangeAlt className="mr-2" />
          EXCHANGE RATES
        </div>
        <div className="text-sm">
          <p className="font-bold">Bitcoin (BTC)</p>
          <p className="ml-2">United States Dollar (USD): <span className="text-yellow-400">95,877.38</span></p>
          <p className="ml-2">Canadian Dollar (CAD): <span className="text-yellow-400">136,121.04</span></p>
          <p className="ml-2">Euro (EUR): <span className="text-yellow-400">91,617.04</span></p>
          <button className="w-full mt-2 bg-[#004054] text-white py-1 rounded-md hover:bg-[#00333b]">
            Deposits & Withdrawals (BTC)
          </button>

          <p className="font-bold mt-4">Monero (XMR)</p>
          <p className="ml-2">United States Dollar (USD): <span className="text-yellow-400">233.33</span></p>
          <p className="ml-2">Canadian Dollar (CAD): <span className="text-yellow-400">331.27</span></p>
          <p className="ml-2">Euro (EUR): <span className="text-yellow-400">222.96</span></p>
          <button className="w-full mt-2 bg-[#004054] text-white py-1 rounded-md hover:bg-[#00333b]">
            Deposits & Withdrawals (XMR)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar2;