import React from 'react'
import Component from '../components/Component'
import Started from '../components/Started'
import OurServicesComponent from '../components/OurServicesComponent';
function CReport() {
  const features = [
    {
        title: "HIPAA Compliance",
        desc: "We adhere to strict HIPAA guidelines to protect patient data"
    },
    {
        title: "Compliance Audits",
        desc: "Periodic audits of your billing and coding practices to ensure compliance with current industry regulations"
    },
    {
        title: "Custom Reporting",
        desc: "Generate tailored financial reports to track the health of your practice’s revenue cycle and identify areas for improvement."
    }
];
  return (
    <>
        <Component name="Compliance and Reporting" />
            
            <OurServicesComponent data={features} name="Compliance and Reporting" 
              desc="Stay ahead of the constantly evolving healthcare regulations with our compliance and reporting services"
            />
            
            <Started/>

    </>
  )
}

export default CReport