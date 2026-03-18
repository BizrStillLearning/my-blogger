import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Palette, Menu, X, Globe, ChevronDown, Code2 } from 'lucide-react';
import { useConfigStore } from '../store/useConfigStore';

const Navbar = () => {
    const { theme, setTheme, lang, setLang } = useConfigStore();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showThemeMenu, setShowThemeMenu] = useState(false);
    const [showLangMenu, setShowLangMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [theme]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Timeline', path: '/timeline' },
        { name: 'Hobby', path: '/hobby' },
        { name: 'Gallery', path: '/gallery' },
    ];

    const themes = [
        { id: 'light', color: 'bg-white border-slate-200' },
        { id: 'dark', color: 'bg-slate-900 border-blue-900' },
        { id: 'nature', color: 'bg-emerald-500 border-emerald-700' },
        { id: 'cyber', color: 'bg-purple-600 border-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.5)]' },
    ];

    const languages = [
        { name: 'English', code: 'en', flag: '🇺🇸' },
        { name: 'Indonesia', code: 'id', flag: '🇮🇩' },
        { name: 'Korea', code: 'ko', flag: '🇰🇷' },
        { name: 'Japan', code: 'jp', flag: '🇯🇵' },
        { name: 'China', code: 'zh', flag: '🇨🇳' },
        { name: 'Spanish', code: 'es', flag: '🇪🇸' },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1], staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none"
            style={{
                paddingTop: scrolled ? '1.5rem' : '0rem',
                transition: 'padding 0.8s cubic-bezier(0.23, 1, 0.32, 1)'
            }}
        >
            <nav
                className={`
                    pointer-events-auto flex items-center justify-between border-none transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                    ${scrolled
                    ? 'w-[92%] max-w-[1100px] rounded-[2.5rem] px-6 py-2 shadow-2xl ring-1 ring-black/5 dark:ring-white/10 backdrop-blur-xl'
                    : 'w-full max-w-full rounded-none px-6 md:px-10 py-6 shadow-none backdrop-blur-0'
                }
                `}
                style={{
                    backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
                    willChange: 'width, max-width, padding'
                }}
            >
                {/* Logo Section */}
                <motion.div variants={itemVariants} className="flex items-center gap-2 cursor-pointer group shrink-0">
                    <div className="p-2 rounded-xl shadow-md group-hover:rotate-6 transition-transform"
                         style={{ backgroundColor: 'var(--accent)' }}>
                        <Code2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-lg tracking-tight transition-colors duration-500" style={{ color: 'var(--text-main)' }}>
                        Kaizer<span style={{ color: 'var(--accent)' }}>dev</span>
                    </span>
                </motion.div>

                {/* Desktop Menu */}
                <motion.div
                    variants={itemVariants}
                    className="hidden md:flex items-center gap-1 p-1 rounded-full backdrop-blur-sm transition-all duration-700"
                    style={{ backgroundColor: 'rgba(100, 116, 139, 0.1)' }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="px-5 py-1.5 text-sm font-semibold transition-all rounded-full hover:bg-white/10 cursor-pointer"
                            style={{ color: 'var(--text-main)' }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </motion.div>

                {/* Actions Group */}
                <motion.div variants={itemVariants} className="flex items-center gap-2 md:gap-4 shrink-0">
                    {/* Language Selector (Desktop) */}
                    <div className="hidden md:block relative">
                        <button
                            onClick={() => { setShowLangMenu(!showLangMenu); setShowThemeMenu(false); }}
                            className="flex items-center gap-2 border-none text-[11px] font-bold rounded-full px-4 py-2 hover:opacity-80 transition-all shadow-sm cursor-pointer"
                            style={{ backgroundColor: 'rgba(100, 116, 139, 0.1)', color: 'var(--text-main)' }}
                        >
                            <Globe className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                            <span>{languages.find(l => l.code === lang)?.flag}</span>
                            <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${showLangMenu ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                            {showLangMenu && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-full right-0 mt-3 p-2 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border-none"
                                    style={{ backgroundColor: 'var(--nav-bg)' }}
                                >
                                    <div className="flex flex-col gap-1 min-w-[140px]">
                                        {languages.map((l) => (
                                            <button key={l.code} onClick={() => { setLang(l.code); setShowLangMenu(false); }}
                                                    className={`w-full flex items-center justify-between px-4 py-2 text-[11px] font-bold transition-all rounded-xl cursor-pointer ${lang === l.code ? 'text-white' : ''}`}
                                                    style={{
                                                        backgroundColor: lang === l.code ? 'var(--accent)' : 'transparent',
                                                        color: lang === l.code ? 'white' : 'var(--text-main)'
                                                    }}>
                                                <div className="flex items-center gap-2"><span>{l.flag}</span><span>{l.name}</span></div>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Theme Picker (Desktop) */}
                    <div className="hidden md:block relative">
                        <button
                            onClick={() => { setShowThemeMenu(!showThemeMenu); setShowLangMenu(false); }}
                            className="p-2.5 rounded-full border-none transition-all shadow-sm active:scale-90 cursor-pointer"
                            style={{ backgroundColor: 'rgba(100, 116, 139, 0.1)' }}
                        >
                            <Palette className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                        </button>
                        <AnimatePresence>
                            {showThemeMenu && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-full right-1/2 translate-x-1/2 mt-3 p-2 backdrop-blur-xl rounded-2xl shadow-xl border-none"
                                    style={{ backgroundColor: 'var(--nav-bg)' }}
                                >
                                    <div className="flex flex-col items-center gap-3 py-1 min-w-[50px]">
                                        {themes.map((t) => (
                                            <button key={t.id} onClick={() => { setTheme(t.id); setShowThemeMenu(false); }}
                                                    className={`w-7 h-7 rounded-full border shadow-inner transition-all cursor-pointer ${t.color} ${theme === t.id ? 'ring-2 ring-blue-600 ring-offset-2 scale-125 shadow-lg' : 'opacity-70 hover:opacity-100 hover:scale-110'}`}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2.5 rounded-full transition-colors active:scale-90 cursor-pointer"
                        style={{
                            color: 'var(--text-main)',
                            backgroundColor: 'rgba(100, 116, 139, 0.1)'
                        }}
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </motion.div>

                {/* MOBILE MENU CONTENT */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                            className="absolute top-full left-0 right-0 mt-4 md:hidden backdrop-blur-2xl rounded-[2rem] p-6 shadow-2xl z-[150] border-none mx-4"
                            style={{ backgroundColor: 'var(--nav-bg)' }}
                        >
                            <div className="flex flex-col space-y-6">
                                {/* Nav Links */}
                                <div className="flex flex-col space-y-1">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="px-4 py-3 font-semibold hover:bg-white/10 rounded-2xl transition-all text-lg text-center cursor-pointer"
                                            style={{ color: 'var(--text-main)' }}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>

                                {/* Mobile Theme & Language Section */}
                                <div className="pt-6 border-t border-black/5 dark:border-white/10 flex flex-col items-center gap-6">
                                    {/* Mobile Theme */}
                                    <div className="flex flex-col items-center gap-3 w-full">
                                        <p className="text-[10px] uppercase font-bold tracking-widest opacity-50" style={{ color: 'var(--text-main)' }}>Select Theme</p>
                                        <div className="flex justify-center gap-5">
                                            {themes.map((t) => (
                                                <button key={t.id} onClick={() => { setTheme(t.id); setIsMobileMenuOpen(false); }}
                                                        className={`w-9 h-9 rounded-full border shadow-inner transition-all cursor-pointer ${t.color} ${theme === t.id ? 'ring-2 ring-blue-600 ring-offset-2 scale-110 shadow-lg' : 'opacity-60 active:scale-90'}`}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Mobile Language */}
                                    <div className="flex flex-col items-center gap-3 w-full">
                                        <p className="text-[10px] uppercase font-bold tracking-widest opacity-50" style={{ color: 'var(--text-main)' }}>Language</p>
                                        <div className="grid grid-cols-3 gap-2 w-full">
                                            {languages.map((l) => (
                                                <button key={l.code} onClick={() => { setLang(l.code); setIsMobileMenuOpen(false); }}
                                                        className={`py-2.5 rounded-xl transition-all active:scale-95 flex items-center justify-center text-xl cursor-pointer ${lang === l.code ? 'bg-blue-600 shadow-lg' : 'bg-black/5 dark:bg-white/5'}`}
                                                >
                                                    {l.flag}
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