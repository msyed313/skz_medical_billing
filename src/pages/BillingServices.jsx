import React from 'react'
import Component from '../components/Component'
import Started from '../components/Started'
import OurServicesComponent from '../components/OurServicesComponent';
import MouseTrail from '../components/MouseTrail';
function BillingServices() {
    const features = [
        {
            title: "Timely Claim Submission",
            desc:" We handle all claim submissions with precision to avoid delays"
        },
        {
            title: "Denial Management ",
            desc:"Our team reviews and corrects denied claims to ensure reimbursement"
                },
        {
            title: "Insurance Follow-Ups",
            desc:"We proactively communicate with insurers to track and resolve pending payments"
        },
        {
            title: "Patient Billing Assistance",
            desc:" Clear, transparent billing helps minimize confusion and payment delays"
        },
        {
            title: "Maximized Reimbursements",
            desc:" We ensure you receive the full amount owed for services provided"
        }
    ];
  return (
    <>
        <Component name="Billing and Follow Up Services" />
     
        <OurServicesComponent data={features} name="Billing and Follow Up Services" 
              desc="Ensure that your practice gets paid in full and on time with our complete billing and follow-up services"
            />

        <Started/>
        <MouseTrail/>
    </>
  )
}

export default BillingServices