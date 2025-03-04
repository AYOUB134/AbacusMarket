import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedListings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("https://mega-market-server.vercel.app/api/product/all")
      .then((response) => response.json())
      .then((data) => {
        const featuredProducts = data.products.filter((product) => product.isFeatured);
        setListings(featuredProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="text-white flex-grow p-2 bg-white">
      <h2 className="text-md sm:text-lg font-semibold mb-2 text-[#084d71]">
        ⭐ FEATURED LISTINGS
      </h2>
      <div className="grid grid-cols-3 gap-0">
        {listings.map((listing) => (
          <div key={listing._id} className="p-1 sm:p-2 rounded-md border border-gray-300 shadow-sm flex flex-col justify-between">
            <div>
              {/* Product Image */}
              <div className="relative w-full h-20 sm:h-24 bg-white rounded overflow-hidden">
                <img src={listing.images[0]} alt={listing.name} className="w-full h-full object-contain p-1" loading="lazy" />
              </div>

              {/* Product Title */}
              <h3 className="text-xs sm:text-sm font-medium text-black mb-1 line-clamp-2">
                {listing.name}
              </h3>

              {/* Product Category */}
              <p className="text-[9px] sm:text-[10px] text-gray-500">
                Buds & Flowers
              </p>

              {/* Seller Info */}
              <p className="text-[9px] sm:text-[10px] text-gray-500">
                <span className="text-black">Sold by:</span> {listing.vendor.username}
              </p>

              {/* Feedback & Vendor Level */}
              <div className="flex justify-between text-[9px] sm:text-[10px] text-gray-500 my-1">
                <span className="bg-green-600 px-1 py-1 rounded text-white font-semibold">
                  FB {listing.feedbackPercentage}%
                </span>
                <span className="bg-blue-600 px-1 py-1 rounded text-white font-semibold">
                  Lvl {listing.vendorLevel}
                </span>
              </div>

              {/* Price & Shipping */}
              <p className="text-xs sm:text-sm font-bold text-green-500 mt-1">
                USD {listing.price.toFixed(2)}
              </p>
              <p className="text-[9px] sm:text-[10px] text-gray-500">
                <span className="text-black font-semibold">Ships From:</span> {listing.shipsFrom}
              </p>
            </div>

            {/* View Product Button */}
            <Link to="#" className="mt-1 block text-white text-[10px] sm:text-xs font-bold py-1 text-center rounded bg-[#4aa0ba]">
              View Product →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedListings;