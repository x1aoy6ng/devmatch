import React from 'react';
import { SiHotelsdotcom } from "react-icons/si";

const navButton = "cursor-pointer"

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap gap-12">
                    {/* Company Info */}
                    <div className="flex-1 min-w-[200px] mb-6">
                        <h4 className="text-4xl font-bold mb-5 flex">SMTG <SiHotelsdotcom fontSize={28} className={`self-center ${navButton} mx-3`}/></h4>
                        <p className="text-gray-400">
                            We are your go-to platform for booking concert tickets. Discover your favorite artists and get the best seats at the best prices.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex-1.5 min-w-[200px] mb-6">
                        <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="/search" className="text-gray-400 hover:text-white">Search</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex-1 min-w-[200px] mb-6">
                        <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
                        <p className="text-gray-400">
                            Email: <a href="mailto:support@concerts.com" className="hover:text-white">support@concerts.com</a>
                        </p>
                        <p className="text-gray-400">Phone: (+60) 18 787-9898</p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-600 mt-8 pt-4 text-center">
                    <p className="text-gray-400 text-sm">© 2024 SMTG Concert Booking. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
