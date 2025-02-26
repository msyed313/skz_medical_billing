import React from 'react'
import { NavLink } from 'react-router-dom'
function Started() {
  return (
    <section className="bg-[#0097B2] flex justify-center py-20 px-6">
      <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between max-w-4xl w-full p-8">
        {/* Text Content */}
        <div className="text-center md:text-left max-w-md">
          <p className="text-3xl font-bold text-gray-900">
            Ready to Get Started
          </p>
          <p className="text-gray-700 text-lg mt-2 leading-relaxed">
            If you're interested in learning more about our services or discussing a potential partnership, feel free to reach out to us
          </p>
        </div>

        {/* Contact Button */}
        <div className="mt-4 md:mt-0">
          <NavLink
            to="/contact"
            className="flex items-center gap-2 bg-[#0097B2]  hover:bg-[#006080] text-white text-xl font-semibold px-6 py-3 rounded-lg shadow-md transition focus:outline-none focus:ring-2 focus:ring-[#005B80]">

            Contact Us
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default Started