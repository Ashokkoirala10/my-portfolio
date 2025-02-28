import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toast.success("Form successfully submitted!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      description: "",
    });
  };

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col px-6 lg:px-20 py-16 pb-20 relative">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-white mb-6">
        Get in <span className="text-[#00A8CD]">Touch</span>
      </h1>

      {/* Contact Form */}
      <div className="bg-opacity-30 backdrop-blur-lg rounded-lg p-8 lg:p-12 w-full max-w-7xl mx-auto border border-[#00A8CD] shadow-lg shadow-[#00A8CD]/30">
        <form onSubmit={handleSubmit} className="flex flex-col">
          {/* Name Section */}
          <div className="flex flex-col sm:flex-row justify-between mb-4">
            <input 
              type="text" name="firstName" value={formData.firstName} onChange={handleInputChange}
              placeholder="First Name"
              className="p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A8CD] border-b-2 border-[#00A8CD] w-full sm:w-1/2 sm:mr-2 mb-2 sm:mb-0"
            />
            <input 
              type="text" name="lastName" value={formData.lastName} onChange={handleInputChange}
              placeholder="Last Name"
              className="p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A8CD] border-b-2 border-[#00A8CD] w-full sm:w-1/2 sm:ml-2"
            />
          </div>

          {/* Email & Phone */}
          <div className="flex flex-col sm:flex-row justify-between mb-4">
            <input 
              type="email" name="email" value={formData.email} onChange={handleInputChange}
              placeholder="Email"
              className="p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A8CD] border-b-2 border-[#00A8CD] w-full sm:w-1/2 sm:mr-2 mb-2 sm:mb-0"
            />
            <input 
              type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
              placeholder="Phone Number"
              className="p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A8CD] border-b-2 border-[#00A8CD] w-full sm:w-1/2 sm:ml-2"
            />
          </div>

          {/* Description */}
          <textarea 
            rows="4" name="description" value={formData.description} onChange={handleInputChange}
            placeholder="Write your message..."
            className="p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A8CD] mb-4 border-2 border-[#00A8CD]"
          />

          {/* Submit Button */}
          <button 
            type="submit"
            className="mt-4 bg-[#00A8CD] text-white font-bold py-3 rounded-md hover:bg-[#0088A8] transition duration-300 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Decorative Gradient Border */}
      <div className="w-full h-1 bg-gradient-to-l from-transparent to-[#00A8CD] mt-10"></div>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
