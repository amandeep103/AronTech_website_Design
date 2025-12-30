"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import  Button  from "../../Ui/Button";

export default function SupportSection() {
  return (
    <section className="relative z-10 py-16 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-24">
          
          {/* Content Column */}
          <div className="w-full lg:w-1/2 space-y-8 md:space-y-10 text-center lg:text-left">
            <div className="space-y-4 md:space-y-6">
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mx-auto lg:mx-0">
                <Clock className="w-3 h-3" />
                <span>Available 24/7</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                24/7 customer <br className="hidden sm:block" />
                <span className="text-gradient">support service</span>
              </h2>
              
              <p className="text-gray-400 text-sm md:text-lg lg:text-xl leading-relaxed max-w-[500px] mx-auto lg:mx-0">
                We are committed to providing our customers with the best customer support experience. Our team is available 24/7 to answer any queries and resolve any issues.
              </p>
            </div>
            
            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 justify-center lg:justify-start pt-2 md:pt-4">
              <Button className="bg-primary text-black hover:bg-primary/90 glow-button font-bold h-12 md:h-14 px-6 md:px-8 group w-full sm:w-auto">
                Get Support Now
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
            
            </div>
          </div>

          {/* Image Composition Column */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Primary Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-[80%] aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 relative z-10 group"
              >
                <img src="/images/support1.jpg" alt="Support Specialist" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
              
              {/* Secondary Overlapping Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-[60%] aspect-square rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border-2 border-black -mt-[40%] ml-auto relative z-20 shadow-2xl group"
              >
                <img src="/images/support2.jpg" alt="Support Team Workspace" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </motion.div>

              {/* Decorative Effects */}
              <div className="absolute top-1/2 -right-6 md:-right-10 w-16 md:w-24 h-16 md:h-24 bg-primary/20 blur-[40px] md:blur-[60px] animate-pulse" />
              <svg className="absolute -top-6 md:-top-10 -left-6 md:-left-10 w-24 md:w-40 h-24 md:h-40 opacity-10" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="1" fill="none" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}