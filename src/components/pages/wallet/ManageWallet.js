import React, { useState } from "react";
import { FaWallet } from "react-icons/fa";

const ManageWallet = () => {
  const [balance, setBalance] = useState(0.0);
  const [transactions, setTransactions] = useState([]); // Mock data can be added here

  const handleDeposit = () => {
    // Implement deposit functionality here
    console.log("Deposit clicked");
  };

  const handleWithdraw = () => {
    // Implement withdraw functionality here
    console.log("Withdraw clicked");
  };

  return (
    <div className="p-4 bg-[] min-h-screen text-white">
      {/* Header */}
      <div className=" bg-[#4aa0ba] text-white font-bold flex items-center p-2 rounded-md">
        <FaWallet className="mr-2" />
        WALLET / BALANCE
      </div>

      {/* Description */}
      <div className=" text-black text-sm p-2 mt-2 rounded-md">
        Here, you can view your wallet and balance details. You can manage your
        funds by depositing or withdrawing money. All transactions are recorded
        and displayed below.
      </div>

      {/* Wallet Actions */}
      <div className="flex flex-wrap gap-2 mt-4text-white">
        <div
          className="border border-blue-400 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-[#004054]"
          onClick={handleDeposit}
        >
          Deposit
        </div>
        <div
          className="border border-blue-400 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-[#004054]"
          onClick={handleWithdraw}
        >
          Withdraw
        </div>
      </div>

      {/* Balance */}
      <div className=" bg-[#4aa0ba] text-white p-4 mt-4 rounded-md">
        <div className="text-sm">
          <p className="font-bold">Current Balance</p>
          <p className="ml-2 text-yellow-400">USD {balance.toFixed(2)}</p>
        </div>
      </div>

      {/* Transaction History */}
      <div className=" bg-[#4aa0ba] text-white p-4 mt-4 rounded-md">
        <div className="text-sm font-bold mb-2">Transaction History</div>
        {transactions.length === 0 ? (
          <div className=" bg-[#4aa0ba] text-white text-center font-bold mt-4 p-2 rounded-md">
            NO TRANSACTIONS FOUND
          </div>
        ) : (
          <div className="mt-4">
            {/* Map through transactions and display them */}
            {transactions.map((transaction, index) => (
              <div
                key={index}
                className="p-2 bg-[#004054] text-white mb-2 rounded-md"
              >
                {/* Transaction details can be displayed here */}
                <p>Transaction {index + 1}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageWallet;
