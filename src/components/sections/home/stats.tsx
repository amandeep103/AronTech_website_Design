"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const CounterNumber = ({
  target,
  suffix,
  isVisible,
}: {
  target: number;
  suffix: string;
  isVisible: boolean;
}) => {
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
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
};

export function Stats() {
  const [isInView, setIsInView] = useState(false);

  const stats: StatItem[] = [
    { value: 1000, suffix: "+", label: "Jobs Completed" },
    { value: 10, suffix: "+", label: "Industry Experience" },
    { value: 1600, suffix: "+", label: "Global Clients" },
    { value: 99, suffix: "%", label: "Satisfaction Rate" },
  ];

  return (
    <section
      className="relative bg-black overflow-hidden py-24"
      onMouseEnter={() => setIsInView(true)}
    >
      {/* Background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <pattern id="gridPattern2" width="100" height="100" patternUnits="userSpaceOnUse">
            <line x1="100" y1="0" x2="100" y2="100" stroke="var(--primary)" strokeOpacity="0.08" strokeWidth="0.5" />
            <line x1="0" y1="100" x2="100" y2="100" stroke="var(--primary)" strokeOpacity="0.08" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gridPattern2)" />
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-6xl lg:text-5xl font-bold text-white mb-4">
                <CounterNumber
                  target={stat.value}
                  suffix={stat.suffix}
                  isVisible={isInView}
                />
              </h3>

              <p className="text-gray-400 uppercase tracking-wide text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
