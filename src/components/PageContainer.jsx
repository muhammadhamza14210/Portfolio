import React from "react";
import { motion } from "framer-motion";

const PageContainer = ({ name, children }) => {
  return (
    <motion.section
      id={name}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.2, ease: "easeOut" }} 
      className="relative w-full min-h-screen bg-gradient-to-br from-[#1E293B] via-[#4C1D95] to-[#8B5CF6] 
      overflow-auto"
    >
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full animate-pulse-slow bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] bg-cover opacity-10"></div>
      </div>

      {/* Main Content Container */}
      <main className="relative z-10 max-w-[1200px] mx-auto px-8 py-8 text-center sm:text-left">
        {children}
      </main>
    </motion.section>
  );
};

export default PageContainer;
