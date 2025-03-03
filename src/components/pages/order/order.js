import React, { useState } from "react";
import Navbar from "../../common/Navbar";
import Header from "../../common/Header";
import Breadcrumb from "../../common/Breadcrumb";
import DateTime from "../../common/DateTime";
import Sidebar2 from "../../common/Sidebar2";
import ManageOrders from "./ManageOrders";

const Order = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-gray-100"
      style={{ backgroundColor: "#0d1b2a" }}
    >
      <div className="sticky top-0 z-10">
        <Header />
        <Navbar />
      </div>
      <div className="flex flex-grow container mx-auto flex-col md:flex-row relative">
        <Sidebar2 isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-grow rounded-lg shadow-md w-full lg:w-3/4 p-4">
          <div>
            <ManageOrders />
          </div>
        </main>
      </div>
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
          <Breadcrumb />
          <DateTime />
        </div>
      </footer>
    </div>
  );
};

export default Order;
