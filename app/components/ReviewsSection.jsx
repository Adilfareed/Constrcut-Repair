"use client";

import { motion } from "framer-motion";
import { FaStar, FaUserCircle } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 🔄 CHANGE: Updated usernames to common Asian Muslim names
const reviews = [
  { username: "Ahmed Khan", description: "Excellent service! The kitchen renovation was completed on time and the quality exceeded expectations." },
  { username: "Fatima Ali", description: "Very professional team. They handled the complex structural changes smoothly and cleanly." },
  { username: "Zain Malik", description: "Affordable and reliable. Highly recommend for any home remodeling needs. Great craftsmanship!" },
  { username: "Aisha Begum", description: "Great experience! The team was very cooperative and kept us informed through every stage of the build." },
  { username: "Omar Hussain", description: "Timely delivery and top-notch service on our commercial buildout. Will use again for future projects!" },
  { username: "Nadia Iqbal", description: "Best renovation company I've used so far! Beautiful results on the bathroom remodel." },
  { username: "Imran Raza", description: "They provided excellent customer support throughout the planning and construction process." },
  { username: "Samina Bano", description: "Hassle-free experience with professional, skilled staff. Our office looks amazing." },
  { username: "Tariq Mahmood", description: "Highly efficient and cost-effective service, especially considering the high standard of finish." },
  { username: "Sana Chaudhry", description: "Amazing quality and service. 10/10 recommended for their dedication to detail!" },
  { username: "Rizwan Baig", description: "On-time completion and excellent customer service. True professionals." },
  { username: "Mariam Jafar", description: "Smooth experience, and the staff was very helpful in navigating permits and design choices!" },
];

const ReviewsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-12 px-6 md:px-20 text-center">
      <h3 className="text-blue-950  text-4xl font-bold">Client Feedback</h3>
      <h2 className="text-sm md:text-2xl font-bold mt-2 text-gray-800">What Our Clients Say About Us</h2>

      {/* Reviews Carousel */}
      <div className="mt-8">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-4"
            >
              <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg text-left mx-2">
                <div className="flex items-center space-x-3">
                  <FaUserCircle className="text-gray-500 text-4xl" />
                  <h3 className="text-lg font-semibold text-gray-800">{review.username}</h3>
                </div>
                <p className="text-gray-600 mt-2">{review.description}</p>
                <div className="flex mt-3 text-yellow-500">
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewsSection;