'use client';

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import  Button  from "../../Ui/Button";
import { ArrowRight, Zap, Rocket } from "lucide-react";
import { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { HeroScene } from "../../Ui/heroScene";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth - 0.5) * 40);
    mouseY.set((clientY / innerHeight - 0.5) * 40);
  };

  return (
    <div ref={containerRef} className="min-h-[100vh] bg-black overflow-x-hidden" onMouseMove={handleMouseMove}>
      <section className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background Layer */}
        <div className="absolute inset-0 z-10 opacity-60">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
          </Canvas>
        </div>

        {/*  Dynamic Grid Background with Parallax */}
        <motion.div
          style={{ y, opacity, scale }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]"
            style={{
              backgroundImage: "url('/gridcubes.svg')",
              backgroundSize: "60px 60px",
              backgroundPosition: "center",
            }}
          />
          
          {/* Floating 3D-like Elements */}
          {/* <motion.div 
            style={{ x: mouseX, y: mouseY }}
            className="absolute inset-0 pointer-events-none z-20"
          >
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[150px] animate-pulse delay-700" />
            
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/3 right-[15%] p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hidden lg:block"
            >
              <Rocket className="w-8 h-8 text-primary mb-2" />
              <div className="h-1 w-12 bg-primary/50 rounded-full" />
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, -10, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/3 left-[15%] p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hidden lg:block"
            >
              <Zap className="w-8 h-8 text-secondary mb-2" />
              <div className="h-1 w-12 bg-secondary/50 rounded-full" />
            </motion.div>
          </motion.div> */}
        </motion.div>

        {/* Content */}
        <div className="container relative z-40 px-4 md:px-6 flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6 md:mb-8 max-w-6xl leading-[1] md:leading-[0.9] perspective-1000"
          >
            Digital Marketing <br />
            <span className="text-gradient drop-shadow-[0_0_30px_rgba(250,181,36,0.3)]">Agency</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-xl md:text-2xl text-white mb-8 md:mb-12 max-w-3xl px-4 leading-relaxed"
          >
            AI-Powered Marketing
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0"
          >
            <Button className="rounded-full bg-primary cursor-pointer text-black hover:bg-primary/90 text-base sm:text-lg font-bold px-5 sm:px-8 h-14 sm:h-14 glow-button group relative overflow-hidden w-full sm:w-auto">
              <span className="relative z-10 flex items-center justify-center">
                Launch Project
              </span>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
