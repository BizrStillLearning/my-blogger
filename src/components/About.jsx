import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useConfigStore } from '../store/useConfigStore';
import {
    Code2, Terminal, Coffee, Cpu, MapPin, Gamepad2,
    Music, Sparkles, ArrowUpRight, ShieldCheck, Target, GraduationCap, Film, Binary, Orbit, Smartphone
} from 'lucide-react';

const BentoCard = ({ children, title, className, delay = 0, glow = false, titleIcon: TitleIcon }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -5, scale: 1.01 }}
        className={`p-6 rounded-[2.5rem] border backdrop-blur-md relative overflow-hidden group transition-all duration-500 ${className}`}
        style={{
            borderColor: 'rgba(var(--text-main-rgb), 0.1)',
            backgroundColor: 'rgba(var(--text-main-rgb), 0.03)'
        }}
    >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
             style={{ background: glow ? `radial-gradient(circle at 70% 30%, var(--accent), transparent)` : `radial-gradient(circle at center, var(--accent), transparent)` }} />

        {title && (
            <div className="flex items-center gap-2 mb-4 relative z-10">
                {TitleIcon ? <TitleIcon size={14} style={{ color: 'var(--accent)' }} /> : <Sparkles size={12} style={{ color: 'var(--accent)' }} />}
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40"
                   style={{ color: 'var(--text-main)' }}>
                    {title}
                </p>
            </div>
        )}
        <div className="relative z-10 h-full w-full">
            {children}
        </div>
    </motion.div>
);

