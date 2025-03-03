import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Your order #12345 has been shipped.", isNew: true },
    { id: 2, message: "New message from support.", isNew: true },
    { id: 3, message: "Your deposit of $50 has been confirmed.", isNew: false },
    { id: 4, message: "Reminder: Complete your profile.", isNew: false },
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, isNew: false } : notification
    ));
  };

  return (
    <div className="bg-[#0f1d2b] min-h-screen p-4 text-white">
      {/* Header */}
      <div className="bg-blue-100 text-black text-center py-3 text-xl font-bold rounded">
        <FaBell className="inline-block mr-2" /> Notifications
      </div>

      {/* Notifications List */}
      <div className="mt-6 w-full max-w-2xl mx-auto">
        {notifications.length === 0 ? (
          <div className="text-center text-gray-400">No notifications</div>
        ) : (
          notifications.map(notification => (
            <div 
              key={notification.id} 
              className={`p-3 mb-2 rounded-md border ${notification.isNew ? 'border-yellow-500 bg-[#15232f]' : 'border-gray-600 bg-[#1c2d3a]'}`}
              onClick={() => markAsRead(notification.id)}
            >
              {notification.message}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notifications;