import React from "react";
import Component from "../components/Component";
import OurServicesComponent from "../components/OurServicesComponent";
import Started from "../components/Started";
import MouseTrail from "../components/MouseTrail";

const MedicalCoding = () => {
    const features = [
        {
            title: "Maximized Reimbursements",
            desc: "Avoid underbilling or overbilling by using precise codes"
        },
        {
            title: "Compliance Assurance",
            desc: "Stay compliant with HIPAA, CMS, and insurance guidelines"
        },
        {
            title: "Reduced Claim Denials",
            desc: "Proper coding reduces errors that lead to claim rejections"
        },
        {
            title: "Efficient Billing Process",
            desc:"Speeds up the claims process and improves cash flow"
        },
        {
            title: "Specialty-Specific Expertise",
            desc:"We handle coding for various specialties like cardiology, orthopedics, and more"
        },
    ];
    return (
        <>

            <Component name="Medical Coding" />
            
            <OurServicesComponent data={features} name="Medical Coding" 
              desc="Accurate coding is crucial for ensuring proper reimbursement and compliance"
            />
            
            <Started/>
            <MouseTrail/>
        </>
    );
};

export default MedicalCoding;
