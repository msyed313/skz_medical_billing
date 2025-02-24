import React from "react";
import background from "../assets/background.jpg";
import { NavLink } from "react-router-dom";
import Started from "../components/Started";
import ServicesComponent from "../components/ServicesComponent";

function Home() {

  

  return (
    <>
      <div className="relative h-screen flex items-center bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-white opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Make your life simpler with
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mt-2">
            SZK Medical Solutions
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            Best healthcare solutions provider for the Hospitals & Medical industry.
          </p>
          <button
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all focus:ring-2 focus:ring-blue-400 focus:outline-none cursor-pointer"
            aria-label="Find out more about AmityCare Medical Solutions"
          >
            Find Out More
          </button>
        </div>
      </div>

      {/* Abouts Us section */}

      <section className="bg-[#F9F6F1] py-20 px-4 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">

          {/* Left Side - Image */}
          <div className="w-full lg:h-screen lg:w-1/2">
            <img
              src="src/assets/about.jpg"
              alt="Businesswoman analyzing reports"
              className="w-full h-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Right Side - Text */}
          <div className="w-full lg:w-1/2">
            <span className="inline-block bg-[#0097B2] text-white px-4 py-1 rounded-full text-2xl font-semibold">
              Who We Are
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#004F7C] mt-4">
              About <span className="text-[#0097B2]">SKZ Medical Billing Solutions</span>
            </h2>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              At SKZ, we understand the intricacies of medical billing and the challenges
              healthcare providers face in managing revenue cycles. With years of experience, our team of
              experts is dedicated to ensuring that your practice runs smoothly, allowing you to focus on the
              clinical care that matters most while we expertly handle the financial side. To provide you with
              exceptional service and value, we offer a competitive billing rate of just 3.5%, along with coding
              services at an efficient rate of 5%. Additionally, we offer credentialing services at a flat rate of
              $300 per application, ensuring that your practice stays compliant and well-positioned for success
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              We offer a full-cycle Revenue Cycle Management (RCM) solution, from credentialing and
              coding to claims submission, denial management, and payment posting. Our comprehensive
              services are tailored to meet the needs of healthcare providers across various specialties, from
              small private practices to large healthcare institutions
            </p>
          </div>

        </div>
      </section>

      {/* Services Section */}

      <ServicesComponent/>

      {/* Billing Solution Section */}

      <section className="bg-[#FEF5F0] py-20 px-6 md:px-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="src/assets/businessman.jpg"
              alt="Professional Billing"
              className="w-full rounded-lg shadow-lg"
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
                "Certified billing professionals delivering top-notch services and industry updates.",
                "Tailored services to meet each practice's unique needs for optimal outcomes.",
                "Utilizing cutting-edge billing software to streamline processes and enhance accuracy.",
                "Actively managing claims and follow-ups to ensure timely payments.",
                "Clear communication with regular updates and detailed reports.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="text-[#0097B2] text-xl">✔</span>
                  {item}
                </li>
              ))}
            </ul>
            <button className="mt-6 bg-[#0097B2] text-white text-xl font-semibold py-2 px-6 rounded-full shadow-md">
              About Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}

      <Started />

    </>
  );
}

export default Home;
