import React from "react";
import Component from "../components/Component";

const PrivacyPolicy = () => {
    return (
        <>

            <Component name='Privacy Policy' />

            <div className="max-w-5xl  p-6 text-gray-800">
                {/* <p className="text-xl text-gray-500 text-center mb-8">Effective Date: {new Date().toLocaleDateString()}</p> */}

                <section className="mb-6">
                    <h2 className="text-xl md:text-2xl font-bold mb-2">1. Information We Collect</h2>
                    <p className="text-lg">
                        We collect both personal and non-personal information when you interact with our website and services.
                    </p>
                    <ul className="text-lg list-disc ml-6 mt-2">
                        <li><strong>Personal Information:</strong> Name, address, phone number, email, billing info, medical records, etc.</li>
                        <li><strong>Non-Personal Information:</strong> Browser type, IP address, usage data, cookies, etc.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl md:text-2xl font-bold  mb-2">2. How We Use Your Information</h2>
                    <ul className="text-lg list-disc ml-6">
                        <li>Provide medical billing services.</li>
                        <li>Communicate important updates.</li>
                        <li>Improve website functionality.</li>
                        <li>Ensure legal and regulatory compliance.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl md:text-2xl font-bold  mb-2">3. Data Sharing and Disclosure</h2>
                    <p className="text-lg">We do not sell or rent personal data but may share it with trusted third-party service providers for essential services.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl md:text-2xl font-bold  mb-2">4. HIPAA Compliance</h2>
                    <p className="text-lg">
                        We adhere to HIPAA regulations to protect your personal health information (PHI) and ensure secure processing.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl md:text-2xl font-bold mb-2">5. Cookies and Tracking Technologies</h2>
                    <p className="text-lg">
                        Our website uses cookies for improved user experience. You can disable cookies in your browser settings.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl md:text-2xl font-bold  mb-2">6. Data Security</h2>
                    <p className="text-lg">
                        We implement security measures like encryption and secure servers, but no method is 100% secure.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl md:text-2xl font-bold  mb-2">7. Your Rights</h2>
                    <ul className="text-lg list-disc ml-6">
                        <li>Request access to personal data.</li>
                        <li>Request correction or deletion of data.</li>
                        <li>Opt-out of promotional emails.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl md:text-2xl font-bold mb-2">8. Contact Us</h2>
                    <p className="text-lg">If you have any concerns, contact us at:</p>
                    <p className="text-lg mt-2 font-semibold">SZK Medical Billing</p>

                    {/* Clickable Address (Google Maps) */}
                    <p className="text-lg mt-2">
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=5729+Savoy+Dr,+Houston,+TX+77036" target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0097B2] hover:text-[#006080]"
                        >
                            5729 Savoy Dr, Houston, TX 77036
                        </a>
                    </p>

                    {/* Clickable Email */}
                    <p className="text-lg mt-2">
                        <a
                            href="mailto:skzmedicalbilling@gmail.com"
                            className="text-[#0097B2] hover:text-[#006080]"
                        >
                            skzmedicalbilling@gmail.com
                        </a>
                    </p>

                    {/* Clickable Phone Number */}
                    <p className="text-lg mt-2">
                        <a href="tel:+14697336551" className="text-[#0097B2] hover:text-[#006080]">
                            (469) 733-6551
                        </a>
                    </p>
                </section>

            </div>
        </>
    );
};

export default PrivacyPolicy;
