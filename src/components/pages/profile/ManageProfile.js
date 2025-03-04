import React from "react";

const ManageProfile = () => {
  return (
    <div className=" p-4 min-h-screen">
      {/* Header Section */}
      <div className=" bg-[#4aa0ba] text-white p-2 text-center text-xl font-bold ">
        DEVS360
      </div>
      <div className=" bg-[#4aa0ba] text-white font-bold text-center p-1 w-fit mx-auto mt-2 px-4 rounded-md">
        Buyer Profile
      </div>

      {/* Profile Card */}
      <div className="   bg-[#4aa0ba] text-white p-4 mt-4 rounded-lg border border-gray-600">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-16 h-16  bg-[#4aa0ba] text-white rounded-lg"></div>
          <div className="text-center md:text-left">
            <span className="font-bold  bg-[#4aa0ba] text-white">devs360 (0)</span>
            <span className="ml-2 bg-green-500 text-white text-xs p-1 rounded">
              Trust Level 1
            </span>
            <p className="text-green-400">Positive Feedback: 100%</p>
            <p>Positive Feedback (last 12 months): 100%</p>
            <p>Member since: February 17, 2025</p>
          </div>
        </div>
      </div>

      {/* Ratings and Statistics Section */}
      <div className=" p-4 mt-4 rounded-lg border border-gray-600">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Buyer Feedback Ratings */}
          <div>
            <div className=" bg-[#4aa0ba] text-white font-bold p-2 rounded-md w-fit">
              Buyer Feedback Ratings
            </div>
            <div className="bg-blue-100 text-black text-xs p-1 rounded-md w-fit mt-2">
              LAST 12 MONTHS
            </div>
            <table className="mt-2 w-full text-center">
              <thead>
                <tr>
                  <th></th>
                  <th>1 month</th>
                  <th>6 months</th>
                  <th>12 months</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Positive</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Neutral</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Negative</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Global Statistics */}
          <div>
            <div className=" bg-[#4aa0ba] text-white font-bold p-2 rounded-md w-fit">
              Global Statistics
            </div>
            <div className="bg-blue-100 text-black text-xs p-1 rounded-md w-fit mt-2">
              SINCE JOIN DATE
            </div>
            <p>Disputes Won/Lost: 0 / 0</p>
            <p>Total Spendings: USD 0.00</p>
            <p>Feedback Left: 0 (0% positive)</p>
            <p>Last Online: Feb 23, 2025</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-4 flex flex-wrap gap-2 border-b border-gray-600 pb-2">
        {[
          "ABOUT",
          "PGP KEY",
          "POSITIVE FEEDBACK (0)",
          "NEUTRAL FEEDBACK (0)",
          "NEGATIVE FEEDBACK (0)",
          "FEEDBACK LEFT (0)",
        ].map((tab) => (
          <div
            key={tab}
            className=" bg-[#4aa0ba] text-white px-4 py-2 rounded cursor-pointer hover:bg-[#004054]"
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Buyer’s Description */}
      <div className="mt-4 p-4  bg-[#4aa0ba] text-white rounded-lg border border-gray-600">
        <h2 className="text-center font-bold">Buyer's Description</h2>
        <p className="text-center text-gray-400">
          This user does not have a description
        </p>
      </div>
    </div>
  );
};

export default ManageProfile;
