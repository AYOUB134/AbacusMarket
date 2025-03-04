import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://mega-market-server.vercel.app/api/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 sm:p-8 rounded-lg shadow-lg w-full sm:max-w-md mx-4 sm:mx-0">
        <h2 className="text-2xl font-bold mb-4 sm:mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4 sm:mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-[#084d71] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
              Login
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
          Don't have an account? <a href="/signup" className="text-blue-500">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
