import Navbar from "../../common/Navbar";
import Header from "../../common/Header";
import Breadcrumb from "../../common/Breadcrumb";
import DateTime from "../../common/DateTime";
import Sidebar2 from "../../common/Sidebar2";
import Notificationsdata from "./Notificationsdata";
import { useState } from "react";

const Notifications = () => {
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
      <div className="flex flex-grow container mx-auto py-0">
        <Sidebar2
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          className="w-2/4"
        />
        <main className="flex-grow rounded-lg shadow-md">
          <div className="">
            <Notificationsdata></Notificationsdata>
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

export default Notifications;
