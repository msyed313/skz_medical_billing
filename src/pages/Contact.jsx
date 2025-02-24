import React, { useState } from 'react'
import Component from '../components/Component'

function Contact() {
    const contactDetails = [
        {
            icon: "src/assets/react.svg",
            title: "Address",
            content: "5729 savoy dr Houston tx 77036",
        },
        {
            icon: "src/assets/react.svg",
            title: "Email Us",
            content: "info@amityrcm.com",
        },
        {
            icon: "src/assets/react.svg",
            title: "Call Now",
            content: "(469) 722-7402",
        },
    ];
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        speciality: "",
        service: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const services = ["RCM", "Credentialing", "Medical Coding", "Biling & Follow-Up Services", "Compliance & Reporting"];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Valid Email is required";
        if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone))
            newErrors.phone = "Valid 10-digit Phone Number is required";
        if (!formData.service) newErrors.service = "Please select a service";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form Data Submitted:", formData);
            alert("Form submitted successfully!");
            setFormData({ firstName: "", lastName: "", email: "", phone: "", speciality: "", service: "", message: "" });
            setErrors({});
        }
    };
    return (
        <>
            <Component name="Contact Us" />

            <section className="py-12 px-6 bg-[#F5F7FA]">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contactDetails.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-2xl p-6 text-center flex flex-col items-center"
                        >
                            <div className="bg-gray-100 rounded-full p-4 flex items-center justify-center">
                                <img src={item.icon} />
                            </div>
                            <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                            <p className="text-gray-600 text-sm mt-2">{item.content}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Consultation Form */}

            <section className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
                <div className=" p-8 max-w-4xl w-full">
                    {/* Header */}
                    <div className="text-center mb-6">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-xl font-semibold">
                            Appointment Now
                        </button>
                        <h2 className="text-3xl font-bold text-blue-700 mt-4">Free Consultation</h2>
                        <h3 className="text-lg font-semibold text-gray-800 mt-2">Schedule an Appointment</h3>
                        <p className="text-gray-600 mt-2">
                            Interested in learning more about our services? Reach out to us below!
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {/* First Name */}
                        <div>
                            <label className="block font-medium">First Name*</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                        </div>

                        {/* Last Name */}
                        <div>
                            <label className="block font-medium">Last Name*</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block font-medium">Email*</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block font-medium">Phone Number*</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>

                        {/* Company Name */}
                        <div>
                            <label className="block font-medium">Speciality</label>
                            <input
                                type="text"
                                name="company"
                                value={formData.speciality}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        {/* Services (Dropdown) */}
                        <div>
                            <label className="block font-medium">Select a Service*</label>
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            >
                                <option value="">-- Select Service --</option>
                                {services.map((service, index) => (
                                    <option key={index} value={service}>
                                        {service}
                                    </option>
                                ))}
                            </select>
                            {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
                        </div>

                        {/* Message */}
                        <div className="md:col-span-2">
                            <label className="block font-medium">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full p-2 border rounded"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="md:col-span-2 flex justify-center">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold w-full md:w-auto"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Google Map */}

            <section className="w-full flex justify-center items-center py-4">
                <div className="w-full max-w-full h-[400px] md:h-[500px] rounded-md overflow-hidden px-3">
                    <iframe
                        className="w-full h-full border-0"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6929.99066661964!2d-95.50809762538202!3d29.71989443387658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c24cc130d133%3A0x5b56589803e3614f!2s5729%20Savoy%20Dr%2C%20Houston%2C%20TX%2077036!5e0!3m2!1sen!2sus!4v1740399957351!5m2!1sen!2sus" 
                    ></iframe>
                </div>
            </section>

        </>
    )
}

export default Contact