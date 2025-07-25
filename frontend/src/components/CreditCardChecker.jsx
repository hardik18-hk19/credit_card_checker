"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import axiosInstance from "../lib/axios";
import { toast } from "sonner";

const CreditCardChecker = () => {
  const [cardNumber, setCardNumber] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;

    setCardNumber(value);
  };

  const validateCardNumber = async () => {
    try {
      const response = await axiosInstance.post("/validate-card", {
        cardNumber: cardNumber.trim(),
      });

      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }

      const suggestion = response.data?.suggestion;
      if (suggestion) {
        toast.info(suggestion);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to validate card number"
      );
    }
  };

  return (
    <div className="flex items-center justify-center p-4 bg-black min-h-[calc(100vh-80px)]">
      <div className="w-full max-w-md p-6 bg-gray-900 border border-gray-700 rounded-lg">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">
            Credit Card Validator
          </h1>
          <p className="text-gray-400">Enter your card number</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Card Number
            </label>
            <Input
              placeholder="1234567890123456"
              className="w-full bg-gray-800 border-gray-600 text-white"
              onChange={handleInputChange}
              value={cardNumber}
              maxLength="16"
              type="text"
            />
          </div>

          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2"
            onClick={validateCardNumber}
            type="button"
          >
            Validate Card
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreditCardChecker;
