import React from "react"; // Replace with your actual logo
import { Link } from "react-router-dom";

function Footer() {
    const links = [
        { name: "Home", link: "/home" },
        { name: "About Us", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "Contact Us", link: "/contact" },
        { name: "Privacy Policy", link: "/privacy-policy" },
    ];

    return (
        <footer className=" text-gray-700 py-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Company Info */}
                <div className="flex flex-col md:items-start  md:text-left">
                    <img src="/assets/logo.png" alt="Company Logo" className="w-32 h-auto mb-4" loading="lazy"/>
                    <p className="text-lg text-justify leading-relaxed">
                    We prioritize accuracy, efficiency, and customized solutions, ensuring your practice thrives while you focus on providing outstanding patient care
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
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=5729+Savoy+Dr,+Houston,+TX+77036"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0097B2] hover:text-[#006080]"
                    >
                        <p className="my-2">5729 Savoy Dr, Houston, TX 77036</p>
                    </a>


                    <a href="tel:+14697336551" className="text-[#0097B2] hover:text-[#006080]"><p className=" my-2">📞 (469) 733-6551</p></a>
                    <a href="mailto:skzmedicalbilling@gmail.com"
                        className="text-[#0097B2] hover:text-[#006080]">
                        <p className=" my-2">✉️ skzmedicalbilling@gmail.com</p>
                    </a>

                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-4">
                        {/* <Link to="#" className="transition-transform hover:scale-110">
                            <img src="/assets/facebook.png" alt="Facebook" className="w-8 h-8" />
                        </Link> */}
                        <Link to="https://www.linkedin.com/in/skz-billing-9b5352353/" className="transition-transform hover:scale-110">
                            <img src="/assets/linkedin.png" alt="LinkedIn" className="w-8 h-8" loading="lazy"/>
                        </Link>
                        <Link to="https://www.instagram.com/skzmedbilling/" className="transition-transform hover:scale-110">
                            <img src="/assets/instagram.png" alt="Instagram" className="w-8 h-8" loading="lazy"/>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-lg text-gray-500 mt-8 border-t pt-4">
                Copyright © {new Date().getFullYear()} | All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;
