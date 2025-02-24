import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    // Close mobile menu on window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <div className="flex gap-2 text-xl font-bold text-gray-800 items-center">
                    <img src="/assets/logo.jpeg" className="w-10" alt="Logo" />
                    <p>SKZ Medical Billing</p>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 text-gray-600 items-center">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-800 font-semibold text-xl" : "hover:text-blue-800 font-semibold text-xl"}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-800 font-semibold text-xl" : "hover:text-blue-800 font-semibold text-xl"}>About Us</NavLink>

                    {/* Services Dropdown (Desktop) */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-800 font-semibold text-xl"
                                    : "hover:text-blue-800 font-semibold text-xl"
                            }
                            aria-expanded={servicesOpen}
                        >
                            Services
                        </NavLink>

                        <div
                            className={`absolute left-0 mt-7 w-64 bg-white shadow-lg rounded-md p-2 transition-all duration-300 transform origin-top 
            ${servicesOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}
                        >
                            <NavLink
                                to="/revenue-cycle"
                                className="block px-4 py-2 text-lg font-semibold hover:text-blue-800 rounded-md"
                            >
                                Revenue Cycle Management
                            </NavLink>
                            <NavLink
                                to="/credentialing"
                                className="block px-4 py-2 text-lg font-semibold hover:text-blue-800 rounded-md"
                            >
                                Credentialing
                            </NavLink>
                            <NavLink
                                to="/medical-coding"
                                className="block px-4 py-2 text-lg font-semibold hover:text-blue-800 rounded-md"
                            >
                                Medical Coding
                            </NavLink>
                            <NavLink
                                to="/billing-services"
                                className="block px-4 py-2 text-lg font-semibold hover:text-blue-800 rounded-md"
                            >
                                Billing & Follow-Up Services
                            </NavLink>
                            <NavLink
                                to="/compliance-report"
                                className="block px-4 py-2 text-lg font-semibold hover:text-blue-800 rounded-md"
                            >
                                Compliance and Reporting
                            </NavLink>
                        </div>
                    </div>


                    <NavLink to="/contact">
                        <button className="bg-blue-600 font-semibold text-xl text-white px-4 py-2 rounded-md hover:bg-blue-800 cursor-pointer">
                            Contact Us
                        </button>
                    </NavLink>
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden bg-blue-800 p-2 rounded-md" onClick={() => setMenuOpen(!menuOpen)}>
                    <img src={menuOpen ? "/assets/close.png" : "/assets/menu.png"} className="w-8" alt="Menu" />
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md py-4">
                    <nav className="flex flex-col px-6 space-y-4">
                        <NavLink className="text-lg font-semibold" to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
                        <NavLink className="text-lg font-semibold" to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink>

                        {/* Mobile Services Dropdown */}
                        <p
                            className="text-lg font-semibold"
                            onClick={() => setServicesOpen(!servicesOpen)}
                        >
                            Services
                        </p>

                        {/* Services Dropdown - Thoda Right Shifted */}
                        <div className={servicesOpen ? "flex flex-col mt-2 ml-6 p-2" : "hidden"}>
                            <NavLink to="/revenue-cycle" onClick={() => [setMenuOpen(false), servicesOpen(false)]} className="block px-4 py-2 font-semibold">Revenue Cycle Management</NavLink>
                            <NavLink to="/credentialing" onClick={() => [setMenuOpen(false), servicesOpen(false)]} className="block px-4 py-2 font-semibold">Credentialing</NavLink>
                            <NavLink to="/medical-coding" onClick={() => [setMenuOpen(false), servicesOpen(false)]} className="block px-4 py-2 font-semibold">Medical Coding</NavLink>
                            <NavLink to="/billing-services" onClick={() => [setMenuOpen(false), servicesOpen(false)]} className="block px-4 py-2 font-semibold">Billing and Follow-Up Services</NavLink>
                            <NavLink to="/compliance-report" onClick={() => [setMenuOpen(false), servicesOpen(false)]} className="block px-4 py-2 font-semibold">Compliance and Reporting</NavLink>
                        </div>

                        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                            <button className="bg-blue-600 text-lg font-semibold text-white px-4 py-2 rounded-md hover:bg-blue-800">
                                Contact Us
                            </button>
                        </NavLink>
                    </nav>
                </div>
            )}

        </header>
    );
};

export default Header;
