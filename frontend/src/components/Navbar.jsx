import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Menu, X, Globe, ChevronDown, Code2 } from 'lucide-react';
import { useConfigStore } from '../store/useConfigStore';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const { theme, setTheme } = useConfigStore();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showThemeMenu, setShowThemeMenu] = useState(false);
    const [showLangMenu, setShowLangMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('#');

    const currentLang = i18n.language || 'en';

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);

        if (currentLang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
        }

        const handleScroll = () => { setScrolled(window.scrollY > 10); };
        window.addEventListener('scroll', handleScroll, { passive: true });

        const sectionIds = ['about', 'tech-stack', 'timeline', 'hobby', 'gallery'];
        const observerOptions = { root: null, rootMargin: '-40% 0px -50% 0px', threshold: 0 };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) { setActiveSection(`#${entry.target.id}`); }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        const handleHomeActive = () => { if (window.scrollY < 100) setActiveSection('#'); };
        window.addEventListener('scroll', handleHomeActive);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleHomeActive);
            observer.disconnect();
        };
    }, [theme, currentLang]);

    const navLinks = [
        { name: t('navHome'), href: '#' },
        { name: t('navAbout'), href: '#about' },
        { name: t('navTech'), href: '#tech-stack' },
        { name: t('navTimeline'), href: '#timeline' },
        { name: t('navHobby'), href: '#hobby' },
        { name: t('navGallery'), href: '#gallery' },
    ];

    const themes = [
        { id: 'light', color: 'bg-white border-slate-200' },
        { id: 'dark', color: 'bg-slate-900 border-blue-900' },
        { id: 'nature', color: 'bg-emerald-500 border-emerald-700' },
        { id: 'cyber', color: 'bg-purple-600 border-purple-400' },
    ];

    const languages = [
        { name: 'English', code: 'en', flagCode: 'US' },
        { name: 'Indonesia', code: 'id', flagCode: 'ID' },
        { name: 'Japan', code: 'jp', flagCode: 'JP' },
        { name: 'Korea', code: 'ko', flagCode: 'KR' },
        { name: 'China', code: 'zh', flagCode: 'CN' },
        { name: 'Arabic', code: 'ar', flagCode: 'SA' },
        { name: 'Spanish', code: 'es', flagCode: 'ES' },
    ];

    const handleLangChange = (code) => {
        i18n.changeLanguage(code);
        setShowLangMenu(false);
        setIsMobileMenuOpen(false);
    };

    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1], staggerChildren: 0.1 } }
    };
    const itemVariants = { hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } };

    return (
        <motion.div
            variants={containerVariants} initial="hidden" animate="visible"
            className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none"
            style={{ paddingTop: scrolled ? '1.5rem' : '0rem', transition: 'padding 0.8s cubic-bezier(0.23, 1, 0.32, 1)' }}
        >
            <nav
                className={
                `pointer-events-auto mx-auto flex items-center justify-between border-none transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] 
                ${
                    scrolled
                        ? 'w-[92%] max-w-[1100px] rounded-[2.5rem] px-6 py-2 shadow-2xl ring-1 ring-black/5 dark:ring-white/10 backdrop-blur-xl bg-white/70 dark:bg-slate-900/80'
                        : 'w-full max-w-full rounded-none px-6 md:px-10 py-6 shadow-none backdrop-blur-0 bg-transparent'
                }`}
                style={{ backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent', willChange: 'width, max-width, padding' }}
            >
                <motion.div variants={itemVariants} className="flex items-center gap-2 cursor-pointer group shrink-0">
                    <div className="p-2 rounded-xl shadow-md group-hover:rotate-6 transition-transform" style={{ backgroundColor: 'var(--accent)' }}>
                        <Code2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-lg tracking-tight transition-colors duration-500" style={{ color: 'var(--text-main)' }}>
                        Kaizer<span style={{ color: 'var(--accent)' }}>dev</span>
                    </span>
                </motion.div>

                <motion.div variants={itemVariants} className="hidden md:flex items-center gap-1 p-1 rounded-full backdrop-blur-sm transition-all duration-700" style={{ backgroundColor: 'rgba(100, 116, 139, 0.1)' }}>
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href;
                        return (
                            <a
                                key={link.name} href={link.href}
                                className={`px-5 py-1.5 text-sm font-semibold transition-all rounded-full hover:bg-white/10 cursor-pointer ${isActive ? 'bg-white/15 shadow-sm font-bold' : 'opacity-80'}`}
                                style={{ color: 'var(--text-main)', border: isActive ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent' }}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center gap-2 md:gap-4 shrink-0">
                    <div className="hidden md:block relative">
                        <button
                            onClick={() => { setShowLangMenu(!showLangMenu); setShowThemeMenu(false); }}
                            className="flex items-center gap-2 border-none text-[11px] font-bold rounded-full px-4 py-2 hover:opacity-80 transition-all shadow-sm cursor-pointer"
                            style={{ backgroundColor: 'rgba(100, 116, 139, 0.1)', color: 'var(--text-main)' }}
                        >
                            <Globe className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                            <div className="w-5 h-3.5 flex items-center justify-center overflow-hidden rounded-sm shadow-sm border border-white/10">
                                <ReactCountryFlag
                                    countryCode={languages.find(l => l.code === currentLang)?.flagCode || 'US'}
                                    svg
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${showLangMenu ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                            {showLangMenu && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-full right-0 mt-3 p-2 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border-none"
                                    style={{ backgroundColor: 'var(--nav-bg)' }}
                                >
                                    <div className="flex flex-col gap-1 min-w-[150px]">
                                        {languages.map((l) => (
                                            <button key={l.code} onClick={() => handleLangChange(l.code)}
                                                    className={`w-full flex items-center justify-between px-4 py-2 text-[11px] font-bold transition-all rounded-xl cursor-pointer ${currentLang === l.code ? 'text-white' : ''}`}
                                                    style={{ backgroundColor: currentLang === l.code ? 'var(--accent)' : 'transparent', color: currentLang === l.code ? 'white' : 'var(--text-main)' }}>
                                                <div className="flex items-center gap-2.5">
                                                    <div className="w-5 h-3.5 flex items-center justify-center overflow-hidden rounded-sm shadow-sm border border-white/10">
                                                        <ReactCountryFlag countryCode={l.flagCode} svg style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                    </div>
                                                    <span>{l.name}</span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="hidden md:block relative">
                        <button onClick={() => { setShowThemeMenu(!showThemeMenu); setShowLangMenu(false); }} className="p-2.5 rounded-full border-none transition-all shadow-sm active:scale-90 cursor-pointer" style={{ backgroundColor: 'rgba(100, 116, 139, 0.1)' }}>
                            <Palette className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                        </button>
                        <AnimatePresence>
                            {showThemeMenu && (
                                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute top-full right-1/2 translate-x-1/2 mt-3 p-2 backdrop-blur-xl rounded-2xl shadow-xl border-none" style={{ backgroundColor: 'var(--nav-bg)' }}>
                                    <div className="flex flex-col items-center gap-3 py-1 min-w-[50px]">
                                        {themes.map((t) => (
                                            <button key={t.id} onClick={() => { setTheme(t.id); setShowThemeMenu(false); }} className={`w-7 h-7 rounded-full border shadow-inner transition-all cursor-pointer ${t.color} ${theme === t.id ? 'ring-2 ring-blue-600 ring-offset-2 scale-125 shadow-lg' : 'opacity-70 hover:opacity-100 hover:scale-110'}`} />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2.5 rounded-full transition-colors active:scale-90 cursor-pointer" style={{ color: 'var(--text-main)', backgroundColor: 'rgba(100, 116, 139, 0.1)' }}>
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </motion.div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.95 }} transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                            className="absolute top-full left-0 right-0 mt-4 md:hidden backdrop-blur-2xl rounded-[2rem] p-6 shadow-2xl z-[150] border-none mx-4" style={{ backgroundColor: 'var(--nav-bg)' }}
                        >
                            <div className="flex flex-col space-y-6">
                                <div className="flex flex-col space-y-1">
                                    {navLinks.map((link) => {
                                        const isActive = activeSection === link.href;
                                        return (
                                            <a
                                                key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)}
                                                className={`px-4 py-3 font-semibold rounded-2xl transition-all text-lg text-center cursor-pointer ${isActive ? 'bg-white/10 font-bold' : 'opacity-80'}`}
                                                style={{ color: isActive ? 'var(--accent)' : 'var(--text-main)' }}
                                            >
                                                {link.name}
                                            </a>
                                        );
                                    })}
                                </div>

                                <div className="pt-6 border-t border-black/5 dark:border-white/10 flex flex-col items-center gap-6">
                                    <div className="flex flex-col items-center gap-3 w-full">
                                        <p className="text-[10px] uppercase font-bold tracking-widest opacity-50" style={{ color: 'var(--text-main)' }}>{t('selectTheme')}</p>
                                        <div className="flex justify-center gap-5">
                                            {themes.map((t) => (
                                                <button key={t.id} onClick={() => { setTheme(t.id); setIsMobileMenuOpen(false); }} className={`w-9 h-9 rounded-full border shadow-inner transition-all cursor-pointer ${t.color} ${theme === t.id ? 'ring-2 ring-blue-600 ring-offset-2 scale-110 shadow-lg' : 'opacity-60 active:scale-90'}`} />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center gap-3 w-full">
                                        <p className="text-[10px] uppercase font-bold tracking-widest opacity-50" style={{ color: 'var(--text-main)' }}>{t('language')}</p>
                                        <div className="grid grid-cols-4 gap-3 w-full px-2">
                                            {languages.map((l) => (
                                                <button key={l.code} onClick={() => handleLangChange(l.code)}
                                                        className={`py-3 px-1 rounded-xl transition-all active:scale-95 flex items-center justify-center cursor-pointer ${currentLang === l.code ? 'bg-blue-600 shadow-md ring-2 ring-blue-400' : 'bg-black/5 dark:bg-white/5'}`}
                                                >
                                                    <div className="w-7 h-5 flex items-center justify-center overflow-hidden rounded-sm shadow-inner border border-white/10">
                                                        <ReactCountryFlag countryCode={l.flagCode} svg style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.div>
    );
};

export default Navbar;