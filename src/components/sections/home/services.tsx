'use client';

import { motion } from 'framer-motion';
import { Code2, Zap, Share2, PenTool, Palette, TrendingUp, ArrowRight } from 'lucide-react';
import Button from "../../Ui/Button"

interface Service {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    accentColor: string;
}

export function Services() {
    const services: Service[] = [
        {
            id: 'web-dev',
            title: 'Website Development',
            description: 'Custom websites built to drive conversions. Every line of code is crafted with precision and performance in mind to build a flawless experience.',
            icon: <Code2 className="w-8 h-8" />,
            accentColor: 'var(--primary)',
        },
        {
            id: 'seo',
            title: 'SEO (Search Engine Optimization)',
            description: 'From keyword research to link strategy, we cover everything. Our proven methodologies deliver measurable results and lasting impact.',
            icon: <Zap className="w-8 h-8" />,
            accentColor: 'var(--secondary)',
        },
        {
            id: 'smm',
            title: 'SMM (Social Media Management)',
            description: 'Our social media management services scale your growth from initial engagement to community dominance with strategic content.',
            icon: <Share2 className="w-8 h-8" />,
            accentColor: 'var(--tertiary)',
        },
        {
            id: 'content',
            title: 'Content Writing',
            description: 'Crafted content that converts and resonates with your audience. Strategic storytelling combined with data-driven insights.',
            icon: <PenTool className="w-8 h-8" />,
            accentColor: 'var(--primary)',
        },
        {
            id: 'graphics',
            title: 'Digital Graphics',
            description: 'Visual content is essential part of digital marketing strategy. We design compelling graphics for websites, social media, and digital channels.',
            icon: <Palette className="w-8 h-8" />,
            accentColor: 'var(--secondary)',
        },
        {
            id: 'advertising',
            title: 'Digital Advertising',
            description: 'Targeted ad campaigns designed to reach your ideal customers. We optimize every aspect for maximum ROI and conversion.',
            icon: <TrendingUp className="w-8 h-8" />,
            accentColor: 'var(--tertiary)',
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
        <section className="relative min-h-screen bg-black py-24 overflow-hidden">
            {/* Background Grid */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" style={{ pointerEvents: 'none' }}>
                <defs>
                    <pattern id="gridPattern3" width="100" height="100" patternUnits="userSpaceOnUse">
                        <line x1="100" y1="0" x2="100" y2="100" stroke="var(--primary)" strokeOpacity="0.06" strokeWidth="0.5" />
                        <line x1="0" y1="100" x2="100" y2="100" stroke="var(--primary)" strokeOpacity="0.06" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#gridPattern3)" />

                <circle cx="150" cy="200" r="1" fill="var(--primary)" fillOpacity="0.15" filter="url(#glowServices)" />
                <circle cx="400" cy="400" r="1.2" fill="var(--primary)" fillOpacity="0.15" filter="url(#glowServices)" />
                <circle cx="700" cy="300" r="0.8" fill="var(--primary)" fillOpacity="0.12" filter="url(#glowServices)" />

                <defs>
                    <filter id="glowServices">
                        <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
            </svg>

            {/* Floating decorative elements */}
            <motion.div
                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-20 right-10 w-32 h-32 border border-yellow-500/20 rounded-lg opacity-20 pointer-events-none"
            />
            <motion.div
                animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute bottom-40 left-20 w-40 h-40 border border-yellow-500/15 rounded-2xl opacity-15 pointer-events-none"
            />

            {/* Floating accent dots */}
            <motion.div
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-yellow-500/40 blur-sm pointer-events-none"
            />
            <motion.div
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 7, repeat: Infinity, delay: 1 }}
                className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-yellow-500/50 blur-sm pointer-events-none"
            />

            <div className="container relative text-center z-10 px-6 max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 capitalize">
                        Our services solve Any <br />
                        <span className="text-transparent bg-clip-text capitalize bg-gradient-to-r from-yellow-500 via-white to-yellow-500">
                            business problem
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-[500px] mx-auto">
                        Our team has a successful track record of helping brands scale, positioned based on high-performing strategies.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={cardVariants}
                            whileHover="hover"
                            className="group relative"
                        >
                            <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-full overflow-hidden hover:border-white/20 transition-all duration-300">
                                {/* Corner accents */}
                                <div 
                                    className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-lg transition-all duration-300"
                                    style={{
                                        borderColor: '#FAB524',
                                    }}
                                />
                                <div 
                                    className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-lg transition-all duration-300"
                                    style={{
                                        borderColor: '#FAB524',
                                    }}
                                />
                                
                                {/* Corner glow on hover */}
                                <div 
                                    className="absolute top-0 left-0 w-8 h-8 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    style={{
                                        boxShadow: '0 0 15px 4px var(--primary-glow-60), 0 0 8px 2px var(--primary)',
                                    }}
                                />
                                <div 
                                    className="absolute bottom-0 right-0 w-8 h-8 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    style={{
                                        boxShadow: '0 0 15px 4px var(--primary-glow-60), 0 0 8px 2px var(--primary)',
                                    }}
                                />

                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon with dynamic color */}
                                    <motion.div
                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                        className="inline-flex p-4 rounded-lg mb-6"
                                        style={{
                                            backgroundColor: `${service.accentColor}20`,
                                            color: "white",
                                        }}
                                    >
                                        {service.icon}
                                    </motion.div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    {/* Accent line */}
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        className="h-px w-12 bg-gradient-to-r to-transparent origin-left"
                                        style={{
                                            background: `linear-gradient(to right, ${service.accentColor}, transparent)`,
                                        }}
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