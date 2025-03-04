import React from "react";
import Component from "../components/Component";
import Started from "../components/Started";
import OurServicesComponent from "../components/OurServicesComponent";
import MouseTrail from "../components/MouseTrail";

const RCM = () => {
    const features = [
        {
            title: "Patient Registration & Insurance Verification",
            desc:
                "We verify patient insurance details upfront, reducing claim denials and ensuring a seamless billing process.",
        },
        {
            title: "Medical Coding & Charge Entry",
            desc:
                "Our certified coders accurately translate medical services into standardized codes, preventing costly errors.",
        },
        {
            title: "Claims Submission & Tracking",
            desc:
                "We submit claims promptly and monitor their progress, addressing any issues that may cause delays in payments.",
        },
        {
            title: "Denial Management & Appeals",
            desc:
                "If a claim is denied, our team immediately investigates and resubmits it, ensuring you receive the revenue you deserve.",
        },
        {
            title: "Payment Posting & Reconciliation",
            desc:
                "We track payments, post them accurately, and reconcile accounts to maintain financial transparency.",
        },
        {
            title: "Patient Billing & Support",
            desc:
                "We handle patient statements and inquiries, making it easy for patients to understand their bills and complete payments.",
        },
    ];
    return (
        <>
            <Component name="Revenue Cycle Management" />

            <OurServicesComponent data={features} name="Full-Cycle Revenue Cycle Management (RCM)" 
              desc="We manage every step of the revenue cycle, ensuring optimized cash flow for your practice"
            />
            
 
             <Started/>
           <MouseTrail/>
        </>
    );
};

export default RCM;
