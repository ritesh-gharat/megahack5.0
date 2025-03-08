import React, { useState } from "react";
import Navbar from "../components/HomeComponents/Navbar";

const VendorForm = () => {
  const [formData, setFormData] = useState({
    vendor_id: "",
    commodity: "",
    quantity: "",
    price: "",
    state: "",
    district: "",
    start_time: "",
    end_time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data to send, adding required fields not in the form
    const dataToSend = {
      ...formData,
      quantity: parseInt(formData.quantity), // Convert to integer
      price: parseFloat(formData.price),     // Convert to float
      bid_history: [],                       // Default for new bids
      highest_bid_user: "",                  // Default for new bids
    };

    const url = `http://34.121.0.250:8001/api/bids/${formData.vendor_id}`;

    try {
      // Try to create a new bid with PUT
      const putResponse = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (putResponse.ok) {
        const result = await putResponse.json();
        console.log("Bid created successfully:", result);
        alert("Bid created successfully!");
        // Optionally reset form or redirect
        setFormData({
          vendor_id: "",
          commodity: "",
          quantity: "",
          price: "",
          state: "",
          district: "",
          start_time: "",
          end_time: "",
        });
      } else {
        const errorData = await putResponse.json();
        if (
          putResponse.status === 400 &&
          errorData.detail === "Vendor already exists. Use PATCH to update bids."
        ) {
          // Vendor exists, so update with PATCH
          const patchResponse = await fetch(url, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToSend),
          });

          if (patchResponse.ok) {
            const updateResult = await patchResponse.json();
            console.log("Bid updated successfully:", updateResult);
            alert("Bid updated successfully!");
          } else {
            const patchError = await patchResponse.json();
            console.error("Error updating bid:", patchError);
            alert(`Failed to update bid: ${patchError.detail}`);
          }
        } else {
          console.error("Error creating bid:", errorData);
          alert(`Failed to create bid: ${errorData.detail}`);
        }
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg-[#101828] h-screen flex justify-center py-24 items-center">
        <div className="p-8 bg-white dark:bg-[#1e2939] rounded-lg shadow-md w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Vendor Information Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.keys(formData).map((key) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {key.replace("_", " ").toUpperCase()}
                  </label>
                  <input
                    type={key.includes("time") ? "datetime-local" : "text"}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-600 rounded-md focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:border-green-500 dark:focus:border-green-400 bg-white dark:bg-[#364153] text-gray-900 dark:text-white"
                    required
                  />
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="w-full md:w-auto flex justify-center items-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300"
            >
              Submit
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VendorForm;