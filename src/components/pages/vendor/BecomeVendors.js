import React from "react";
import { FaStore } from "react-icons/fa";

const BecomeVendor = () => {
  return (
    <div className=" min-h-screen p-4">
      {/* Header */}
      <div className=" bg-[#4aa0ba] text-white text-center py-3 text-xl font-bold rounded">
        🌟 BECOME A VENDOR
      </div>

      {/* Description */}
      <div className=" text-black text-sm p-2 mt-4 rounded-md">
        Becoming a vendor on MEGA Market allows you to list your products and
        reach a wide audience. Follow the instructions below to set up your
        vendor account.
      </div>

      {/* Steps to Become a Vendor */}
      <div className="mt-6">
        <h2 className="text-center text-lg font-bold">
          STEPS TO BECOME A VENDOR
        </h2>
        <div className="w-full max-w-2xl mx-auto mt-4">
          {[
            "Step 1: Verify your account",
            "Step 2: Set up your vendor profile",
            "Step 3: List your products",
            "Step 4: Start selling",
            "Step 5: Manage your orders",
          ].map((step, index) => (
            <div
              key={index}
              className=" p-3 mb-2 rounded-md border border-gray-600"
            >
              {step}
            </div>
          ))}
        </div>
      </div>

      {/* Vendor Benefits */}
      <div className="mt-6">
        <h2 className="text-center text-lg font-bold">VENDOR BENEFITS</h2>
        <div className="w-full max-w-2xl mx-auto mt-4">
          {[
            "Reach a global audience",
            "Secure transactions",
            "Low fees",
            "Dedicated support",
            "Advanced analytics",
          ].map((benefit, index) => (
            <div
              key={index}
              className=" p-3 mb-2 rounded-md border border-gray-600"
            >
              {benefit}
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-6">
        <button className=" bg-[#4aa0ba] text-white px-4 py-2 rounded mt-2 flex items-center mx-auto">
          <FaStore className="mr-2" /> Start Selling Now
        </button>
      </div>
    </div>
  );
};

export default BecomeVendor;
