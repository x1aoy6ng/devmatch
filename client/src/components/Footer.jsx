import React from 'react';
import { SiHotelsdotcom } from "react-icons/si";
import { MdEmail, MdPhone } from "react-icons/md";

const navButton = "cursor-pointer";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap gap-12">
                    {/* SMTG Section */}
                    <div className="flex-1 min-w-[200px] mb-6 mt-10">
                        <h4 className="text-4xl font-bold mb-5 flex items-center">
                            SMTG
                            <SiHotelsdotcom fontSize={28} className={`ml-3 ${navButton}`} />
                        </h4>
                        <p className="text-gray-400">
                            We are your go-to platform for booking concert tickets. Discover your favorite artists and get the best seats at the best prices.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="flex-1 min-w-[200px] mb-6 mt-10 ml-20">
                        <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="/search" target='_blank' className="text-gray-400 hover:text-white">Search</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Us Section */}
                    <div className="flex-1 min-w-[200px] mb-6 mt-10">
                        <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
                        <p className="text-gray-400 flex items-center mb-2">
                            <MdEmail className="mr-2 mt-1" /> 
                            <a href="mailto:support@smtg.com.my" className="hover:text-white">support@smtg.com.my</a>
                        </p>
                        <p className="text-gray-400 flex items-center">
                            <MdPhone className="mr-2 mt-1" />
                            (03) - 6688 8866
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-600 mt-8 pt-4 text-center">
                    <p className="text-gray-400 text-sm mt-5">© 2024 SMTG Concert Booking. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
