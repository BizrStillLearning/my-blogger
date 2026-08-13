import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HobbyDetail from "./HobbyDetail.jsx";
import { useTranslation } from 'react-i18next';
import {
    Code2,
    Gamepad2,
    Music,
    Film,
    Sparkles,
    ArrowUpRight
} from 'lucide-react';

const hobbyConfig = [
    { id: "coding", icon: Code2, color: "var(--accent)" },
    { id: "gaming", icon: Gamepad2, color: "#4caf50" },
    { id: "music", icon: Music, color: "#2196f3" },
    { id: "film", icon: Film, color: "#f44336" }
];

const HobbyCard = ({ data, index, onClick }) => {
    const { t } = useTranslation();
    const itemKey = data.id;

    return (
        <div onClick={() => onClick(data.id)} className="block h-full cursor-pointer">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="p-8 rounded-[2rem] border relative overflow-hidden group transition-all duration-500 h-full flex flex-col justify-between min-h-[300px]"
                style={{
                    borderColor: 'rgba(var(--text-main-rgb), 0.1)',
                    backgroundColor: 'rgba(var(--text-main-rgb), 0.02)'
                }}
            >
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none"
                    style={{ background: `radial-gradient(circle at top right, ${data.color}, transparent 70%)` }}
                />

                <div className="relative z-10 flex justify-between items-start mb-10">
                    <div className="p-4 rounded-2xl shadow-sm transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 backdrop-blur-sm border"
                         style={{
                             backgroundColor: `rgba(var(--bg-main-rgb), 0.5)`,
                             borderColor: 'rgba(var(--text-main-rgb), 0.05)'
                         }}>
                        <data.icon size={32} style={{ color: data.color }} />
                    </div>

                    <div className="w-10 h-10 rounded-full border flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 bg-white/5"
                         style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)' }}>
                        <ArrowUpRight size={18} style={{ color: 'var(--text-main)' }} />
                    </div>
                </div>

                <div className="relative z-10 mt-auto">
                    <div className="flex items-center gap-2 mb-3">
                        <Sparkles size={14} style={{ color: data.color }} className="opacity-70" />
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold" style={{ color: data.color }}>
                            {t(`hobbySection.items.${itemKey}.subtitle`)}
                        </p>
                    </div>

                    <h3 className="text-xl md:text-2xl font-black tracking-tight mb-3 transition-colors duration-300"
                        style={{ color: 'var(--text-main)' }}>
                        {t(`hobbySection.items.${itemKey}.title`)}
                    </h3>

                    <p className="text-sm leading-relaxed opacity-60 font-medium" style={{ color: 'var(--text-main)' }}>
                        {t(`hobbySection.items.${itemKey}.description`)}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

const Hobby = () => {
    const { t } = useTranslation();

    const [activeHobby, setActiveHobby] = useState(null);

    const handleOpenDetail = (id) => {
        setActiveHobby(id);
    };

    return (
        <section id="hobby" className="py-20 md:py-24 relative overflow-hidden bg-transparent">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-12 md:mb-16 flex items-center gap-6"
                >
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter" style={{ color: 'var(--text-main)' }}>
                        {t('hobbySection.title')}
                        <span className="text-[var(--accent)]"> {t('hobbySection.titleHighlight')}</span>
                    </h2>
                    <div className="h-[1px] flex-grow opacity-20" style={{ backgroundColor: 'var(--text-main)' }}></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {hobbyConfig.map((hobby, index) => (
                        <HobbyCard
                            key={hobby.id}
                            data={hobby}
                            index={index}
                            onClick={handleOpenDetail}
                        />
                    ))}
                </div>

            </div>

            <AnimatePresence>
                {activeHobby && (
                    <HobbyDetail
                        isOpen={!!activeHobby}
                        hobbyId={activeHobby}
                        onClose={() => setActiveHobby(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hobby;

