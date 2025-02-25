import React from 'react'
import { NavLink } from 'react-router-dom'

function AboutUs() {
    return (
        <section className="bg-[#F9F6F1] py-20 px-4 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">

                {/* Left Side - Image */}
                <div className="w-full   lg:w-1/2">
                    <img
                        src="/assets/businesswoman.jpg"
                        alt="Businesswoman analyzing reports"
                        className="w-full  rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
                        loading="lazy"
                    />
                </div>

                {/* Right Side - Text */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#004F7C] ">
                        About <span className="text-[#0097B2]">SKZ Medical Billing Solutions</span>
                    </h2>
                    <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                        At SKZ, we understand the intricacies of medical billing and the challenges
                        healthcare providers face in managing revenue cycles. With years of experience, our team of
                        experts is dedicated to ensuring that your practice runs smoothly, allowing you to focus on the
                        clinical care that matters most while we expertly handle the financial side. To provide you with
                        exceptional service and value, we offer a competitive billing rate of just 3.5%, along with coding
                        services at an efficient rate of 5%. Additionally, we offer credentialing services at a flat rate of
                        $300 per application, ensuring that your practice stays compliant and well-positioned for success.
                    </p>
                    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                        We offer a <strong>full-cycle Revenue Cycle Management (RCM)</strong>  solution, from <strong>credentialing and coding</strong> to claims submission,<strong> denial management</strong>, and <strong>payment posting</strong>. Our comprehensive
                        services are tailored to meet the needs of healthcare providers across various specialties, from
                        small private practices to large healthcare institutions.
                    </p>
                    <NavLink to="/contact">
                        <button className="mt-6 bg-[#0097B2] hover:bg-[#006080] text-white text-xl font-semibold py-2 px-6 rounded-full shadow-md cursor-pointer">
                            Contact Us
                        </button>
                    </NavLink>
                </div>

            </div>
        </section>
    )
}

export default AboutUs