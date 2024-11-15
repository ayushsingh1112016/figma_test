import React from "react";
import { Link } from 'react-router-dom'; // Import Link
import logo from "./hdr_logo_image.png";
import location from "./hdr_location.svg";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-10">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo Section as Home Link */}
        <div className="flex items-center p-0 ">
          <Link to="/"> {/* Logo now acts as Home button */}
            <img src={logo} alt="AAJ Swift Logo" className="h-8" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-customRed">Home</Link> {/* Link to Home page */}
          <a href="#" className="text-gray-700 hover:text-customRed">Company</a>
          <a href="#" className="text-gray-700 hover:text-customRed">Calculate Shipping Cost</a>
          <a href="#" className="text-gray-700 hover:text-customRed">Blogs</a>
          <Link to="/contact" className="text-gray-700 hover:text-customRed">Contact Us</Link> {/* Link to Contact Us page */}
        </nav>

        {/* Right Section (Track Shipment and Login Button) */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-customRed flex items-center space-x-1">
            {/* <i className="fas fa-map-marker-alt"></i> */}
            <span className="underline">Track Shipment</span>
            <img src={location} alt="Location icon" />
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
