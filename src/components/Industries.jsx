import React from 'react'

function Industries() {
    const industries = [
        "Physicians",
        "Physical Therapists",
        "Psychiatrists",
        "Hospitals",
        "Cardiology",
        "Physical Therapy",
        "Internal Medicine",
        "Orthopedics",
        "Dermatology",
      ];
    return (
        <section className="py-12 px-6 bg-gray-100">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Industries We Serve</h2>
                <p className="text-gray-600 mb-8">
                    We provide expert billing and credentialing services across various healthcare fields.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-md text-gray-800 font-semibold text-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#0097B2] hover:text-white"
                        >
                            {industry}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Industries