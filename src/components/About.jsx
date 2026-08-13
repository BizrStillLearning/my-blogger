import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
    MapPin, GraduationCap, BookOpen, Code2,
    Target, Shield, Sparkles, Binary, Terminal,
    ArrowUpRight, Lightbulb, RefreshCw
} from 'lucide-react';

const About = () => {
    const { t } = useTranslation();

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const bentoItem = {
        hidden: { opacity: 0, y: 24, scale: 0.96 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 90, damping: 16 }
        }
    };

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--accent)] opacity-[0.03] blur-[120px] pointer-events-none rounded-full" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-14 flex items-center gap-6"
                >
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter" style={{ color: 'var(--text-main)' }}>
                        {t('about.title')}
                        <span className="text-[var(--accent)]"> {t('about.highlight', 'Me')}.</span>
                    </h2>
                    <div className="h-[1px] flex-grow opacity-10" style={{ backgroundColor: 'var(--text-main)' }}></div>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-4 md:gap-5"
                >
                    <motion.div
                        variants={bentoItem}
                        whileHover={{ y: -4 }}
                        className="lg:col-span-2 lg:row-span-2 p-8 md:p-10 rounded-[2.5rem] border relative overflow-hidden group flex flex-col justify-between transition-all duration-500"
                        style={{
                            borderColor: 'rgba(var(--text-main-rgb), 0.08)',
                            backgroundColor: 'rgba(var(--text-main-rgb), 0.02)',
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        <Binary size={220} className="absolute -top-12 -right-12 opacity-[0.03] group-hover:opacity-[0.07] group-hover:scale-110 transition-all duration-700 pointer-events-none" style={{ color: 'var(--accent)' }} />

                        <div className="flex items-center justify-between relative z-10 mb-8">
                            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                                <Terminal size={12} style={{ color: 'var(--accent)' }} />
                                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] opacity-80" style={{ color: 'var(--text-main)' }}>
                                    ABOUT.ME // 2026
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest" style={{ color: 'var(--text-main)' }}>Active</span>
                            </div>
                        </div>

                        <div className="relative z-10 mt-auto">
                            <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold leading-[1.7] tracking-tight mb-10" style={{ color: 'var(--text-main)' }}>
                                {t('about.p1')}
                            </h3>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={bentoItem}
                        whileHover={{ y: -4 }}
                        className="lg:col-span-2 lg:row-span-2 p-8 md:p-10 rounded-[2.5rem] border flex flex-col md:flex-row gap-8 lg:gap-12 overflow-hidden relative transition-all duration-500"
                        style={{
                            borderColor: 'rgba(var(--text-main-rgb), 0.08)',
                            backgroundColor: 'rgba(var(--text-main-rgb), 0.02)'
                        }}
                    >
                        <MapPin size={200} className="absolute -bottom-10 -right-10 opacity-[0.02] group-hover:scale-110 group-hover:opacity-[0.05] transition-all duration-700 pointer-events-none" style={{ color: 'var(--text-main)' }} />

                        <div className="flex-1 flex flex-col justify-between relative z-10">
                            <div>
                                <div className="flex items-center gap-2 mb-6">
                                    <Sparkles size={14} style={{ color: 'var(--accent)' }} />
                                    <p className="text-[10px] opacity-40 font-black uppercase tracking-[0.25em]" style={{ color: 'var(--text-main)' }}>Profile</p>
                                </div>

                                <div className="mb-8">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="relative flex items-center justify-center">
                                            <div className="w-3 h-3 rounded-full bg-[var(--accent)]" />
                                            <div className="absolute w-6 h-6 rounded-full bg-[var(--accent)] opacity-40 animate-ping" />
                                        </div>
                                        <h4 className="text-xl md:text-2xl font-bold tracking-tight" style={{ color: 'var(--text-main)' }}>Surabaya, ID</h4>
                                    </div>
                                    <p className="text-[11px] opacity-40 font-mono tracking-wider">07°15'S 112°45'E</p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/5 mt-auto">
                                <div className="flex items-center gap-3 mb-2">
                                    <GraduationCap size={16} className="opacity-50" style={{ color: 'var(--text-main)' }} />
                                    <p className="text-[10px] opacity-40 font-black uppercase tracking-[0.2em]" style={{ color: 'var(--text-main)' }}>Education</p>
                                </div>
                                <p className="text-sm md:text-base font-bold tracking-wide mt-2" style={{ color: 'var(--text-main)' }}>Universitas Muhammadiyah Surabaya</p>
                                <p className="text-[10px] opacity-50 font-medium uppercase tracking-widest mt-1">Informatics Engineering</p>
                            </div>
                        </div>

                        <div className="hidden md:block w-px bg-white/5 relative z-10" />
                        <div className="md:hidden h-px w-full bg-white/5 relative z-10" />

                        <div className="flex-1 flex flex-col justify-center relative z-10">
                            <div className="flex items-center gap-2 mb-6">
                                <Target size={14} style={{ color: 'var(--accent)' }} />
                                <p className="text-[10px] opacity-40 font-black uppercase tracking-[0.25em]" style={{ color: 'var(--text-main)' }}>Core Values</p>
                            </div>

                            <div className="flex flex-col gap-4">
                                {[
                                    { icon: Lightbulb, label: 'Problem Solving', desc: 'Architecting optimal solutions' },
                                    { icon: RefreshCw, label: 'Continuous Learning', desc: 'Adapting to new paradigms' },
                                    { icon: Shield, label: 'Discipline', desc: 'Consistency over intensity' }
                                ].map((val, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-[1.5rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                                        <div className="p-2.5 rounded-xl bg-white/5 shrink-0">
                                            <val.icon size={18} style={{ color: 'var(--accent)' }} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm md:text-base font-bold tracking-wide mb-0.5" style={{ color: 'var(--text-main)' }}>{val.label}</span>
                                            <span className="text-[10px] opacity-50 font-medium tracking-wide">{val.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={bentoItem}
                        whileHover={{ y: -4 }}
                        className="lg:col-span-2 lg:row-span-1 p-8 rounded-[2.5rem] border flex flex-col justify-center group transition-all duration-500 relative overflow-hidden"
                        style={{
                            borderColor: 'rgba(var(--text-main-rgb), 0.08)',
                            backgroundColor: 'rgba(var(--text-main-rgb), 0.02)'
                        }}
                    >
                        <div className="flex items-center gap-2.5 mb-3">
                            <BookOpen size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--accent)' }} />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40" style={{ color: 'var(--text-main)' }}>Background Story</span>
                        </div>
                        <p className="text-sm md:text-base opacity-75 leading-relaxed font-medium" style={{ color: 'var(--text-main)' }}>
                            {t('about.p2')}
                        </p>
                    </motion.div>

                    <motion.div
                        variants={bentoItem}
                        whileHover={{ y: -4 }}
                        className="lg:col-span-2 lg:row-span-1 p-8 rounded-[2.5rem] border flex flex-col justify-center group relative overflow-hidden transition-all duration-500"
                        style={{
                            borderColor: 'rgba(var(--accent-rgb), 0.15)',
                            backgroundColor: 'rgba(var(--accent-rgb), 0.03)'
                        }}
                    >
                        <div
                            className="absolute inset-0 opacity-[0.04] pointer-events-none"
                            style={{
                                backgroundImage: 'radial-gradient(var(--text-main) 1px, transparent 1px)',
                                backgroundSize: '14px 14px'
                            }}
                        />

                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2.5">
                                    <Code2 size={16} style={{ color: 'var(--accent)' }} />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: 'var(--accent)' }}>Active Exploration</span>
                                </div>
                                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" style={{ color: 'var(--accent)' }} />
                            </div>

                            <p className="text-sm md:text-base leading-relaxed font-bold tracking-tight opacity-90" style={{ color: 'var(--text-main)' }}>
                                {t('aboutDetail.currentExplorationText', 'Merancang arsitektur sistem yang skalabel dan mengeksplorasi ekosistem AI modern untuk pengembangan Web & Mobile.')}
                            </p>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default About;