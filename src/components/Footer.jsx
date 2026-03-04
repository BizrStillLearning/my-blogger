import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Github, Linkedin, Instagram, Mail,
    Terminal, ArrowUp, Heart, Binary,
    Globe, ShieldCheck, Zap
} from 'lucide-react';

const Footer = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
        return () => clearInterval(timer);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: Github, link: "#" },
        { icon: Linkedin, link: "#" },
        { icon: Instagram, link: "#" },
        { icon: Mail, link: "mailto:your@email.com" }
    ];

    return (
        <footer className="relative pt-32 pb-12 overflow-hidden border-t border-white/5 bg-gradient-to-b from-transparent to-[rgba(var(--accent-rgb),0.05)]">

            {/* 1. Animated Wave Layer - Color Translucency */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 pointer-events-none opacity-30">
                <svg className="relative block w-[calc(150%+1.3px)] h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <motion.path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        fill="url(#footer-wave-gradient)"
                        animate={{
                            d: [
                                "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                                "M321.39,40.44c58,10.79,114.16,40.13,172,51.86,82.39,16.72,168.19,5.73,250.45-12.39C823.78,60,906.67,20,985.66,10.83c70.05-8.48,146.53,10.09,214.34,35V0H0V27.35A600.21,600.21,0,0,0,321.39,40.44Z",
                                "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            ]
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <defs>
                        <linearGradient id="footer-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="var(--accent)" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* 2. Enhanced Glassmorphism Overlay */}
            <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-[60px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">

                    {/* Brand Section - Minimalist & Elegant */}
                    <div className="md:col-span-5 flex flex-col justify-start">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
                                    <Terminal size={24} style={{ color: 'var(--accent)' }} />
                                </div>
                                <h2 className="text-3xl font-black tracking-tighter" style={{ color: 'var(--text-main)' }}>
                                    INTERNAL<span className="text-[var(--accent)]">.</span>LOG
                                </h2>
                            </div>
                            <p className="text-sm opacity-40 max-w-sm leading-relaxed mb-10 font-medium italic">
                                Crafted for high-performance digital experiences.
                                Based in Surabaya, Indonesia.
                            </p>
                        </motion.div>

                        <div className="flex items-center gap-6">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.link}
                                    whileHover={{ y: -5, opacity: 1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="opacity-30 transition-all duration-300 hover:text-[var(--accent)]"
                                >
                                    <social.icon size={22} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation - Minimal List */}
                    <div className="md:col-span-3">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.5em] mb-10 opacity-20">Directories</h4>
                        <ul className="space-y-6">
                            {['About', 'Timeline', 'Hobby', 'Gallery'].map((item, i) => (
                                <motion.li key={item} whileHover={{ x: 5 }} className="group">
                                    <a href={`#${item.toLowerCase()}`} className="text-xs font-bold opacity-30 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-all flex items-center gap-4 uppercase tracking-widest">
                                        <div className="w-1 h-1 rounded-full bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* System Monitor - Glass Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="md:col-span-4 p-10 rounded-[3rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl shadow-inner relative overflow-hidden"
                    >
                        <div className="absolute -right-8 -top-8 opacity-[0.02]">
                            <Binary size={200} />
                        </div>

                        <div className="space-y-8 relative z-10">
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] font-black uppercase tracking-widest opacity-20">Status</span>
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] animate-pulse" />
                                    <span className="text-[10px] font-black text-green-500/80 uppercase tracking-widest">Running</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-[10px] font-black uppercase tracking-widest opacity-20">Region</span>
                                <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Surabaya, ID</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-[10px] font-black uppercase tracking-widest opacity-20">Uptime</span>
                                <span className="text-[10px] font-black uppercase tracking-widest opacity-60 font-mono italic">{time}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Elegant Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex items-center gap-8">
                        <p className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-20">
                            © 2026 ABIDZAR DZAKWAN SAHUDI
                        </p>
                    </div>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -5, opacity: 1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-4 py-2 px-4 rounded-xl border border-white/5 bg-white/5 opacity-40 hover:opacity-100 transition-all group"
                    >
                        <span className="text-[9px] font-black uppercase tracking-[0.3em]">Jump_Top</span>
                        <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;