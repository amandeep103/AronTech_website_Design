'use client';

import { motion } from "framer-motion";

export default function GrowthSection() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center p-4">
      {/* Background Fireflies (Artistic floating particles) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="firefly firefly-1 top-[20%] left-[20%]"></div>
        <div className="firefly firefly-2 top-[50%] left-[80%]"></div>
        <div className="firefly firefly-3 top-[80%] left-[30%]"></div>
        <div className="firefly firefly-4 top-[10%] left-[90%]"></div>
        <div className="firefly firefly-5 top-[70%] left-[10%]"></div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side: Artistic Image Composition */}
        <div className="relative h-[600px] w-full flex items-center justify-center">
          
          {/* Decorative Dashed Path */}
          <svg className="absolute w-full h-full pointer-events-none opacity-40 text-gray-600" viewBox="0 0 500 500">
             <path 
               d="M50,450 Q100,100 250,250 T450,50" 
               fill="none" 
               stroke="currentColor" 
               strokeWidth="2" 
               strokeDasharray="8 8" 
             />
          </svg>

          {/* Top-Right Floating Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-0 right-10 w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden border-4 border-gray-900 shadow-2xl z-20"
          >
            <img src="/images/growth1.jpg" alt="Analysis" className="w-full h-full object-cover" />
          </motion.div>

          {/* Bottom-Left Floating Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="absolute bottom-10 left-10 w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden border-4 border-gray-900 shadow-2xl z-10"
          >
            <img src="/images/growth2.jpg" alt="Team" className="w-full h-full object-cover" />
          </motion.div>

          {/* Radial Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--primary)]/10 blur-[100px] rounded-full -z-10"></div>
        </div>

        {/* Right Side: Copy & Stats */}
        <div className="space-y-8 pl-0 lg:pl-10">
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
              Growth drives <br/>
              <span className="text-gradient">everything we do</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Getting your e-commerce store in front of the right audience is
              critical to your success. At Aron Tech, we specialize in creating
              and managing e-commerce advertising campaigns that drive
              leads and sales.
            </p>
          </motion.div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 gap-12 pt-4">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-[var(--primary)] text-5xl font-bold mb-2">5K+</div>
              <div className="text-white font-medium text-lg">Advertising Partners</div>
            </motion.div>
            
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-[var(--primary)] text-5xl font-bold mb-2">90%</div>
              <div className="text-white font-medium text-lg">Increase in ROAS</div>
            </motion.div>
          </div>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="pt-8"
          >
          </motion.div>
        </div>
      </div>
    </div>
  );
}