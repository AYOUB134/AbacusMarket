import React, { useState } from "react";
import Navbar from "../../common/Navbar";
import Header from "../../common/Header";
import Breadcrumb from "../../common/Breadcrumb";
import DateTime from "../../common/DateTime";
import Sidebar from "../../common/Sidebar2";
import ManageMessages from "./ManageMessages";

const Message = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div
      className="min-h-screen flex flex-col "
      style={{ backgroundColor: "" }}
    >
      <div className="sticky top-0 z-10">
        <Header />
        <Navbar />
      </div>
      <div className="flex flex-grow container mx-auto flex-col md:flex-row">
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          className="w-full md:w-1/4"
        />
        <main className="flex-grow rounded-lg shadow-md w-full md:w-3/4 p-4">
          <div>
            <ManageMessages />
            {/* Add your main content components here */}
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

export default Message;