const About = () => {
    const { lang } = useConfigStore();

    const content = {
        en: {
            title: "Internal.log",
            p1: "A tech enthusiast who finds peace in complex logic and a cup of warm coffee.",
            p2: "My 3 years in a Pondok Pesantren taught me that great things require patience and discipline—two things I now apply every time I face a bug or design a system architecture.",
            btnDetail: "Detail about me",
            location: "Surabaya, ID",
            listening: "Spotify",
            gaming: "Gaming",
            movie: "Cinema"
        },
        id: {
            title: "Internal.log",
            p1: "Tech enthusiast yang nemu ketenangan di balik logika rumit dan segelas kopi hangat.",
            p2: "3 tahun di Pondok Pesantren ngajarin saya kalau hal besar butuh kesabaran dan disiplin—dua hal yang sekarang saya terapin tiap kali ketemu bug atau ngerancang arsitektur sistem.",
            btnDetail: "Detail tentang saya",
            location: "Surabaya, ID",
            listening: "Spotify",
            gaming: "Gaming",
            movie: "Bioskop"
        },
    };

    const t = content[lang] || content['en'];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 flex items-center gap-4"
                >
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter" style={{ color: 'var(--text-main)' }}>
                        {t.title}
                    </h2>
                    <div className="h-[2px] flex-grow opacity-10" style={{ backgroundColor: 'var(--text-main)' }}></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-4 lg:gap-6 h-auto lg:h-[850px]">
                    <BentoCard
                        title="Personality"
                        className="md:col-span-2 lg:col-span-3 lg:row-span-2 flex flex-col justify-end min-h-[350px] md:min-h-[400px]"
                        delay={0.1}
                        glow
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-[0.08] transition-opacity">
                            <Binary size={300} strokeWidth={1} style={{ color: 'var(--accent)' }} />
                        </div>

                        <div className="max-w-2xl relative z-10">
                            <h3 className="text-2xl md:text-5xl font-bold mb-6 leading-[1.1] tracking-tight" style={{ color: 'var(--text-main)' }}>
                                {t.p1}
                            </h3>
                            <p className="text-base md:text-lg opacity-60 leading-relaxed mb-8" style={{ color: 'var(--text-main)' }}>
                                {t.p2}
                            </p>

                            <Link to="/about">
                                <motion.button
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-3 px-8 py-4 rounded-[1.5rem] text-sm font-bold transition-all shadow-xl"
                                    style={{ backgroundColor: 'var(--accent)', color: 'white' }}
                                >
                                    {t.btnDetail} <ArrowUpRight size={20} />
                                </motion.button>
                            </Link>
                        </div>
                    </BentoCard>

                    <BentoCard
                        title="What Drives Me"
                        className="md:col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col items-center justify-center min-h-[400px]"
                        delay={0.2}
                    >
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
                            <Orbit size={240} className="animate-[spin_30s_linear_infinite]" />
                        </div>

                        <div className="flex flex-col gap-5 w-full relative z-10 px-2">
                            {[
                                { icon: Cpu, label: 'AI & Robotics', desc: 'Neural architectures' },
                                { icon: Code2, label: 'Full Stack', desc: 'Scalable solutions' },
                                { icon: Smartphone, label: 'Android Dev', desc: 'Mobile Ecosystem' }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 10, backgroundColor: 'rgba(var(--text-main-rgb), 0.05)' }}
                                    className="flex items-center gap-5 p-5 rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-500"
                                >
                                    <div className="p-3 rounded-2xl shrink-0" style={{ backgroundColor: 'rgba(var(--accent-rgb), 0.1)', color: 'var(--accent)' }}>
                                        <item.icon size={22} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold leading-none mb-2" style={{ color: 'var(--text-main)' }}>{item.label}</p>
                                        <p className="text-[10px] opacity-40 font-bold uppercase tracking-[0.2em] leading-none">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </BentoCard>

                    <BentoCard
                        title="My Personality"
                        className="md:col-span-2 lg:col-span-2"
                        delay={0.5}
                    >
                        <div className="grid grid-cols-3 gap-4 h-full items-center py-5">
                            <Link to="/hobby/music" className="h-full">
                                <motion.div whileHover={{ y: -5, backgroundColor: 'rgba(var(--accent-rgb), 0.1)' }} className="flex flex-col items-center justify-center p-4 rounded-[1.8rem] h-full border border-white/5 transition-all duration-500 bg-white/5 backdrop-blur-sm group/music">
                                    <Music size={24} style={{ color: 'var(--accent)' }} className="mb-2" />
                                    <p className="text-[9px] font-black uppercase tracking-widest text-center" style={{ color: 'var(--text-main)' }}>{t.listening}</p>
                                </motion.div>
                            </Link>

                            <Link to="/hobby/gaming" className="h-full">
                                <motion.div whileHover={{ y: -5, backgroundColor: 'rgba(var(--accent-rgb), 0.05)' }} className="flex flex-col items-center justify-center p-4 rounded-[1.8rem] h-full border border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-500">
                                    <Gamepad2 size={24} style={{ color: 'var(--accent)' }} className="mb-2 opacity-40" />
                                    <p className="text-[9px] font-black uppercase tracking-widest text-center" style={{ color: 'var(--text-main)' }}>{t.gaming}</p>
                                </motion.div>
                            </Link>

                            <Link to="/hobby/cinema" className="h-full">
                                <motion.div whileHover={{ y: -5, backgroundColor: 'rgba(var(--accent-rgb), 0.05)' }} className="flex flex-col items-center justify-center p-4 rounded-[1.8rem] h-full border border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-500">
                                    <Film size={24} style={{ color: 'var(--accent)' }} className="mb-2" />
                                    <p className="text-[9px] font-black uppercase tracking-widest text-center" style={{ color: 'var(--text-main)' }}>{t.movie}</p>
                                </motion.div>
                            </Link>
                        </div>
                    </BentoCard>

                    <BentoCard
                        title="Core Values"
                        titleIcon={Target}
                        className="md:col-span-1 lg:col-span-1 flex flex-col justify-center"
                        delay={0.3}
                    >
                        <div className="flex flex-col gap-5">
                            {[
                                { label: lang === 'id' ? 'Filosofi' : 'Philosophy', value: 'Disiplin', icon: ShieldCheck },
                                { label: lang === 'id' ? 'Energi' : 'Fuel', value: 'Kafein', icon: Coffee },
                                { label: lang === 'id' ? 'Prinsip' : 'State', value: 'Relentless', icon: Target }
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center gap-4 group/stat">
                                    <div className="p-3 rounded-2xl transition-all duration-300 group-hover/stat:bg-white/10 group-hover/stat:scale-110 shadow-lg"
                                         style={{ backgroundColor: 'rgba(var(--accent-rgb), 0.1)' }}>
                                        <stat.icon size={18} style={{ color: 'var(--accent)' }} />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-sm font-black leading-none uppercase tracking-tighter" style={{ color: 'var(--accent)' }}>{stat.value}</h4>
                                        <p className="text-[9px] mt-1.5 opacity-40 font-bold uppercase tracking-[0.2em] leading-none" style={{ color: 'var(--text-main)' }}>{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </BentoCard>

                    <BentoCard
                        title="Network Hub"
                        className="md:col-span-1 lg:col-span-1 flex flex-col justify-center overflow-hidden"
                        delay={0.4}
                    >
                        <div className="absolute -right-6 -bottom-6 opacity-[0.05] group-hover:scale-110 transition-transform duration-700">
                            <GraduationCap size={140} />
                        </div>

                        <div className="flex flex-col gap-5 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-2xl" style={{ backgroundColor: 'rgba(var(--text-main-rgb), 0.05)', color: 'var(--text-main)' }}>
                                    <GraduationCap size={20} />
                                </div>
                                <div>
                                    <p className="text-[11px] font-black uppercase leading-none mb-1" style={{ color: 'var(--text-main)' }}>UM Surabaya</p>
                                    <p className="text-[9px] opacity-40 font-bold uppercase tracking-wider leading-none">Informatics Student</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full shadow-[0_0_20px_rgba(var(--accent-rgb),0.2)]" style={{ backgroundColor: 'rgba(var(--accent-rgb), 0.1)', color: 'var(--accent)' }}>
                                    <MapPin size={20} className="animate-pulse" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-black uppercase leading-none mb-1" style={{ color: 'var(--text-main)' }}>{t.location}</p>
                                    <p className="text-[9px] opacity-40 font-bold uppercase tracking-wider leading-none">Active Node</p>
                                </div>
                            </div>
                        </div>
                    </BentoCard>

                </div>
            </div>
        </section>
    );
};

export default About;