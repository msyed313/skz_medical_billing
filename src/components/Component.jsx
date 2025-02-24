import React from "react";

function Component({ name }) {
  return (
    <div className="bg-blue-500 h-70 opacity-70 flex items-center justify-center">
      <p className="text-5xl font-semibold text-white">{name}</p>
    </div>
  );
}

export default Component;
