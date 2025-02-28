import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedListings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setListings(data.slice(0, 8))) // Fetch only 8 products
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className=" text-white flex-grow p-4">
      <h2 className="text-lg font-bold mb-3 text-yellow-400" style={{ marginTop: "0" }}>⭐ FEATURED LISTINGS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {listings.map((listing, index) => (
          <div key={listing.id} className="bg-blue-900 p-3 rounded-lg border border-gray-600 shadow-md flex flex-col justify-between">
            <div>
              {/* Product Image */}
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-32 object-contain rounded mb-2 bg-white p-2"
              />

              {/* Product Title */}
              <h3 className="text-xs font-semibold text-yellow-400 mb-1">{listing.title}</h3>

              {/* Product Category */}
              <p className="text-xs text-gray-300 font-semibold">Buds & Flowers</p>

              {/* Seller Info (Custom) */}
              <p className="text-xs text-gray-300 font-semibold mt-1">
                <span className="text-yellow-400">Sold by:</span> Vendor {index + 1} ({Math.floor(Math.random() * 5000)})
              </p>

              {/* Feedback & Vendor Level */}
              <div className="flex justify-between text-xs text-gray-300 my-2">
                <span className="bg-green-600 px-2 py-1 rounded text-white font-semibold">FB {Math.floor(Math.random() * 10) + 90}%</span>
                <span className="bg-blue-600 px-2 py-1 rounded text-white font-semibold">Lvl {Math.floor(Math.random() * 10)}</span>
              </div>

              {/* Price & Shipping */}
              <p className="text-xs font-bold text-green-400 mt-1">USD {listing.price.toFixed(2)}</p>
              <p className="text-xs text-gray-300">
                <span className="text-yellow-400 font-semibold">Ships From:</span> United States
              </p>
            </div>

            {/* View Product Button */}
            <Link to="#" className="mt-2 block bg-yellow-500 text-black text-xs font-bold py-2 text-center rounded hover:bg-yellow-400">
              View Product →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedListings;