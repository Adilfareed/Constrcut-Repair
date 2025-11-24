"use client";
import { useState } from "react";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your submission logic here
  };

  return (
    <div className="bg-white rounded-lg shadow-2xl p-6 sm:p-8 w-full max-w-md mx-auto m-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Get a Free Quote
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
            required
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
            required
          />
        </div>

        <div>
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors text-gray-700"
            required
          >
            <option value="" disabled>
              Select Service
            </option>
            <option value="residential">Residential Construction</option>
            <option value="commercial">Commercial Construction</option>
            <option value="renovation">Renovation & Remodeling</option>
            <option value="design">Architectural Design</option>
            <option value="consultation">Project Consultation</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200"
        >
          Get My Quote
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;
