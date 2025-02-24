import React from "react";
import Component from "../components/Component";
import Started from "../components/Started";
import OurServicesComponent from "../components/OurServicesComponent";

const Credentialing = () => {
    const features=[
        { title: "Faster Reimbursements", desc: "Ensures your providers receive payments without unnecessary delays." },
        { title: "Regulatory Compliance", desc: "Stay aligned with insurance and government healthcare policies." },
        { title: "Enhanced Credibility", desc: "Being credentialed with top insurance companies enhances patient trust." },
        { title: "Less Administrative Work", desc: "We handle paperwork, follow-ups, and verifications for you." }
    ]
    return (
        <>
             <Component name="Credentialing" />

             <OurServicesComponent name="Credentialing Services" data={features} 
                desc="Ensure your healthcare providers are credentialed with all major insurance networks, allowing them to be reimbursed for services rendered"
             />

            <Started/>
        </>
    );
};

export default Credentialing;
