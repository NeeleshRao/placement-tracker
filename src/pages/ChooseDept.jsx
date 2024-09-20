import React, { useEffect, useState } from "react";
import "../App.css";

const ChooseDept = ({ setDept }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setDept(e.target.value);
  };

  return (
    <div className="container py-5">
      <label htmlFor="pet-select">Choose a Department:</label>

      <select onChange={(e) => handleChange(e)} name="pets" id="pet-select">
        <option value="all">--Please choose an option--</option>
        <option value="CSE">CSE</option>
        <option value="ISE">ISE</option>
        <option value="AIML">AI/ML</option>
        <option value="ECE">ECE</option>
        <option value="EEE">EEE</option>
        <option value="EI">EI</option>
      </select>
    </div>
  );
};

export default ChooseDept;
