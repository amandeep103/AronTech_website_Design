'use client';

import { motion } from "framer-motion";
import { Rocket, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Artistic Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="firefly firefly-1 top-[10%] left-[10%]"></div>
        <div className="firefly firefly-3 top-[80%] left-[80%]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FAB524]/5 blur-[120px] rounded-full"></div>
      </div>

      {/* Decorative Animated SVG Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20 text-gray-700 pointer-events-none" viewBox="0 0 1000 400">
        <motion.path
          d="M-100,200 Q250,50 500,200 T1100,200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="10 10"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </svg>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAB524]/10 text-[#FAB524] text-sm font-mono tracking-widest uppercase mb-8"
          >
            <Rocket size={16} />
            Launch Your Brand
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-8">
            <span className="relative inline-block">
              Ready
             
            </span>{" "}
            for your <br className="hidden md:block" />
            <span className="text-gradient">digital success?</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-[400px] mx-auto mb-12">
            Our services solve any business problem. Let's collaborate to build something that stands out.
          </p>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}>
            <button className="group relative bg-white text-black font-bold py-5 px-12 rounded-full glow-button text-lg overflow-hidden transition-all duration-300 hover:pr-14">
              <span className="relative z-10">Get started</span>
              <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" size={24} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}