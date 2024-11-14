import React, { useState } from 'react';

const RegisterForm = () => {
    const [isGST, setIsGST] = useState(false);
    const [gstNumbers, setGstNumbers] = useState(['']); // Array to hold multiple GST numbers

    // Function to handle adding a new GST number field
    const addGstField = () => {
        setGstNumbers([...gstNumbers, '']);
    };

    // Function to handle change in GST number fields
    const handleGstChange = (index, value) => {
        const newGstNumbers = [...gstNumbers];
        newGstNumbers[index] = value;
        setGstNumbers(newGstNumbers);
    };

    return (
        <div className="w-full max-w-md p-8 bg-white rounded-lg">
                <h1 className="text-2xl font-semibold text-center mb-6">Register</h1>
                <form className="space-y-4">
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Id</label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-customRed focus:border-customRed"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Mobile Number Field */}
                    <div>
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile No.</label>
                        <input
                            type="tel"
                            id="mobile"
                            required
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-customRed focus:border-customRed"
                            placeholder="Enter your mobile number"
                        />
                    </div>

                    {/* GST Radio Buttons */}
                    <div>
                        <p className="text-sm font-medium text-gray-700">Are you a business which needs GST invoice</p>
                        <div className="flex items-center justify-center space-x-4 mt-2">
                            <button
                                type="button"
                                className={`px-4 py-2 border rounded-md ${isGST ? 'bg-customRed text-white' : 'bg-gray-100 text-gray-700'}`}
                                onClick={() => setIsGST(true)}
                            >
                                Yes
                            </button>
                            <button
                                type="button"
                                className={`px-4 py-2 border rounded-md ${!isGST ? 'bg-customRed text-white' : 'bg-gray-100 text-gray-700'}`}
                                onClick={() => setIsGST(false)}
                            >
                                No
                            </button>
                        </div>
                    </div>

                    {/* Conditional Fields for GST Information */}
                    {isGST && (
                        <>
                            <div>
                                <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">Company Name</label>
                                <input
                                    type="text"
                                    id="company-name"
                                    className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-customRed focus:border-customRed"
                                    placeholder="Enter your company name"
                                />
                            </div>

                            <div>
                                <label htmlFor="company-address" className="block text-sm font-medium text-gray-700">Company Address</label>
                                <input
                                    type="text"
                                    id="company-address"
                                    className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-customRed focus:border-customRed"
                                    placeholder="Enter your company address"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                                    <input
                                        type="text"
                                        id="state"
                                        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-customRed focus:border-customRed"
                                        placeholder="State"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">Pincode</label>
                                    <input
                                        type="text"
                                        id="pincode"
                                        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-customRed focus:border-customRed"
                                        placeholder="Pincode"
                                    />
                                </div>
                            </div>

                            {/* GST Number Fields */}
                            {gstNumbers.map((gst, index) => (
                                <div key={index}>
                                    <label htmlFor={`gst-number-${index}`} className="block text-sm font-medium text-gray-700">
                                        GST Number {index + 1}
                                    </label>
                                    <input
                                        type="text"
                                        id={`gst-number-${index}`}
                                        value={gst}
                                        onChange={(e) => handleGstChange(index, e.target.value)}
                                        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-customRed focus:border-customRed"
                                        placeholder="Enter your GST number"
                                    />
                                </div>
                            ))}

                            {/* Button to Add New GST Field */}
                            <button
                                type="button"
                                onClick={addGstField}
                                className="w-full py-2 mt-2 text-customRed border border-customRed rounded-md hover:bg-customRed hover:text-white"
                            >
                                Add New GST
                            </button>
                        </>
                    )}

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full py-2 mt-6 text-white bg-customRed rounded-md hover:bg-customRed"
                    >
                        Register
                    </button>
                </form>

                {/* Terms and Conditions */}
                <p className="mt-4 text-center text-sm text-gray-500">
                    By continuing you agree to the <a href="#" className="text-customRed hover:underline">Terms & Conditions</a>
                </p>
            </div>
        // <div className="flex items-center justify-center min-h-screen bg-gray-50">
            
        // </div>
    );
};

export default RegisterForm;
