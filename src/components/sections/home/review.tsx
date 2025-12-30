"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function ReviewSection() {
  const reviews = [
    {
      name: "Ashish Malhotra",
      text: "Aron Tech's AI-powered digital solutions have helped us reach a wider audience and increase revenue. Highly recommend!",
      rating: 5,
      color: "var(--primary)"
    },
    {
      name: "Samson Kirok",
      text: "Top-notch services from website development to digital advertising. Professional, responsive, and dedicated team.",
      rating: 5,
      color: "var(--secondary)"
    },
    {
      name: "Mandeep Brar",
      text: "High standard and excellent quality of work. They helped my business grow in digital.",
      rating: 5,
      color: "var(--tertiary)"
    }
  ];

  return (
    <section className="relative z-10 py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-gray-950/20">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-20">
        {/* Header Area */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold tracking-tight">
            What our awesome <br className="hidden sm:block" />
            <span className="text-gradient">customers say</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-[420px] text-center mx-auto md:text-lg w-full">
            Get a glimpse into what our customers really think about us and make an informed decision.
          </p>
        </div>

        {/* Review Grid - Fully Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(255, 255, 255, 0.2)"
              }}
              className="group relative p-8 md:p-10 rounded-2xl bg-[#080808] border border-white/5 transition-all duration-300 min-h-[300px] md:min-h-[350px] flex flex-col justify-between cursor-pointer overflow-hidden"
            >
              {/* Glowing Corner Borders */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-white/10 rounded-tl-xl transition-all duration-500 group-hover:border-primary group-hover:drop-shadow-[0_0_8px_var(--primary)]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-white/10 rounded-br-xl transition-all duration-500 group-hover:border-primary group-hover:drop-shadow-[0_0_8px_var(--primary)]" />
              
              {/* Internal Radial Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,181,36,0.03),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative space-y-4 md:space-y-6 z-10 text-center flex flex-col items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Quote className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                
                <div className="space-y-3 md:space-y-4">
                  <p className="text-gray-400 leading-relaxed text-[13px] md:text-sm font-medium italic">
                    "{review.text}"
                  </p>
                  
                  {/* Rating Stars */}
                  <div className="flex gap-1 justify-center">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Reviewer Meta */}
              <div className="relative z-10 pt-4 md:pt-6 border-t border-white/5 text-center">
                 <p className="text-white font-bold group-hover:text-primary transition-colors duration-300">
                   - {review.name}
                 </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}