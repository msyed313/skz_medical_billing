import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomeScreen.css";

function WelcomeScreen() {
    const [fadeOut, setFadeOut] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Start fade-out animation after 3 seconds
        const timer = setTimeout(() => {
            setFadeOut(true);
        }, 2500); // Start fading after 2.5s

        // Redirect after animation
        const redirectTimer = setTimeout(() => {
            navigate("/home"); // Navigate to Home after animation
        }, 3500); // Redirect after 3.5s

        return () => {
            clearTimeout(timer);
            clearTimeout(redirectTimer);
        };
    }, [navigate]);

    return (
        <div className={`welcome-screen ${fadeOut ? "fade-out" : ""}`}>
            <img src="/assets/logo.png" alt="Logo" className="logo max-w-96 rounded-2xl border-r-transparent" />
            <h1 className="text-white lg:text-5xl md:text-3xl text-xl font-bold mt-3">Welcome to Our Website</h1>
            <p className="text-lg font-semibold mt-3">Get ready for an amazing experience 🚀</p>
        </div>
    );
}

export default WelcomeScreen;
