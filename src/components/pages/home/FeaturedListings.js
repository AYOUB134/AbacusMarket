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

  console.log(listings)

  return (
    <div className="text-white flex-grow p-4 bg-white">
      <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#084d71]" style={{ marginTop: "0" }}>
        ⭐ FEATURED LISTINGS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
        {listings.map((listing, index) => (
          <div key={listing._id} className="p-3 sm:p-4 rounded-lg border border-gray-600 shadow-md flex flex-col justify-between">
            <div>
              {/* Product Image */}
              <div className="relative w-full h-32 sm:h-40 mb-2 sm:mb-3 bg-white rounded overflow-hidden">
                <img src={listing.images[0]} alt={listing.name} className="w-full h-full object-contain p-2 " loading="lazy" />
              </div>

              {/* Product Title */}
              <h3 className="text-xs sm:text-sm font-semibold text-black mb-1 line-clamp-2">
                {listing.name}
              </h3>

              {/* Product Category */}
              <p className="text-xs text-gray-300 font-semibold">Buds & Flowers</p>

              {/* Seller Info */}
              <p className="text-xs text-gray-300 font-semibold mt-1">
                <span className="text-black">Sold by:</span> {listing.vendor.username}
              </p>

              {/* Feedback & Vendor Level */}
              <div className="flex justify-between text-xs text-gray-300 my-2">
                <span className="bg-green-600 px-2 py-1 rounded text-white font-semibold">
                  FB {listing.feedbackPercentage}%
                </span>
                <span className="bg-blue-600 px-2 py-1 rounded text-white font-semibold">
                  Lvl {listing.vendorLevel}
                </span>
              </div>

              {/* Price & Shipping */}
              <p className="text-xs sm:text-sm font-bold text-green-400 mt-1">
                USD {listing.price.toFixed(2)}
              </p>
              <p className="text-xs text-gray-300">
                <span className="text-black font-semibold">Ships From:</span> {listing.shipsFrom}
              </p>
            </div>

            {/* View Product Button */}
            <Link to="#" className="mt-2 sm:mt-3 block text-white text-xs sm:text-sm font-bold py-2 text-center rounded transition-colors bg-[#084d71]">
              View Product →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedListings;
