import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const CreditCardChecker = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-black">
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
              placeholder="1234 5678 9012 3456"
              className="w-full bg-gray-800 border-gray-600 text-white"
            />
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2">
            Validate Card
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreditCardChecker;
