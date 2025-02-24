import React from 'react'
import Component from '../components/Component'
import Started from '../components/Started'

function BillingServices() {
    const features = [
        {
            title: "Timely Claim Submission",
            desc:" We handle all claim submissions with precision to avoid delays"
        },
        {
            title: "Denial Management ",
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
        <Component name="Billing and Follow Up Services" />
     

        <Started/>
    </>
  )
}

export default BillingServices