import React from 'react'

function OurServicesComponent({data,name,desc}) {
    return (
        <section className="bg-gray-100 py-12 px-6 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{name}</h2>
                <p className="text-gray-600 text-lg">
                    {desc}
                </p>

                {/* Key Benefits */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                    {data.map((item, index) => (
                        <div key={index} className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all">
                            <h3 className="text-xl font-semibold text-blue-600">{item.title}</h3>
                            <p className="text-gray-600 mt-2">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-10">
                    <a
                        href="/contact"
                        className="bg-[#0097B2] hover:bg-[#006080] cursor-pointer text-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-300"
                    >
                        Get Started Today
                    </a>
                </div>
            </div>
        </section>
    )
}

export default OurServicesComponent