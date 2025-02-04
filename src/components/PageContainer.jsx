import React from "react";

const PageContainer = ({ name, children }) => {
  return (
    <section
      id={name}
      className="relative w-full min-h-screen bg-gradient-to-br from-[#2C3E50] via-[#6A0572] to-[#DDA0DD] overflow-auto"
    >
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full animate-pulse-slow bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] bg-cover opacity-10"></div>
      </div>

      {/* Main Content Container */}
      <main className="relative z-10 max-w-[1200px] mx-auto px-8 py-8 text-center sm:text-left">
        {children}
      </main>
    </section>
  );
};

export default PageContainer;
