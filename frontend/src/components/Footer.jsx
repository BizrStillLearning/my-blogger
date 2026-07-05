import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
    Github, Linkedin, Instagram, Mail,
    Terminal, ArrowUp, Binary, Code2
} from 'lucide-react';

const Footer = () => {
    const { t } = useTranslation();
    const [time, setTime] = useState('');
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        const updateTime = () => {
            const options = { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
            setTime(new Date().toLocaleTimeString('id-ID', options) + ' WIB');
        };

        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: Github, link: "https://github.com/BizrStillLearning", name: "GitHub" },
        { icon: Linkedin, link: "https://www.linkedin.com/in/abidzar-dzakwan-sahudi-011593388/", name: "LinkedIn" },
        { icon: Instagram, link: "https://www.instagram.com/bizrrr_ae/", name: "Instagram" },
        { icon: Mail, link: "mailto:abidzardzakwan36@gmail.com", name: "Email" }
    ];

    return (
        <footer className="relative pt-24 pb-10 overflow-hidden border-t bg-gradient-to-b from-transparent"
                style={{
                    borderColor: 'rgba(var(--text-main-rgb), 0.1)',
                    to: 'rgba(var(--accent-rgb), 0.02)'
                }}>

            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 pointer-events-none opacity-20">
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

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-16">

                    <div className="md:col-span-5 flex flex-col justify-start">
                        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-2xl border shadow-sm"
                                     style={{
                                         backgroundColor: 'rgba(var(--text-main-rgb), 0.05)',
                                         borderColor: 'rgba(var(--text-main-rgb), 0.1)'
                                     }}>
                                    <Terminal size={24} style={{ color: 'var(--accent)' }} />
                                </div>
                                <h2 className="text-3xl font-black tracking-tighter" style={{ color: 'var(--text-main)' }}>
                                    {t('footer.brand')}<span className="text-[var(--accent)]">.</span>
                                </h2>
                            </div>
                            <p className="text-sm opacity-60 max-w-sm leading-relaxed mb-8 font-medium" style={{ color: 'var(--text-main)' }}>
                                {t('footer.desc')}
                            </p>
                        </motion.div>

                        <div className="flex items-center gap-4">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    whileHover={{ y: -5, backgroundColor: 'rgba(var(--text-main-rgb), 0.1)' }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-3 rounded-xl transition-all duration-300 opacity-60 hover:opacity-100 hover:text-[var(--accent)]"
                                    style={{ color: 'var(--text-main)' }}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-3 pt-4 md:pt-0">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.5em] mb-8 opacity-40" style={{ color: 'var(--text-main)' }}>
                            {t('footer.directories')}
                        </h4>
                        <ul className="space-y-5">
                            {['About', 'Technology', 'Timeline', 'Hobby', 'Gallery'].map((item) => (
                                <motion.li key={item} whileHover={{ x: 5 }} className="group w-fit">
                                    <a href={`#${item.toLowerCase()}`} className="text-xs font-bold opacity-60 group-hover:opacity-100 transition-all flex items-center gap-3 uppercase tracking-widest" style={{ color: 'var(--text-main)' }}>
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span className="group-hover:text-[var(--accent)] transition-colors">{t(`nav${item}`)}</span>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="md:col-span-4 p-8 md:p-10 rounded-[2.5rem] border relative overflow-hidden"
                        style={{
                            backgroundColor: 'rgba(var(--text-main-rgb), 0.02)',
                            borderColor: 'rgba(var(--text-main-rgb), 0.1)'
                        }}
                    >
                        <div className="absolute -right-8 -top-8 opacity-[0.03] pointer-events-none" style={{ color: 'var(--text-main)' }}>
                            <Binary size={200} />
                        </div>

                        <div className="space-y-8 relative z-10">
                            <div className="flex justify-between items-center border-b pb-4" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.05)' }}>
                                <span className="text-[10px] font-black uppercase tracking-widest opacity-40" style={{ color: 'var(--text-main)' }}>{t('footer.status.title')}</span>
                                <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e] animate-pulse" />
                                    <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">{t('footer.status.running')}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-[10px] font-black uppercase tracking-widest opacity-40" style={{ color: 'var(--text-main)' }}>{t('footer.status.region')}</span>
                                <span className="text-[10px] font-black uppercase tracking-widest opacity-80" style={{ color: 'var(--text-main)' }}>Surabaya, ID</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-[10px] font-black uppercase tracking-widest opacity-40" style={{ color: 'var(--text-main)' }}>{t('footer.status.uptime')}</span>
                                <span className="text-[11px] font-black uppercase tracking-widest font-mono text-[var(--accent)]">
                                    {time || "00:00:00 WIB"}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6"
                     style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)' }}>

                    <div className="flex items-center">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 text-center md:text-left" style={{ color: 'var(--text-main)' }}>
                            © {currentYear} ABIDZAR DZAKWAN SAHUDI. ALL RIGHTS RESERVED.
                        </p>
                    </div>

                    <div className="flex items-center gap-2 opacity-60">
                        <Code2 size={14} style={{ color: 'var(--text-main)' }} />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--text-main)' }}>
                            BUILT WITH <span style={{ color: 'var(--accent)' }}>REACT</span> & <span style={{ color: 'var(--accent)' }}>TAILWIND</span>
                        </span>
                    </div>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 py-2.5 px-5 rounded-full border transition-all group hover:bg-[var(--accent)] hover:border-transparent"
                        style={{
                            backgroundColor: 'rgba(var(--text-main-rgb), 0.05)',
                            borderColor: 'rgba(var(--text-main-rgb), 0.1)',
                            color: 'var(--text-main)'
                        }}
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-white transition-colors">
                            {t('footer.jumpTop')}
                        </span>
                        <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform group-hover:text-white" />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;