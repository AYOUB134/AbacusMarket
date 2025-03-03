import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Order from "./components/pages/order/order";
import Message from "./components/pages/message/Message";
import Wallet from "./components/pages/wallet/Wallet";
import Profile from "./components/pages/profile/Profile";
import Support from "./components/pages/support/Support";
import Vendor from "./components/pages/vendor/Vendor";
import Verify from "./components/pages/verifyurl/Verify";
import HarmReduction from "./components/pages/HarmReduction/HarmReduction";
import Notifications from "./components/pages/notifications/Notifications";
import Login from "./components/pages/login/Login";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/messages" element={<Message />} />
        <Route path="/balance" element={<Wallet />} />
        <Route path="/editprofile" element={<Profile />} />
        <Route path="/support" element={<Support />} />
        <Route path="/become-vendor" element={<Vendor />} />
        <Route path="/url-verification" element={<Verify />} />
        <Route path="/harm-reduction" element={<HarmReduction />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
