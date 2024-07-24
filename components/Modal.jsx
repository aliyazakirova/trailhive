"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const Modal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      parent: { database_id: "a6f42c17d6eb4c7eb65cf3fe29f0ad2e" },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Phone: {
          rich_text: [
            {
              text: {
                content: phoneNumber,
              },
            },
          ],
        },
      },
    };

    try {
      const response = await fetch("https://api.notion.com/v1/pages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer secret_K5gF4HY3ifqy6k6T9FYnPVYtYQkUSLQ1wiXfqcICFYT`,
          "Notion-Version": "2022-06-28",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Handle success (e.g., close modal, show success message)
        onClose();
        alert("Submission successful!");
      } else {
        // Handle error
        const errorData = await response.json();
        console.error("Error:", errorData);
        alert("Submission failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during submission!");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-green-19 bg-opacity-90">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="bg-white rounded-lg p-8 shadow-lg w-96"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-green-90">Contact Us</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &#x2715;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2 regular-16 text-green-90">Name</label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2 regular-16 text-green-90">Phone Number</label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center">
            <Button 
              type="submit"
              title="Submit"
              variant="btn_dark_green"
            />
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Modal;
