'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../Ui/Button';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Services', href: '#', hasDropdown: true },
        { name: 'Contact Us', href: '#' },
        { name: 'About Us', href: '#' },
        { name: 'Blog', href: '#' },
    ];

    const serviceLinks = [
        { name: 'SEO(Search Engine Optimization)', href: '#' },
        { name: 'SMM(Social Media Management)', href: '#' },
        { name: 'Digital Graphics Designing', href: '#' },
        { name: 'Content Writing', href: '#' },
        { name: 'Digital Advertising FB & Google Ads', href: '#' },
        { name: 'Website Design/Development', href: '#' },
        { name: 'Ecommerce', href: '#' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            <div
                className="
                    container mx-auto px-6 h-16 m-3
                    flex items-center justify-between
                    rounded-2xl backdrop-blur-lg
                "
            >
                {/* Logo — FAR LEFT */}
                <Link href="/" className="flex items-center gap-2 group">
                    
                    <Image
                        src="/logo.png"
                        alt="AronTech"
                        width={96}
                        height={28}
                        className="object-contain group-hover:scale-105 transition-transform"
                    />
                </Link>

                {/* Right Side (Nav + Button) */}
                <div className="hidden md:flex items-center gap-8 ml-auto">
                    {/* Nav Links */}
                    <div className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <a
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                                        link.name === 'Home'
                                            ? 'text-primary'
                                            : 'text-white/70 hover:text-primary'
                                    }`}
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown className="w-3 h-3" />}
                                </a>

                                {/* Dropdown */}
                                 {link.hasDropdown && (
                                    <div className="absolute left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                        <div
                                            className="
                                                w-max
                                                max-w-[420px]
                                                bg-black/95
                                                border border-primary/20
                                                rounded-lg
                                                backdrop-blur-lg
                                                overflow-hidden
                                            "
                                        >
                                            {serviceLinks.map((service) => (
                                                <a
                                                    key={service.name}
                                                    href={service.href}
                                                    className="
                                                        block px-4 py-2.5
                                                        text-sm text-white/80
                                                        hover:text-primary hover:bg-primary/5
                                                        transition-colors
                                                        whitespace-nowrap
                                                    "
                                                >
                                                    {service.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Enquire Button — NO GLOW */}
                    <Button
                        className="
                            rounded-full px-5 h-9 text-sm font-medium
                            border border-primary/40
                            bg-transparent text-primary
                            hover:bg-primary hover:text-black
                            transition-all
                        "
                    >
                        Enquire
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 mx-3 bg-black/95 border border-primary/20 rounded-lg backdrop-blur-lg p-4 flex flex-col gap-3">
                    {navLinks.map((link) => (
                        <div key={link.name}>
                            <button
                                onClick={() => link.hasDropdown && setServicesOpen(!servicesOpen)}
                                className="w-full text-left text-sm font-medium text-white/80 hover:text-primary flex items-center justify-between"
                            >
                                {link.name}
                                {link.hasDropdown && <ChevronDown className="w-3 h-3" />}
                            </button>
                            {link.hasDropdown && servicesOpen && (
                                <div className="ml-4 mt-2 flex flex-col gap-2">
                                    {serviceLinks.map((service) => (
                                        <a
                                            key={service.name}
                                            href={service.href}
                                            className="text-sm text-white/60 hover:text-primary"
                                        >
                                            {service.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    <Button className="w-full mt-2 bg-primary text-black hover:bg-primary/90 h-9 text-sm">
                        Enquire
                    </Button>
                </div>
            )}
        </nav>
    );
}
