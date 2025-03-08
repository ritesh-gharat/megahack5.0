import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

export default function ActiveBids() {
  const [bids, setBids] = useState([]);
  const [showInput, setShowInput] = useState({});
  const { user, isSignedIn } = useUser();
  const [bidAmounts, setBidAmounts] = useState({});

  // Fetch bids from the API
  const fetchBids = async () => {
    try {
      const response = await fetch("http://34.121.0.250:8001/api/bids/");
      if (!response.ok) throw new Error("Failed to fetch bids");
      const data = await response.json();
      setBids(data);
      console.log("Fetched bids:", data); 
    } catch (error) {
      console.error("Error fetching bids:", error);
    }
  };

  // Fetch bids on mount and every 10 seconds
  useEffect(() => {
    fetchBids();
    const interval = setInterval(fetchBids, 10000);
    return () => clearInterval(interval);
  }, []);

  // Handle "Place Bid" button click
  const handlePlaceBidClick = (vendorId) => {
    setShowInput((prev) => ({ ...prev, [vendorId]: true }));
  };

  // Handle bid amount input change
  const handleBidAmountChange = (vendorId, value) => {
    setBidAmounts((prev) => ({ ...prev, [vendorId]: value }));
  };

  // Submit a new bid
  const handleSubmitBid = async (vendorId) => {
    const bidAmount = parseFloat(bidAmounts[vendorId]);
    if (isNaN(bidAmount)) {
      alert("Please enter a valid number");
      return;
    }

    const currentBid = bids.find((bid) => String(bid.vendor_id) === vendorId);
    if (!currentBid) {
      alert("Bid not found");
      return;
    }

    // Calculate current highest bid
    const currentHighestBid =
      currentBid.bids.length > 0
        ? Math.max(...currentBid.bids)
        : currentBid.price;

    // Validate that the new bid is higher than the current highest bid
    if (bidAmount <= currentHighestBid) {
      alert(
        `Your bid must be greater than the current highest bid of ₹₹{currentHighestBid.toFixed(
          2
        )}`
      );
      return;
    }

    // Prepare updated bid data
    const newBids = [...currentBid.bids, bidAmount];

    const updatedData = {
      bid_history: newBids,
      highest_bid_user: user.id,
    };

    try {
      const response = await fetch(
        `http://34.121.0.250:8001/api/bids/₹{vendorId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedData),
        }
      );
      if (!response.ok) throw new Error("Failed to place bid");
      alert("Bid placed successfully");
      setShowInput((prev) => ({ ...prev, [vendorId]: false }));
      setBidAmounts((prev) => ({ ...prev, [vendorId]: "" }));
      fetchBids(); // Refresh data from server
    } catch (error) {
      console.error("Error placing bid:", error);
      alert("Failed to place bid");
    }
  };

  return (
    <div className="bg-[#1e2939] p-6">
      <h2 className="text-3xl font-bold mb-4 text-white text-center">
        Active Bids
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bids.length > 0 ? (
          bids.map((bid) => {
            const vendorId = String(bid.vendor_id); // Normalize vendor_id as string
            const currentHighestBid =
              bid.bids.length > 0 ? Math.max(...bid.bids) : bid.price;
            const minBid = currentHighestBid + 1; // Minimum bid is current highest + 1

            return (
              <div key={vendorId} className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-bold">{bid.commodity}</h3>
                <p>Quantity: {bid.quantity} kg</p>
                <p>Starting Price: ₹{bid.price.toFixed(2)}</p>
                <p>
                  Location: {bid.district}, {bid.state}
                </p>
                <p>Current Highest Bid: ₹{currentHighestBid.toFixed(2)}</p>
                <p>{bid.bids.length} bids</p>
                <button
                  onClick={() => handlePlaceBidClick(vendorId)}
                  className="bg-blue-500 text-white py-2 px-4 rounded mt-2 hover:bg-blue-600"
                >
                  Place Bid
                </button>
                {showInput[vendorId] && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">
                      Enter your bid (minimum: ₹{minBid.toFixed(2)})
                    </p>
                    <input
                      type="number"
                      min={minBid}
                      step="0.01"
                      value={bidAmounts[vendorId] || ""}
                      onChange={(e) =>
                        handleBidAmountChange(vendorId, e.target.value)
                      }
                      className="w-full p-2 border rounded text-black mt-1"
                      placeholder={`Min: ₹${minBid.toFixed(2)}`}
                    />
                    <button
                      onClick={() => handleSubmitBid(vendorId)}
                      className="w-full bg-green-500 text-white py-2 px-4 rounded mt-2 hover:bg-green-600"
                    >
                      Submit Bid
                    </button>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <p className="text-white text-center col-span-full">
            No active bids available.
          </p>
        )}
      </div>
    </div>
  );
}
