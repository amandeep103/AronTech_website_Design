import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


export default function WhyUsSection() {
  return (
    <section className="relative z-10 py-16 md:py-24 lg:py-32 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-32">
          
          {/* Image Composition Column */}
          <div className="w-full lg:w-[45%] relative">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Primary Background Image */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-[75%] aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-2 border-white/10 relative z-10 group"
              >
                <img 
                  src="/path-to-your-image-1.jpg" 
                  alt="Marketing team at work" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                />
              </motion.div>

              {/* Secondary Floating Image */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-[75%] aspect-[4/3] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-2 border-white/10 -mt-[30%] ml-auto relative z-20 group shadow-2xl"
              >
                <img 
                  src="/path-to-your-image-2.jpg" 
                  alt="Digital strategy presentation" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                />
              </motion.div>

              {/* Decorative SVG Path */}
              <div className="absolute -bottom-16 md:-bottom-24 left-0 w-full h-48 md:h-64 pointer-events-none opacity-40 z-0">
                <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M50 50C50 150 250 150 250 50C250 -50 150 -50 150 50C150 150 350 150 350 50" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeDasharray="10 10" 
                  />
                </svg>
              </div>
            </div>
            
            {/* Background Glow Effect */}
            <div className="absolute -inset-10 md:-inset-20 bg-[var(--primary)]/5 blur-[80px] md:blur-[120px] -z-20" />
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-[55%] space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                Why you need <br />
                <span className="text-gradient">digital marketing</span>
              </h2>
              
              <p className="text-gray-400 text-sm md:text-lg lg:text-xl leading-relaxed max-w-2xl font-medium mx-auto lg:mx-0">
                In order to scale new customer acquisition and retention for e-commerce brands, we work across the entire customer journey. Our team has a successful track record of helping brands scale profitably based on high-performing strategies.
              </p>
            </div>

            {/* Interactive CTA Link */}
            <div className="pt-2 md:pt-4 group cursor-pointer inline-flex items-center gap-3">
              <span className="text-lg md:text-xl font-bold border-b-2 border-[var(--primary)]/30 group-hover:border-[var(--primary)] transition-all duration-300 pb-1">
                Learn more
              </span>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-2 text-[var(--primary)]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}