import React from 'react';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import companiesImage from './companies.png';

const LogisticsInfo = () => {
  return (
    <div className="flex flex-col items-center lg:items-start lg:w-1/2 p-6 lg:p-12">
      {/* Main Heading */}
      <h1 className="text-3xl lg:text-4xl font-bold text-center lg:text-left mb-4">
        More Than Just Logistics: <br />
        Your Growth Partner
      </h1>

      {/* Subheading */}
      <p className="text-center lg:text-left text-gray-600 mb-8">
        Our seamless logistics solutions empower brands to grow faster and smarter.
        Let's move your business forward.
      </p>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center p-4">
          <img src={img1} alt="Top-rated transporters" className="h-12 mb-2" />
          <h5 className="text-lg font-medium">
            Get top-rated transporters at unbeatable price
          </h5>
        </div>
        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center p-4 rounded-md" style={{ backgroundColor: '#F8F2F2' }}>
          <img src={img2} alt="Guaranteed on-time delivery" className="h-12 mb-2" />
          <h5 className="text-lg font-medium">
            95% Guaranteed on-time Delivery
          </h5>
        </div>
        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center p-4">
          <img src={img3} alt="Live shipment tracking" className="h-12 mb-2" />
          <h5 className="text-lg font-medium">
            Live Shipment Tracking and timely updates
          </h5>
        </div>
      </div>

      {/* Partner Logos Section */}
      <div className="text-center lg:text-left">
        <h2 className="text-2xl font-semibold mb-4">Partner with the Best</h2>
        <p className="text-gray-500 mb-8">
          Trusted by top brands and small businesses alike.
        </p>
        {/* Use the single image with all logos */}
        <img src={companiesImage} alt="Partner Logos" className="mx-auto lg:mx-0" />
      </div>
    </div>
  );
};

export default LogisticsInfo;
