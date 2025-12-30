'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface SolutionCard {
  id: string;
  title: string;
  description: string;
}

const AnimatedCounter = ({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export function Solutions() {
  const [isInView, setIsInView] = useState(false);

  const solutions: SolutionCard[] = [
    {
      id: "automation",
      title: "Marketing Automation",
      description: "Our team has successfully helped record of helping brands. Explore advanced automation features.",
    },
    {
      id: "store",
      title: "Online Store Management",
      description: "We'll work with you to identify your store's goals and objectives, then develop a customized solution that meets your needs.",
    },
    {
      id: "social",
      title: "Social Media Marketing",
      description: "We offer social media marketing services that help you build a strong social media presence and reach potential customers.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section 
      className="relative bg-black py-24 overflow-hidden"
      onMouseEnter={() => setIsInView(true)}
    >
      {/* Background Grid */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" style={{ pointerEvents: 'none' }}>
        <defs>
          <pattern id="gridPattern4" width="100" height="100" patternUnits="userSpaceOnUse">
            <line x1="100" y1="0" x2="100" y2="100" stroke="rgb(250 181 36 / 0.05)" strokeWidth="0.5"/>
            <line x1="0" y1="100" x2="100" y2="100" stroke="rgb(250 181 36 / 0.05)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gridPattern4)" />
      </svg>

      <div className="container relative z-10 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 capitalize">
            Make your marketing more <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary">
              effective
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-[530px] mx-auto">
            E-commerce brands can acquire and retain new customers using solutions that span the entire customer journey.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {solutions.map((solution, idx) => (
            <motion.div
              key={solution.id}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              {/* Card with dark background and primary border */}
              <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-full overflow-hidden hover:border-white/20 transition-all duration-300">
                
                {/* Corner accents - appear on hover with primary color */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-lg group-hover:border-primary transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-lg group-hover:border-primary/70 transition-colors duration-300" />

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {solution.description}
                  </p>

                  {/* Learn More Link */}
                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 font-semibold transition-all group/link"
                    whileHover={{ gap: "8px" }}
                  >
                    <span style={{ color: 'var(--primary)' }}>Learn more</span>
                    <ArrowRight className="w-4 h-4" style={{ color: 'var(--primary)' }} />
                  </motion.a>

                  {/* Accent line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-4 h-px w-12 origin-left"
                    style={{ background: 'linear-gradient(to right, var(--primary), transparent)' }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      
      </div>
    </section>
  );
}
