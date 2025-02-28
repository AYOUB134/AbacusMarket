import React from 'react';
import Navbar from "../../common/Navbar";
import Header from "../../common/Header";
import Breadcrumb from "../../common/Breadcrumb";
import DateTime from "../../common/DateTime";
import Sidebar from "../../common/Sidebar2";
import ManageMessages from "./ManageMessages";

const Message = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100" style={{ backgroundColor: '#0d1b2a' }}>
      <Header />
      <Navbar />
      <div className="flex flex-grow container mx-auto">
        <Sidebar className="w-full lg:w-1/4" />
        <main className="flex-grow rounded-lg shadow-md w-full lg:w-2/4">
          <div>
            <ManageMessages />
            {/* Add your main content components here */}
          </div>
        </main>
      </div>
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Breadcrumb />
          <DateTime />
        </div>
      </footer>
    </div>
  );
};

export default Message;