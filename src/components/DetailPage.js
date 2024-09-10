"use client";

import React from "react";

// Modal Component
const DetailPage = ({ responseData, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      {/* Background Overlay with Glassy Effect */}
      <div className="fixed inset-0 bg-gray-900 bg-opacity-80 backdrop-blur-md"></div>
      {/* Modal Container */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-white hover:text-gray-700 text-4xl"
      >
        &times;
      </button>
      <div className="bg-white bg-opacity-90 backdrop-blur-sm p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 h-[90%] relative overflow-y-scroll overflow-x-scroll">
        <h2 className="text-xl font-semibold mb-4">Message Summary</h2>
        <p>{responseData.Message}</p>

        <h3 className="text-lg font-semibold mt-4 mb-2">Recipient Statuses</h3>
        <table className="w-full bg-transparent border border-gray-300">
          <thead>
            <tr>
              <th className="border-b py-2 px-4 text-left">Number</th>
              <th className="border-b py-2 px-4 text-left">Status</th>
              <th className="border-b py-2 px-4 text-left">Cost</th>
              <th className="border-b py-2 px-4 text-left">Message ID</th>
              <th className="border-b py-2 px-4 text-left">Status Code</th>
            </tr>
          </thead>
          <tbody>
            {responseData.Recipients.map((recipient, index) => (
              <tr key={index}>
                <td className="border-b py-2 px-4">{recipient.number}</td>
                <td className="border-b py-2 px-4">{recipient.status}</td>
                <td className="border-b py-2 px-4">{recipient.cost}</td>
                <td className="border-b py-2 px-4">{recipient.messageId}</td>
                <td className="border-b py-2 px-4">{recipient.statusCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailPage;
