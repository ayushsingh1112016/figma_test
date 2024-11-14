import React from 'react';
import Logo from './Logo.png';
import LinkedInIcon from './linked.svg';
import InstagramIcon from './insta.svg';
import YouTubeIcon from './yt.svg';

const Footer = () => {
  return (
    <footer className="bg-white border-t py-8 px-10">
      <div className="container mx-auto px-4">
        <div className="flex lg:flex-row lg:justify-between lg:items-start">
          {/* Left Section: Logo and Tagline */}
          <img src={Logo} alt="AAJ Swift Logo" className="h-8" />
          <p className="text-gray-600">
            Optimizing supply chains through warehousing and transportation services
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mx-4">
            <a href="#" className="rounded-full border border-gray-300 p-2 hover:bg-gray-100">
              <img src={LinkedInIcon} alt="LinkedIn" className="h-5 w-5" />
            </a>
            <a href="#" className="rounded-full border border-gray-300 p-2 hover:bg-gray-100">
              <img src={InstagramIcon} alt="Instagram" className="h-5 w-5" />
            </a>
            <a href="#" className="rounded-full border border-gray-300 p-2 hover:bg-gray-100">
              <img src={YouTubeIcon} alt="YouTube" className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
          {/* Center Section: Links */}
          <div className="flex flex-col sm:flex-row lg:justify-around lg:w-full text-gray-800 space-y-6 sm:space-y-0 sm:space-x-6">
            {/* Company Links */}
            <div className="text-center lg:text-left">
              <h3 className="font-bold">Company</h3>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li><a href="/our-story">Our Story</a></li>
                <li><a href="/careers">Careers at AAJ</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>

            {/* Services Links */}
            <div className="text-center lg:text-left">
              <h3 className="font-bold">Services</h3>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li><a href="/services/e-commerce-fulfillment">E Commerce Fulfillment</a></li>
                <li><a href="/services/transport">Transport-AAJ Swift</a></li>
                <li><a href="/services/returns-management">Returns Management</a></li>
                <li><a href="/services/value-added">Value Added Services</a></li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="text-center lg:text-left">
              <h3 className="font-bold">Resources</h3>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li><a href="/resources/case-studies">Case Studies</a></li>
                <li><a href="/resources/blogs">Blogs</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div className="text-center lg:text-left">
              <h3 className="font-bold">Support</h3>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li><a href="/support/track-order">Track Your Order</a></li>
              </ul>
            </div>

            {/* Transportation Network Links */}
            <div className="text-center lg:text-left">
              <h3 className="font-bold">Transportation Network</h3>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li><a href="/transportation/mumbai">Transportation in Mumbai</a></li>
                <li><a href="/transportation/bangalore">Transportation in Bangalore</a></li>
                <li><a href="/transportation/delhi">Transportation in Delhi</a></li>
                <li><a href="/transportation/hyderabad">Transportation in Hyderabad</a></li>
                <li><a href="/transportation/ghaziabad">Transportation in Ghaziabad</a></li>
                <li><a href="/transportation/sonipat-ncr">Transportation in Sonipat NCR</a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-300" />

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row md:justify-between items-center text-gray-600 text-sm">
          <div>&copy;2024 AAJ Swift. All Rights Reserved</div>
          <div className="mt-4 md:mt-0">ISO 9001: 2015, ISO 27001: 2013 Certified Company  CIN: L63090DL2011PLC221234</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
