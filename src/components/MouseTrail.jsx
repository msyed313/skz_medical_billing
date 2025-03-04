import { useState, useEffect } from "react";

export default function MouseTrail() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className={`w-6 h-6 border-1 rounded-full fixed pointer-events-none transition-all duration-300 ease-out ${
        hovered ? "bg-[#0097B2] border-[#004D60]" : "bg-transparent border-[#006080]"
      }`}
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    ></div>
  );
}
