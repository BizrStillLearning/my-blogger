import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import AboutDetail from './AboutDetail';
import {
    Code2, Cpu, MapPin,
    ArrowUpRight, Target, GraduationCap, Smartphone
} from 'lucide-react';

const About = () => {
    const { t } = useTranslation();
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16 md:mb-24 flex items-center gap-6"
                >
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter" style={{ color: 'var(--text-main)' }}>
                        {t('about.title')}
                    </h2>
                    <div className="h-[1px] flex-grow opacity-20" style={{ backgroundColor: 'var(--text-main)' }}></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    <motion.div
                        className="lg:col-span-5 flex flex-col"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="mb-10">
                            <motion.h3 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6 leading-tight tracking-tight" style={{ color: 'var(--text-main)' }}>
                                {t('about.p1')}
                            </motion.h3>
                            <motion.p variants={fadeInUp} className="text-base md:text-lg opacity-70 leading-relaxed font-medium" style={{ color: 'var(--text-main)' }}>
                                {t('about.p2')}
                            </motion.p>
                        </div>

                        <motion.div variants={fadeInUp} className="flex flex-col gap-5 p-7 rounded-3xl border mb-10 backdrop-blur-sm"
                                    style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: 'rgba(var(--text-main-rgb), 0.02)' }}>
                            <div className="flex items-center gap-4">
                                <div className="p-2.5 rounded-2xl" style={{ backgroundColor: 'rgba(var(--text-main-rgb), 0.05)', color: 'var(--text-main)' }}>
                                    <GraduationCap size={20} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <p className="text-xs opacity-50 font-bold uppercase tracking-widest mb-0.5">Education</p>
                                    <p className="text-sm font-bold tracking-wide" style={{ color: 'var(--text-main)' }}>UM Surabaya — Informatics</p>
                                </div>
                            </div>

                            <div className="h-[1px] w-full opacity-10" style={{ backgroundColor: 'var(--text-main)' }}></div>

                            <div className="flex items-center gap-4">
                                <div className="p-2.5 rounded-2xl" style={{ backgroundColor: 'rgba(var(--accent-rgb), 0.1)', color: 'var(--accent)' }}>
                                    <MapPin size={20} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <p className="text-xs opacity-50 font-bold uppercase tracking-widest mb-0.5">Current Node</p>
                                    <p className="text-sm font-bold tracking-wide" style={{ color: 'var(--text-main)' }}>{t('about.location')}</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp}>
                            <button
                                onClick={() => setIsDetailOpen(true)}
                                className="inline-flex items-center gap-3 text-sm font-bold tracking-wide transition-all duration-300 group cursor-pointer bg-transparent border-none p-0"
                                style={{ color: 'var(--accent)' }}
                            >
                                {t('about.btnDetail')}
                                <span className="p-2.5 rounded-full transition-transform duration-300 group-hover:translate-x-2" style={{ backgroundColor: 'rgba(var(--accent-rgb), 0.1)' }}>
                                    <ArrowUpRight size={16} strokeWidth={2.5} />
                                </span>
                            </button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="lg:col-span-7 w-full"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
                            <Target size={20} style={{ color: 'var(--accent)' }} />
                            <h4 className="text-sm font-bold uppercase tracking-[0.2em] opacity-80" style={{ color: 'var(--text-main)' }}>
                                What Drives Me
                            </h4>
                        </motion.div>

                        <div className="flex flex-col gap-5">
                            {[
                                { icon: Cpu, label: 'AI & Robotics', desc: 'Designing intelligent neural architectures' },
                                { icon: Code2, label: 'Full Stack Development', desc: 'Building scalable web solutions' },
                                { icon: Smartphone, label: 'Android Ecosystem', desc: 'Crafting native mobile experiences' }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    whileHover={{ scale: 1.02 }}
                                    className="relative p-6 md:p-8 rounded-3xl border overflow-hidden group cursor-default transition-all duration-300 shadow-sm hover:shadow-xl"
                                    style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: 'rgba(var(--text-main-rgb), 0.02)' }}
                                >
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                        style={{ background: 'linear-gradient(120deg, transparent 60%, rgba(var(--accent-rgb), 0.05))' }}
                                    />

                                    <div className="relative z-10 flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-5 md:gap-6">
                                            <div className="p-4 rounded-2xl transition-transform duration-500 group-hover:rotate-6"
                                                 style={{ backgroundColor: 'rgba(var(--accent-rgb), 0.1)', color: 'var(--accent)' }}>
                                                <item.icon size={26} strokeWidth={2} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg md:text-2xl font-bold mb-1.5 tracking-tight" style={{ color: 'var(--text-main)' }}>
                                                    {item.label}
                                                </h4>
                                                <p className="text-sm md:text-base opacity-60 font-medium">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:border-transparent opacity-30 group-hover:opacity-100"
                                             style={{ borderColor: 'rgba(var(--text-main-rgb), 0.2)' }}>
                                            <ArrowUpRight size={18} className="transition-colors duration-300 group-hover:text-white" style={{ color: 'var(--text-main)' }} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>

            <AnimatePresence>
                {isDetailOpen && (
                    <AboutDetail
                        isOpen={isDetailOpen}
                        onClose={() => setIsDetailOpen(false)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default About;