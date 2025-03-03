import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const ManageMessages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("Filter by");
  const [messages, setMessages] = useState([]); // Mock data can be added here

  const handleSearch = () => {
    // Implement search functionality here
    console.log("Search Term:", searchTerm);
    console.log("Filter:", filter);
  };

  return (
    <div className="p-4 bg-[#0d1b2a] min-h-screen text-white">
      {/* Header */}
      <div className="bg-blue-100 text-black font-bold flex items-center p-2 rounded-md">
        <FaEnvelope className="mr-2" />
        PRIVATE MESSAGES
      </div>

      {/* Description */}
      <div className="bg-yellow-400 text-black text-sm p-2 mt-2 rounded-md">
        Here, you can view your private messages. You can see your incoming and
        outgoing messages, as well as your trash bin in which messages will be
        deleted automatically after 30 days. Your conversations are never
        deleted unless you manually delete them or if the last message was more
        than 30 days ago, and there is no preset limit on your inbox folder
        capacity.
        <br />
        <br />
        Never accept direct deals outside Abacus Market. You will likely end up
        losing your money. Report through ticket any vendor asking you to
        continue the transaction through wickr or any other type of external
        method. If a vendor who does not have FE rights ask you to FE before
        receiving your product, report them too, probably they want to scam you.
      </div>

      {/* Message Status Tabs */}
      <div className="flex flex-wrap gap-2 mt-4">
        {["CONVERSATIONS (0)", "ORDERS (0)", "TRASH", "INVITATIONS (0)"].map(
          (tab, index) => (
            <div
              key={index}
              className="border border-blue-400 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-[#004054]"
            >
              {tab}
            </div>
          )
        )}
      </div>

      {/* Search Bar */}
      <div className="bg-[#002733] p-4 mt-4 rounded-md">
        <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-2">
          <label className="text-white">Search:</label>
          <input
            type="text"
            className="p-1 w-full lg:w-1/2 rounded-md text-black"
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

        {/* No Messages Found */}
        {messages.length === 0 ? (
          <div className="bg-blue-100 text-black text-center font-bold mt-4 p-2 rounded-md">
            NO MESSAGES FOUND
          </div>
        ) : (
          <div className="mt-4">
            {/* Map through messages and display them */}
            {messages.map((message, index) => (
              <div
                key={index}
                className="p-2 bg-[#004054] text-white mb-2 rounded-md"
              >
                {/* Message details can be displayed here */}
                <p>Message {index + 1}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageMessages;
