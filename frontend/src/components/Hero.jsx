import React from 'react';
import { motion } from 'framer-motion';
import { useConfigStore } from "../store/useConfigStore.js";
import { Github, Linkedin, Twitter, Download, ExternalLink, Code2, Square } from 'lucide-react';

import ProfileImg from '../assets/img/Profile.png';

const Hero = () => {
    const { lang } = useConfigStore();

    const content = {
        en: {
            badge: "Visionary Full Stack Developer",
            name: "Abidzar Dzakwan",
            lastName: "Sahudi",
            role: "Full Stack Developer",
            description: '"Intermediate Full Stack Engineer & System Architect crafting scalable end-to-end solutions."',
            btnWork: "See My Work",
            btnCv: "View CV"
        },
        id: {
            badge: "Full Stack Developer Visioner",
            name: "Abidzar Dzakwan",
            lastName: "Sahudi",
            role: "Full Stack Developer",
            description: '"Engineer Full Stack Menengah & Arsitek Sistem yang membangun solusi end-to-end yang skalabel."',
            btnWork: "Lihat Karya",
            btnCv: "Unduh CV"
        },
    };

    const t = content[lang] || content['en'];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
        }
    };

    return (
        <section
            id="home"
            className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 transition-colors duration-700"
        >
            <div className="container mx-auto max-w-4xl z-10 pt-28 pb-20">
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center text-center">

                    <motion.div variants={itemVariants} className="relative mb-10 group">
                        <div className="absolute inset-0 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700" style={{ backgroundColor: 'var(--accent)' }} />
                        <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-2 p-1.5 transition-all duration-700"
                             style={{ borderColor: 'var(--accent)', backgroundColor: 'var(--bg-main)' }}>
                            <div className="w-full h-full rounded-full overflow-hidden border border-white/10">
                                <img
                                    src={ProfileImg}
                                    alt={t.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </div>
                        <div className="absolute bottom-3 right-3 w-6 h-6 bg-green-500 rounded-full border-4 transition-colors duration-700 shadow-lg animate-pulse" style={{ borderColor: 'var(--bg-main)' }}></div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="px-6 py-1.5 rounded-full border mb-8 backdrop-blur-md text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] transition-all"
                                style={{ borderColor: 'var(--accent)', color: 'var(--accent)', backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
                        {t.badge}
                    </motion.div>

                    <motion.div variants={itemVariants} className="mb-4">
                        <h1 className="text-6xl sm:text-7xl md:text-[8rem] font-bold tracking-tighter leading-[0.75] transition-colors duration-700" style={{ color: 'var(--text-main)' }}>
                            {t.name}
                        </h1>
                        <h1 className="text-6xl sm:text-7xl md:text-[8rem] font-bold tracking-tighter leading-[0.75] transition-colors duration-700" style={{ color: 'var(--text-main)' }}>
                            {t.lastName}
                        </h1>
                    </motion.div>

                    <motion.h3 variants={itemVariants} className="text-3xl md:text-6xl font-black mb-10 tracking-tight transition-all duration-1000"
                               style={{ color: 'var(--accent)', textShadow: `0 0 30px var(--accent)` }}>
                        {t.role}
                    </motion.h3>

                    <motion.p variants={itemVariants} className="text-sm md:text-xl italic max-w-xl mb-14 font-light leading-relaxed opacity-60 transition-colors duration-700" style={{ color: 'var(--text-main)' }}>
                        {t.description}
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex gap-8 mb-14">
                        {[
                            { icon: Github, link: "https://github.com/kaizerdev" },
                            { icon: Linkedin, link: "#" },
                            { icon: Twitter, link: "#" }
                        ].map((item, idx) => (
                            <motion.a key={idx} href={item.link} whileHover={{ y: -8, scale: 1.2, color: 'var(--accent)' }} className="transition-all duration-300" style={{ color: 'var(--text-main)' }}>
                                <item.icon size={28} />
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-5">
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: `0 0 30px var(--accent)`,
                                backgroundColor: 'var(--accent)',
                                color: '#ffffff' // Memastikan teks tetap putih saat hover
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-4 rounded-full font-bold flex items-center gap-3 transition-all duration-500 shadow-xl"
                            style={{
                                backgroundColor: 'var(--text-main)', // Warna default (hitam/putih tergantung tema)
                                color: 'var(--bg-main)'             // Kontras dengan background tombol
                            }}
                        >
                            {t.btnWork} <ExternalLink size={20} />
                        </motion.button>

                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: 'rgba(var(--accent-rgb), 0.1)', // Menggunakan transparansi warna aksen
                                borderColor: 'var(--accent)',
                                color: 'var(--accent)'
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 px-12 py-4 rounded-full font-bold flex items-center gap-3 backdrop-blur-sm transition-all duration-500"
                            style={{
                                borderColor: 'var(--text-main)',
                                color: 'var(--text-main)',
                                backgroundColor: 'transparent'
                            }}
                        >
                            {t.btnCv} <Download size={20} />
                        </motion.button>
                    </motion.div>

                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t pointer-events-none"
                 style={{ backgroundImage: `linear-gradient(to top, var(--bg-main), transparent)` }} />
        </section>
    );
};

export default Hero;