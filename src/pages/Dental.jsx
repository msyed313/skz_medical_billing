import React from 'react'
import Component from '../components/Component'
import Started from '../components/Started'
import OurServicesComponent from '../components/OurServicesComponent';

function Dental() {
    const features = [
        {
            title: "Insurance Claims Management",
            desc: "We handle all aspects of dental insurance billing, including claim submissions, follow-ups, and appeals, ensuring you get maximum reimbursements"
        },
        {
            title: "Insurance Verification & Pre-Authorization",
            desc: "We verify patient eligibility, benefits, and pre-authorizations in advance, reducing claim denials and improving cash flow"
        },
        {
            title: "Secure Billing",
            desc: "We ensure all billing processes follow strict HIPAA regulations, keeping your patients' data safe and confidential"
        },
        {
            title: "Customized Solutions",
            desc: "Customized Solutions for Dental Practices including Preventive & Restorative Dentistry,Orthodontics & Periodontics,Endodontics & Prosthodontics"
        },
        {
            title: "Dedicated Support & Reporting",
            desc: "Get access to real-time financial reports, claim status updates, and expert guidance to optimize your revenue cycle"
        }
    ];
  return (
    <>
          <Component name="Dental" />
            
            <OurServicesComponent data={features} name="Dental" 
              desc="Our expert team ensures accurate, timely reimbursements, helping dental practices focus on patient care instead of paperwork"
            />
            
            <Started/> 
    </>
  )
}

export default Dental