import React from 'react';
import combinedImage from './combinedImage.png'; // The compiled image with all logos and the courier person

const TransporterBanner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6 lg:p-12 bg-white">
      {/* Left Section with Text */}
      <div className="flex flex-col items-start md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Is Your Business Held Hostage by a Single Transporter?
        </h2>
        <p className="text-gray-700 mb-6">
          With our wide range of transporter network, you gain the flexibility to switch and save on every shipment.
        </p>
        <button className="px-6 py-2 bg-customRed text-white font-medium rounded-md hover:bg-red-900">
          Sign-up Now
        </button>
      </div>

      {/* Right Section with Image */}
      <div className="md:w-1/2 flex justify-center">
        <img src={combinedImage} alt="Courier Person with Logos" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default TransporterBanner;
