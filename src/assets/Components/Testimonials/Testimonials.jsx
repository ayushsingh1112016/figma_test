import React from 'react';
import leftArrow from './left.svg';
import rightArrow from './right.svg'; 
import tynorLogo from './tynor.png';
import pearsonLogo from './pearson.png';
import companyLogo from './company.png';
import image1 from './image1.png';
import image2 from './image2.png';
import companyImage from './company.png';

const testimonialsData = [
  {
    text: "“It was a tough time when they started operation, considering restrictions on road entries, new customers and high expectations of dealers etc , was the big challenges to them. But, the team of AAJ enterprises has been focused on their duties since the 1st day.”",
    name: "Jaspreet Singh",
    position: "Senior Manager",
    company: "Tynor Orthotics Pvt. Ltd.",
    logo: tynorLogo,
    image: image1,
  },
  {
    text: "“AAJ and their employees were very attentive to our needs even during times of minimal notice. For protection of our sales during the relocation we set up parallel shipping operation with AAJ and the agreed upon project time lines were met both from operations and systems standpoint. In future we wont hesitate to avail services of AAJ if required.”",
    name: "Glenn Cipriani",
    position: "VP Distribution",
    company: "Pearson India Education Services Pvt. Ltd.",
    logo: pearsonLogo,
    image: image2,
  },
  {
    text: "“We have processed more than 1 million units from AAJ warehouse in Feb 2022, we just started operations from AAJ in Nov 2021 and this was 4th month of our operations. What makes it even more satisfying is the budgeted outward units for Feb 2022 was close to 800,000 and our TAT achievement was 97.34% against budgeted 95 %, this too in a calendar month with 3 less working days.”",
    name: "Other Client",
    position: "Position",
    company: "Company Pvt. Ltd.",
    logo: companyLogo,
    image: companyImage,
  },
];

const Testimonials = () => {
  return (
    <div className="bg-black text-white py-10 px-6 mx-10">
      <h2 className="text-3xl font-bold text-center mb-8">Client Testimonials</h2>
      <div className="flex justify-end pr-10 py-4 mt-6 space-x-4">
        <button className="arrow-button border-white border-2 p-2 rounded-full hover:bg-customRed hover:border-none">
          <img src={leftArrow} alt="Left Arrow" className="arrow-icon hover:bg-customRed" />
        </button>
        <button className="arrow-button border-white border-2 p-2 rounded-full hover:bg-customRed hover:border-none">
          <img src={rightArrow} alt="Right Arrow" className="arrow-icon" />
        </button>
      </div>
      <div className="flex justify-center items-start space-x-4 overflow-x-auto">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white text-gray-900 p-8 rounded-lg w-[350px] h-[450px] flex flex-col"
          >
            <div className="testimonial-text-container overflow-y-auto h-full p-2 mb-4 scroll-smooth">
              <p className="italic text-sm">{testimonial.text}</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full border-2 border-gray-300"
              />
              <h3 className="font-semibold text-center">{testimonial.name}</h3>
              <p className="text-sm text-center text-gray-600">{testimonial.position}</p>
              <p className="text-xs text-gray-500 text-center">{testimonial.company}</p>
              <img
                src={testimonial.logo}
                alt={`${testimonial.company} logo`}
                className="w-20"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;