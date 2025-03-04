import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const userData = { fullname, email, phoneNumber, role, username, password };

    try {
      const response = await fetch("https://mega-market-server.vercel.app/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/login");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 sm:p-8 rounded-lg shadow-lg w-full sm:max-w-md mx-4 sm:mx-0">
        <h2 className="text-2xl font-bold mb-4 sm:mb-6 text-center">Signup</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4 sm:mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
          </div>
          <div className="mb-4 sm:mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-4 sm:mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="phoneNumber">Phone Number</label>
            <input type="text" id="phoneNumber" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
          </div>
          <div className="mb-4 sm:mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="role">Role</label>
            <input type="text" id="role" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={role} onChange={(e) => setRole(e.target.value)} required />
          </div>
          <div className="mb-4 sm:mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="username">Username</label>
            <input type="text" id="username" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input type="password" id="password" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className=" bg-[#4aa0ba] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Signup</button>
          </div>
        </form>
        <p className="text-center mt-4">
          Already have an account? <a href="/login" className="text-blue-500">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;