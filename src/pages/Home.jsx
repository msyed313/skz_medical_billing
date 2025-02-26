import React from "react";
import { NavLink } from "react-router-dom";
import Started from "../components/Started";
import ServicesComponent from "../components/ServicesComponent";
import Benefit from "../components/Benefit";
import AboutUs from "../components/AboutUs";
function Home() {
  return (
    <>
      <div className="relative h-screen flex items-center bg-cover bg-center" style={{ backgroundImage: `url("/assets/background.jpg")` }}>
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-white opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Make your life simpler with
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0097B2] mt-2">
            SKZ Medical Solutions
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            Best healthcare solutions provider for the Hospitals & Medical industry.
          </p>
          <NavLink to="/services">
            <button
              className="mt-6 bg-[#0097B2] hover:bg-[#006080] cursor-pointer text-white px-6 py-3 rounded-lg text-lg font-medium  transition-all focus:ring-2 focus:ring-blue-400 focus:outline-none "
              aria-label="Find out more about AmityCare Medical Solutions"
            >
              Find Out More
            </button>
          </NavLink>
        </div>
      </div>

      {/* Abouts Us section */}

      <AboutUs />

      {/* Services Section */}

      <ServicesComponent />

      {/* Billing Solution Section */}

      <section className="bg-[#FEF5F0] py-20 px-6 md:px-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/assets/businessman.jpg"
              alt="Professional Billing"
              className="w-full rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2">
            <button className="bg-[#0097B2] text-xl text-white font-semibold py-2 px-6 rounded-full shadow-md">
              What We Do
            </button>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Best Billing Solutions for <br />
              <span className="text-[#0097B2]">Healthcare Providers</span>
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                "Experienced billing experts providing high-quality services and the latest industry insights",
                "Customized solutions designed to meet the specific needs of each practice for maximum efficiency",
                "Leveraging advanced billing technology to simplify workflows and improve precision",
                "Proactively handling claims and follow-ups to guarantee prompt reimbursements",
                "Transparent communication with consistent updates and comprehensive reporting",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="text-[#0097B2] text-xl">✔</span>
                  {item}
                </li>
              ))}
            </ul>
            <NavLink to="/about" >
              <button className="mt-6 bg-[#0097B2] hover:bg-[#006080] cursor-pointer text-white text-xl font-semibold py-2 px-6 rounded-full shadow-md">
                About Us
              </button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* why choose us */}

      <Benefit />

      {/* Contact Section */}

      <Started />

    </>
  );
}

export default Home;
