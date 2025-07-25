import CreditCardChecker from "../components/CreditCardChecker";
import Navbar from "../components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="m-3 min-h-screen bg-black text-white">
      <Navbar />
      <CreditCardChecker />
    </div>
  );
};

export default page;
