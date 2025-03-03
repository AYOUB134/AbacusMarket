import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedListings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setListings(data.slice(0, 8)))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="text-white flex-grow p-4 bg-white">
      <h2
        className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#084d71]"
        style={{ marginTop: "0" }}
      >
        ⭐ FEATURED LISTINGS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
        {listings.map((listing, index) => (
          <div
            key={listing.id}
            className=" p-3 sm:p-4 rounded-lg border border-gray-600 shadow-md flex flex-col justify-between"
          >
            <div>
              {/* Product Image */}
              <div className="relative w-full h-32 sm:h-40 mb-2 sm:mb-3 bg-white rounded overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-contain p-2 "
                  loading="lazy"
                />
              </div>

              {/* Product Title */}
              <h3 className="text-xs sm:text-sm font-semibold text-black mb-1 line-clamp-2">
                {listing.title}
              </h3>

              {/* Product Category */}
              <p className="text-xs text-gray-300 font-semibold">
                Buds & Flowers
              </p>

              {/* Seller Info */}
              <p className="text-xs text-gray-300 font-semibold mt-1">
                <span className="text-black">Sold by:</span> Vendor{" "}
                {index + 1} ({Math.floor(Math.random() * 5000)})
              </p>

              {/* Feedback & Vendor Level */}
              <div className="flex justify-between text-xs text-gray-300 my-2">
                <span className="bg-green-600 px-2 py-1 rounded text-white font-semibold">
                  FB {Math.floor(Math.random() * 10) + 90}%
                </span>
                <span className="bg-blue-600 px-2 py-1 rounded text-white font-semibold">
                  Lvl {Math.floor(Math.random() * 10)}
                </span>
              </div>

              {/* Price & Shipping */}
              <p className="text-xs sm:text-sm font-bold text-green-400 mt-1">
                USD {listing.price.toFixed(2)}
              </p>
              <p className="text-xs text-gray-300">
                <span className="text-black font-semibold">
                  Ships From:
                </span>{" "}
                United States
              </p>
            </div>

            {/* View Product Button */}
            <Link
              to="#"
              className="mt-2 sm:mt-3 block  text-white text-xs sm:text-sm font-bold py-2 text-center rounded  transition-colors bg-[#084d71]"
            >
              View Product →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedListings;
