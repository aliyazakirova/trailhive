"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-green-19 bg-opacity-90">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="bg-white rounded-lg p-8 shadow-lg w-96"
      >
        <div className="flex justify-between items-center mb-6 ">
          <h2 className="text-2xl font-semibold text-green-90">Contact Us</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &#x2715;
          </button>
        </div>
        <form>
          <div className="mb-5 ">
            <label className="block text-sm font-medium mb-2 regular-16 text-green-90">Name</label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2s regular-16 text-green-90">Phone Number</label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex justify-center">
          <Button 
            type="button"
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
