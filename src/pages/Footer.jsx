import React from "react";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import logo from "../assets/react.svg"; // Replace with your actual logo
import { Link } from "react-router-dom";

function Footer() {
    const links = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "Contact Us", link: "/contact" },
        { name: "Privacy Policy", link: "/privacy-policy" },
    ];

    return (
        <footer className="bg-gray-100 text-gray-700 py-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Company Info */}
                <div className="flex flex-col md:items-start  md:text-left">
                    <img src={logo} alt="Company Logo" className="w-32 h-auto mb-4" />
                    <p className="text-lg text-justify leading-relaxed">
                        Our focus is on precision, efficiency, and personalized service. We
                        are dedicated to helping your practice succeed, allowing you to
                        concentrate on delivering exceptional care to your patients.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col md:items-center">
                    <h3 className="font-semibold text-2xl mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link to={link.link} className="hover:text-blue-600 transition text-lg">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="flex flex-col md:items-start">
                    <h3 className="font-semibold text-2xl mb-3">Contact</h3>
                    <p className="text-lg my-2">6860 North Dallas Pkwy, Suite 200</p>
                    <p className="text-lg my-2">Plano, TX 75024</p>
                    <p className="text-lg my-2">📞 (469) 722-7402</p>
                    <p className="text-lg my-2">✉️ info@amityrcm.com</p>

                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-4">
                        <Link to="#" className="transition-transform hover:scale-110">
                            <img src={facebook} alt="Facebook" className="w-8 h-8" />
                        </Link>
                        <Link to="#" className="transition-transform hover:scale-110">
                            <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
                        </Link>
                        <Link to="#" className="transition-transform hover:scale-110">
                            <img src={instagram} alt="Instagram" className="w-8 h-8" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-gray-500 mt-8 border-t pt-4">
                Copyright © {new Date().getFullYear()} | All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;
