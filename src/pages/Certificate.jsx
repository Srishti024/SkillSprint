import React from "react";

const Certificate = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div
        className="relative w-[28rem] h-64 bg-black text-white rounded-3xl shadow-2xl p-8 transition-transform duration-500 ease-in-out hover:scale-105"
        style={{
          animation: "float 3s ease-in-out infinite"
        }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center">
          Certificate Generator
        </h2>
        <p className="text-lg text-gray-300 text-center">
          🚧 In Progress... Stay Tuned!
        </p>
        <div className="absolute -top-3 -right-3 w-6 h-6 bg-yellow-500 rounded-full animate-ping"></div>

        {/* Inline keyframes style */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-50px); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Certificate;
