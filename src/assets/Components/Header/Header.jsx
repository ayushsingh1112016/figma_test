import React from "react";
import logo from "./hdr_logo_image.png";
import location from "./hdr_location.svg"
const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-10">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo Section */}
        <div className="flex items-center p-0 ">
          <a href="#">
            <img src={logo} alt="AAJ Swift Logo" className="h-8" />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-customRed">Company</a>
          <a href="#" className="text-gray-700 hover:text-customRed">Calculate Shipping Cost</a>
          <a href="#" className="text-gray-700 hover:text-customRed">Blogs</a>
          <a href="#" className="text-gray-700 hover:text-customRed">Contact Us</a>
        </nav>

        {/* Right Section (Track Shipment and Login Button) */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-customRed flex items-center space-x-1">
            {/* <i className="fas fa-map-marker-alt"></i> */}
            <span className="underline">Track Shipment</span>
            <img src = {location}/>
          </a>
          <a href="#" className="bg-customRed text-white py-2 px-10 rounded-md hover:bg-red-800">
            Login
          </a>
        </div>

        
      </div>
    </header>
  );
};

export default Header;
