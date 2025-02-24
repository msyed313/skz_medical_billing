import React from 'react'
import Component from '../components/Component'
import Started from '../components/Started'
import Benefit from '../components/Benefit'

function About() {

    const card = [
        {
            img: 'src/assets/react.svg',
            title: 'Mission',
            des: 'Our mission is to empower healthcare organizations with seamless solutions, enhancing patient care, operational efficiency, and data-driven decision-making'
        },
        {
            img: 'src/assets/react.svg',
            title: 'Vision',
            des: 'We envision a future where advanced technology bridges the gap between healthcare providers and patients, ensuring quality service,  accurate diagnostics, and improved medical outcomes'

        },
        {
            img: 'src/assets/react.svg',
            title: 'HIPAA Complaint',
            des: 'Our platform adheres to the latest HIPAA regulations, ensuring patient data privacy, secure transactions, and compliance with industry standards'

        }
    ]

    return (
        <>
            <Component name="About Us" />
            <section className="bg-[#F9F6F1] py-20 px-4 md:px-12 lg:px-20">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">

                    {/* Left Side - Image */}
                    <div className="w-full lg:h-screen  lg:w-1/2">
                        <img
                            src="src/assets/about.jpg"
                            alt="Businesswoman analyzing reports"
                            className="w-full h-full rounded-lg shadow-lg"
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
                        <button className="mt-6 bg-[#0097B2] text-white text-xl font-semibold py-2 px-6 rounded-full shadow-md">
                            Contact Us
                        </button>
                    </div>

                </div>
            </section>

            {/* Medial Solution Section */}

            <section className="bg-[#F9F6F1] py-20 px-6 md:px-16">
                {/* Header */}
                <div className="text-center">
                    <button className="bg-[#0077B6] text-white px-6 py-2 rounded-full text-xl font-semibold">
                        Medical Solutions
                    </button>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
                        SZK <span className="text-[#0077B6]">x</span> HealthCare
                    </h2>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">

                    {card.map((item, index) => (
                        <div className="text-center">
                            <img
                                src={item.img}
                                alt="Mission"
                                className="w-20 mx-auto"
                            />
                            <h3 className="text-xl font-bold mt-4">{item.title}</h3>
                            <p className="text-gray-600 text-lg mt-2">
                                {item.des}
                            </p>
                        </div>

                    ))}
                </div>
            </section>
           
            {/* Why Choose Us */}

             <Benefit/>

             {/* Contact Section */}

              <Started/>
                
        </>
    )
}

export default About