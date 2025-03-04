import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomeScreen.css";
import MouseTrail from "../../components/MouseTrail"
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
        <>
            <div
                className={`relative h-screen w-full flex flex-col items-center justify-center bg-cover bg-center`}
                style={{ backgroundImage: `url("/assets/background.jpg")` }}
            >
                {/* Background Overlay for Better Contrast */}
                <div className="absolute inset-0 bg-gray-400 opacity-80"></div>

                {/* Main Content */}
                <div className="relative flex flex-col items-center z-10 text-center px-4">
                    <img src="/assets/logo.png"
                        alt="Logo"
                        className="logo max-w-80 rounded-2xl "
                        loading="lazy"
                    />
                    <h1 className="text-white lg:text-5xl md:text-3xl text-xl font-bold mt-3 drop-shadow-lg">
                        Welcome to SKZ Medical Billing
                    </h1>
                    <p className="text-lg font-semibold mt-3 text-gray-200 drop-shadow-md">
                        Get ready for an amazing experience 🚀
                    </p>
                </div>

                {/* Mouse Trail */}
                <MouseTrail />
            </div>
        </>
    );
}

export default WelcomeScreen;
