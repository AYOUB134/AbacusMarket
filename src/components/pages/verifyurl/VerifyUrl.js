import React, { useState } from "react";

const VerifyUrl = () => {
  const [url, setUrl] = useState("");
  const [verificationResult, setVerificationResult] = useState("");

  const handleVerifyUrl = () => {
    // Implement URL verification logic here
    console.log("URL to verify:", url);
    // For demonstration purposes, we will just set a mock result
    setVerificationResult("This URL is verified.");
  };

  return (
    <div className="p-4  flex items-center justify-center">
      <div className="w-full max-w-md mx-auto">
        {/* Header */}
        <div className=" bg-[#4aa0ba] text-white text-center py-3 text-xl font-bold rounded">
          Verify URL
        </div>

        {/* Description */}
        <div className="  text-black text-sm p-2 mt-4 rounded-md">
          This tool is to verify the legitimacy of any fixed link of MEGA
          Market like the main public link or your private links. Temporal
          rotatory links cannot be verified here. Links provided by Rotator.to,
          Kangaroo Kicks Links or other authorized link distributors are always
          provided to you using signed PGP messages that you MUST verify
          MANUALLY, do not rely only on this tool. Remember that proxy phishing
          sites can alter the answer of this tool!
        </div>

        {/* URL Input */}
        <div className="mt-6">
          <label className="  block text-sm font-bold mb-2">Url to Verify:</label>
          <input
            type="text"
            className="w-full p-2 rounded-md text-black"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        {/* Verify Button */}
        <div className="text-center mt-4">
          <button
            className=" bg-[#4aa0ba] text-white px-4 py-2 rounded mt-2 w-full"
            onClick={handleVerifyUrl}
          >
            Verify Url
          </button>
        </div>

        {/* Verification Result */}
        {verificationResult && (
          <div className="bg-[#15232f] text-white text-center p-3 mt-4 rounded-md border border-gray-600">
            {verificationResult}
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyUrl;
