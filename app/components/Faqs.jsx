"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  { question: "What is a chiller van or truck used for?", answer: "Chiller vans and trucks are designed to transport perishable goods, ensuring they remain at the right temperature during transit, such as food, pharmaceuticals, and flowers." },
  { question: "How do I know which chiller van or truck size to rent?", answer: "Our fleet includes a range of sizes from 3.5 tons to 10 tons. We can assist you in selecting the appropriate size based on your cargo volume and weight." },
  { question: "What types of goods can be transported in a chiller van or truck?", answer: "Chiller vehicles are ideal for transporting perishable items such as fresh food, dairy products, flowers, and temperature-sensitive pharmaceuticals." },
  { question: "How do I maintain the right temperature in a chiller van or truck?", answer: "Our chiller vans and trucks are equipped with state-of-the-art refrigeration systems. We ensure that all vehicles are regularly maintained and monitored to guarantee optimal performance.     " },
  { question: "Are the chiller vans and trucks regularly serviced?", answer: "Yes, our fleet is regularly serviced to ensure reliability, safety, and efficiency. We prioritize the maintenance of refrigeration systems to keep your goods at the perfect temperature." },
  { question: "Can I rent a chiller van or truck for a one-time delivery?", answer: "Definitely! We offer flexible rental options, including one-time rentals, to meet the needs of businesses with occasional transport requirements" },
  { question: "What rental options are available for chiller vans and trucks?", answer: "We provide daily, weekly, monthly, and long-term rental plans to ensure you have the flexibility to choose the best option for your business." },
  { question: "How can I book a chiller van or truck rental in Dubai?", answer: "Booking is easy! Contact us via phone, email, or use our user-friendly online booking system to reserve your chiller van or truck." },
  { question: "Are your rental services available outside of Dubai?", answer: "Yes, we provide rentals to various areas around Dubai, including Abu Dhabi, Sharjah, and other surrounding locations. Contact us for more details." },
  { question: "Can I add additional services like a driver with my rental?", answer: "Yes, we offer driver-inclusive rental options to make your transport experience hassle-free. Speak with our team for further details." },
  { question: "What are the payment options for rentals?", answer: "We accept various payment methods, including cash, card payments, and bank transfers, to ensure convenience for all our clients." },
  { question: "Is there a minimum rental period for chiller trucks?", answer: "The minimum rental period varies by vehicle type and rental plan. Contact us for specific details based on your requirements." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-12 px-6 md:px-20">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-6 text-gray-800">
        FAQ related to Chiller Van for rent in Dubai
      </h2>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50"
            >
              <span className="text-lg font-semibold text-gray-800 ">{faq.question}</span>
              {openIndex === index ? <FaMinus className="text-gray-600" /> : <FaPlus className="text-gray-600" />}
            </button>

            {openIndex === index && (
              <div className="bg-gray-50 p-4 border border-gray-300 border-t-0 rounded-b-lg shadow-sm">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
