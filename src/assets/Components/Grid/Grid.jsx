import React from 'react';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
import img5 from './img5.png';
import img6 from './img6.png';
import img7 from './img7.png';
import img8 from './img8.png';

const LogisticsFeatures = () => {
  return (
    <div className="flex flex-col items-center p-6 lg:p-12 bg-black text-white">
      {/* Main Heading */}
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-4">
        Transforming Logistics, Scaling Businesses
      </h1>

      {/* Subheading */}
      <p className="text-center text-gray-300 mb-8">
        Simplifying transportation so you can focus on growing your business.
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center p-4 bg-white text-black rounded-md">
          <img src={img1} alt="Pan-India PTL Transportation" className="h-12 mb-2" />
          <h5 className="text-lg font-medium">Pan-India PTL Transportation</h5>
          <p className="text-sm">Guaranteed on-time delivery across 28,000+ pin codes with minimal ODA.</p>
        </div>
        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center p-4 bg-white text-black rounded-md">
          <img src={img2} alt="Wide Transporter Network" className="h-12 mb-2" />
          <h5 className="text-lg font-medium">Wide Transporter Network</h5>
          <p className="text-sm">Choose from 10+ transporters to ensure the best rates for your shipments.</p>
        </div>
        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center p-4 bg-white text-black rounded-md">
          <img src={img3} alt="Money-Back Guarantee" className="h-12 mb-2" />
          <h5 className="text-lg font-medium">Money-Back Guarantee</h5>
          <p className="text-sm">Promised on-time delivery with a money-back guarantee for delays.</p>
        </div>
        {/* Feature 4 */}
        <div className="flex flex-col items-center text-center p-4 bg-white text-black rounded-md">
          <img src={img4} alt="Real-Time Tracking" className="h-12 mb-2" />
          <h5 className="text-lg font-medium">Real-Time Tracking</h5>
          <p className="text-sm">Full visibility of all your shipments from pickup to delivery.</p>
        </div>
        {/* Feature 5 */}
        <div className="flex flex-col items-center text-center p-4 bg-white text-black rounded-md">
          <img src={img5} alt="Digital POD Access" className="h-12 mb-2" />
          <h5 className="text-lg font-medium">Digital POD Access</h5>
          <p className="text-sm">Seamless access to PODs anytime, eliminating manual processes.</p>
        </div>
        {/* Feature 6 */}
        <div className="flex flex-col items-center text-center p-4 bg-white text-black rounded-md">
          <img src={img6} alt="In-Transit Insurance" className="h-12 mb-2" />
          <h5 className="text-lg font-medium">In-Transit Insurance</h5>
          <p className="text-sm">Optional insurance coverage to protect your goods during transit.</p>
        </div>
        {/* Feature 7 */}
        <div className="flex flex-col items-center text-center p-4 bg-white text-black rounded-md">
          <img src={img7} alt="Fast Customer Support" className="h-12 mb-2" />
          <h5 className="text-lg font-medium">Fast Customer Support</h5>
          <p className="text-sm">Reliable customer service to resolve queries and ensure smooth operations.</p>
        </div>
        {/* Feature 8 */}
        <div className="flex flex-col items-center text-center p-4 bg-white text-black rounded-md">
          <img src={img8} alt="Access to TMS" className="h-12 mb-2" />
          <h5 className="text-lg font-medium">Access to TMS</h5>
          <p className="text-sm">Get full access to our Transport Management System (TMS) to manage bookings, track shipments, and gain real-time visibility on a single platform.</p>
        </div>
      </div>
    </div>
  );
};

export default LogisticsFeatures;
