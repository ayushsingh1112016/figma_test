import React from 'react';
import contactIcon1 from './contactIcon1.png';
import contactIcon2 from './contactIcon2.png';
import contactIcon3 from './contactIcon3.png';
import partner1 from './image1.png';
import partner2 from './image2.png';
import partner3 from './image3.png';
import partner4 from './image4.png';
import partner5 from './image5.png';
import partner6 from './image6.png';
import partner7 from './image7.png';

const ContactUsPage = () => {
  return (
    <div className="px-4 py-12 lg:py-24 bg-white">
      {/* Contact and Form Section */}
      <div className="flex flex-col  lg:flex-row gap-10 justify-center items-start">
        {/* Left Contact Details */}
        <div className="flex flex-col bg-white p-8 pr-20  rounded-lg w-full lg:w-1/3">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            Let’s Empower Your Supply Chain with Seamless and Reliable Logistics Solutions
          </p>
          <div className="flex items-start gap-4 mb-4 py-5">
            <img src={contactIcon1} alt="Icon" className=" h-10" />
            <p className="text-gray-700">Get top-rated transporters at unbeatable price</p>
          </div>
          <div className="flex items-start gap-4 mb-4 py-5">
            <img src={contactIcon2} alt="Icon" className=" h-10" />
            <p className="text-gray-700">95% Guaranteed on-time Delivery</p>
          </div>
          <div className="flex items-start gap-4 py-5">
            <img src={contactIcon3} alt="Icon" className=" h-10" />
            <p className="text-gray-700">Live Shipment Tracking and timely updates</p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-1/3 bg-[#F8F2F2] p-8  rounded-lg">
          <h2 className="text-lg font-semibold mb-2">
            Fill the form and our sales representative will call you back within 24 hours
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customRed"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customRed"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customRed"
            />
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customRed"
            >
              <option value="">Contact Support</option>
              <option value="Sales">Sales</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Other">Other</option>
            </select>
            <textarea
              placeholder="Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customRed"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-customRed text-white py-3 rounded-lg hover:bg-red-700 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Partners Section */}
      <div className="mt-16 overflow-hidden">
        <h2 className="text-center text-3xl font-bold mb-6">Logistics Partner for Exponential Growth</h2>
        <p className="text-center text-gray-600 mb-12">Trusted by top brands and small businesses alike</p>
        
        {/* Scrolling container */}
        <div className="flex items-center space-x-8 animate-scroll">
          <img src={partner1} alt="Partner Logo" className="h-16 w-auto" />
          <img src={partner2} alt="Partner Logo" className="h-16 w-auto" />
          <img src={partner3} alt="Partner Logo" className="h-16 w-auto" />
          <img src={partner4} alt="Partner Logo" className="h-16 w-auto" />
          <img src={partner5} alt="Partner Logo" className="h-16 w-auto" />
          <img src={partner6} alt="Partner Logo" className="h-16 w-auto" />
          <img src={partner7} alt="Partner Logo" className="h-16 w-auto" />
          {/* Repeat logos for smooth scrolling */}
          <img src={partner1} alt="Partner Logo" className="h-16 w-auto" />
          <img src={partner2} alt="Partner Logo" className="h-16 w-auto" />
          <img src={partner3} alt="Partner Logo" className="h-16 w-auto" />
          <img src={partner4} alt="Partner Logo" className="h-16 w-auto" />
          <img src={partner5} alt="Partner Logo" className="h-16 w-auto" />
          <img src={partner6} alt="Partner Logo" className="h-16 w-auto" />
          <img src={partner7} alt="Partner Logo" className="h-16 w-auto" />
        </div>
      </div>

    </div>
  );
};

export default ContactUsPage;
