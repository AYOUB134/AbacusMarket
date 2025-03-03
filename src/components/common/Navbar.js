import { Link } from "react-router-dom";
import {
  FaHome,
  FaShoppingCart,
  FaEnvelope,
  FaWallet,
  FaUser,
  FaLifeRing,
  FaStore,
  FaLink,
  FaHeartbeat,
} from "react-icons/fa";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const navItems = [
    { to: "/", icon: FaHome, text: "Home" },
    { to: "/orders", icon: FaShoppingCart, text: "Orders (0)" },
    { to: "/messages", icon: FaEnvelope, text: "Messages (0)" },
    { to: "/balance", icon: FaWallet, text: "Wallets" },
    { to: "/editprofile", icon: FaUser, text: "Profile" },
    { to: "/support", icon: FaLifeRing, text: "Support (0)" },
    { to: "/become-vendor", icon: FaStore, text: "Become a Vendor" },
    { to: "/url-verification", icon: FaLink, text: "URL Verification" },
    { to: "/harm-reduction", icon: FaHeartbeat, text: "Harm Reduction" },
  ];

  return (
    <nav
      className={`py-4 sticky top-0 ${
        darkMode ? "bg-gray-900" : "bg-[#0D1B2A]"
      }`}
    >
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        {/* Mobile Menu */}

        <div className="lg:hidden scrollbar-hide flex overflow-x-auto space-x-4 pb-2">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center flex-shrink-0 ${
                darkMode
                  ? "text-gray-300 hover:text-gray-500"
                  : "text-white hover:text-blue-200"
              }`}
            >
              <item.icon className="mr-1" /> {item.text}
            </Link>
          ))}
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-wrap items-center space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center ${
                darkMode
                  ? "text-gray-300 hover:text-gray-500"
                  : "text-white hover:text-blue-200"
              }`}
            >
              <item.icon className="mr-1" /> {item.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
