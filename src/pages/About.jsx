import React from 'react'
import Component from '../components/Component'
import Started from '../components/Started'
import Benefit from '../components/Benefit'
import AboutUs from '../components/AboutUs'
import Industries from '../components/Industries'

function About() {

    const card = [
        {
            img: '/assets/mission.png',
            title: 'Mission',
            des: 'Our mission is to empower healthcare organizations with seamless solutions, enhancing patient care, operational efficiency, and data-driven decision-making'
        },
        {
            img: '/assets/visionary.png',
            title: 'Vision',
            des: 'We envision a future where advanced technology bridges the gap between healthcare providers and patients, ensuring quality service,  accurate diagnostics, and improved medical outcomes'

        },
        {
            img: '/assets/report.png',
            title: 'HIPAA Complaint',
            des: 'Our platform adheres to the latest HIPAA regulations, ensuring patient data privacy, secure transactions, and compliance with industry standards'

        }
    ]

    return (
        <>
            <Component name="About Us" />

            <AboutUs />

            {/* Medial Solution Section */}

            <section className="bg-[#F9F6F1] py-20 px-6 md:px-16">
                {/* Header */}
                <div className="text-center">
                    <button className="bg-[#0097B2]  text-white px-6 py-2 rounded-full text-xl font-semibold">
                        Medical Solutions
                    </button>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
                        SKZ <span className="text-[#0077B6]">x</span> HealthCare
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
                                loading="lazy"
                            />
                            <h3 className="text-xl font-bold mt-4">{item.title}</h3>
                            <p className="text-gray-600 text-lg mt-2">
                                {item.des}
                            </p>
                        </div>

                    ))}
                </div>
            </section>

            {/* Industries we serve */}

            <Industries/>

            {/* Why Choose Us */}

            <Benefit />

            {/* Contact Section */}

            <Started />

        </>
    )
}

export default About