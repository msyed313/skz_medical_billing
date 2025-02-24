import React from 'react'
const services = [
    {
      img: '/vite.svg',
      service: 'Credentialing Services',
      description: 'Ensure your healthcare providers are credentialed with all major insurance networks, allowing them to be reimbursed for services rendered'

    },
    {
      img: 'src/assets/more.png',
      service: 'Medical Coding',
      description: 'Accurate coding is crucial for ensuring proper reimbursement and compliance'

    },
    {
      img: 'src/assets/clipboard.png',
      service: 'Revenue Cycle Management',
      description: 'We manage every step of the revenue cycle, ensuring optimized cash flow for your practice'
    },
    {
      img: 'src/assets/verified.png',
      service: 'Billing and Follow Up Services',
      description: 'Ensure that your practice gets paid in full and on time with our complete billing and follow-up services'
    },
    {
      img: 'src/assets/more.png',
      service: 'Compliance And Reporting',
      description: 'Stay ahead of the constantly evolving healthcare regulations with our compliance and reporting services'
    },
  ]
function ServicesComponent() {
    return (
        <section className="flex flex-col items-center text-center py-20 space-y-6 bg-gray-200">
            {/* Title Section */}
            <span className="inline-block bg-[#0097B2] text-white px-9 py-2 rounded-full text-2xl font-semibold">
                Services
            </span>
            <p className="text-gray-600 max-w-xl md:text-4xl text-xl font-semibold">
                Medical and Health Care Solution
            </p>

            {/* Cards Section */}
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-[90%] max-w-[100%] my-4 px-2">
                {services.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg py-10 px-6 flex flex-col items-center justify-center space-y-4 hover:shadow-2xl transition-all"
                    >
                        <div className="w-32 bg-blue-700 text-white flex items-center justify-center rounded-full text-xl font-bold">
                            <img src={item.img} className="w-1/2" />
                        </div>
                        <p className="text-2xl font-semibold h-1/6 my-2">{item.service}</p>
                        <p className="text-gray-600 text-lg text-center my-2">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
            
        </section>
    )
}

export default ServicesComponent