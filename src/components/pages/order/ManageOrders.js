import React, { useState } from "react";
import { FaClipboardList } from "react-icons/fa";

const ManageOrders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("Filter by");
  const [orders, setOrders] = useState([]); // Mock data can be added here

  const handleSearch = () => {
    // Implement search functionality here
    console.log("Search Term:", searchTerm);
    console.log("Filter:", filter);
  };

  return (
    <div className="text-center  p-4 bg-[#0d1b2a] min-h-screen text-white">
      {/* Header */}
      <div className=" text-center  bg-blue-100 text-black font-bold flex items-center p-2 rounded-md">
        <FaClipboardList className="mr-2" />
        ORDERS
      </div>

      {/* Description */}
      <div className="bg-yellow-400 text-black text-sm p-2 mt-2 rounded-md">
        Here, you can view your order history. Your current orders are the
        orders that are not yet finalized, and the archived orders are the
        finalized orders where feedback has been left. Orders disappear from the
        panel 30 days after finalization.
      </div>

      {/* Order Status Tabs */}
      <div className="flex flex-wrap gap-2 mt-4">
        {[
          "PENDING (0)",
          "ACCEPTED (0)",
          "SHIPPED (0)",
          "FINALIZED (0)",
          "DISPUTED (0)",
          "CANCELED (0)",
          "UNPAID (0)",
        ].map((tab, index) => (
          <div
            key={index}
            className="border border-blue-400 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-[#004054]"
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Search Bar */}
      <div className="bg-[#002733] p-4 mt-4 rounded-md">
        <div className="flex items-center space-x-2">
          <label className="text-white">Search:</label>
          <input
            type="text"
            className="p-1 w-1/2 rounded-md text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="p-1 text-black rounded-md"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>Filter by</option>
            <option value="Pending">Pending</option>
            <option value="Accepted">Accepted</option>
            <option value="Shipped">Shipped</option>
            <option value="Finalized">Finalized</option>
            <option value="Disputed">Disputed</option>
            <option value="Canceled">Canceled</option>
            <option value="Unpaid">Unpaid</option>
          </select>
          <button
            className="bg-blue-600 px-3 py-1 rounded-md hover:bg-blue-800"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {/* Display Orders */}
        {orders.length === 0 ? (
          <div className="bg-blue-100 text-black text-center font-bold mt-4 p-2 rounded-md">
            NO ORDERS FOUND
          </div>
        ) : (
          <div className="mt-4">
            {/* Map through orders and display them */}
            {orders.map((order, index) => (
              <div
                key={index}
                className="p-2 bg-[#004054] text-white mb-2 rounded-md"
              >
                {/* Order details can be displayed here */}
                <p>Order {index + 1}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageOrders;
