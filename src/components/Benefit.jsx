import React from "react";
//import { FaUserTie, FaCog, FaChartLine, FaShieldAlt, FaComments } from "react-icons/fa";

const Benefit = () => {
  const features = [
    { icon: '/assets/react.svg', title: "Experienced Team", desc: "Certified medical billers, coders, and credentialing specialists with years of hands-on experience." },
    { icon: '/assets/react.svg', title: "Customized Solutions", desc: "Personalized services tailored to your specialty and practice size." },
    { icon: '/assets/react.svg', title: "Maximized Revenue", desc: "We enhance cash flow by minimizing claim denials and ensuring faster reimbursements." },
    { icon: '/assets/react.svg', title: "Compliance & Accuracy", desc: "We prioritize accuracy and compliance to reduce costly errors and audits." },
    { icon: '/assets/react.svg', title: "Seamless Communication", desc: "Clear, transparent updates to keep you informed every step of the way." },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
        <p className="text-gray-600 mb-10">
          We provide professional, customized, and revenue-focused solutions to help your practice grow.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
               <img src={feature.icon} />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefit;
