import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
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
    { id: "coding", icon: Code2, accent: "var(--accent)" },
    { id: "gaming", icon: Gamepad2, accent: "var(--accent)" },
    { id: "music", icon: Music, accent: "var(--accent)" },
    { id: "film", icon: Film, accent: "var(--accent)" }
];

const HobbyCard = ({ data, index, onClick }) => {
    const { t } = useTranslation();
    const itemKey = data.id;

    return (
        <button
            onClick={() => onClick(data.id)}
            className="block h-full w-full text-left cursor-pointer group"
            aria-label={t(`hobbySection.items.${itemKey}.title`)}
        >
            <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="p-6 md:p-8 rounded-2xl border border-[var(--text-main)]/10 bg-[var(--text-main)]/[0.02] hover:bg-[var(--text-main)]/[0.04] transition-all duration-300 h-full flex flex-col justify-between min-h-[280px]"
            >
                <div className="relative z-10 flex justify-between items-start mb-8">
                    <div className="p-3 rounded-xl border border-[var(--text-main)]/5 bg-[var(--text-main)]/[0.02]">
                        <data.icon size={24} className="text-[var(--accent)]" aria-hidden="true" />
                    </div>

                    <div className="flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowUpRight size={18} className="text-[var(--text-main)]" aria-hidden="true" />
                    </div>
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                        <Sparkles size={12} className="text-[var(--accent)] opacity-80" aria-hidden="true" />
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--accent)]">
                            {t(`hobbySection.items.${itemKey}.subtitle`)}
                        </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2 text-[var(--text-main)]">
                        {t(`hobbySection.items.${itemKey}.title`)}
                    </h3>

                    <p className="text-sm leading-relaxed opacity-70 font-medium text-[var(--text-main)]">
                        {t(`hobbySection.items.${itemKey}.description`)}
                    </p>
                </div>
            </Motion.div>
        </button>
    );
};

const Hobby = () => {
    const { t } = useTranslation();
    const [activeHobby, setActiveHobby] = useState(null);

    return (
        <section id="hobby" className="py-20 md:py-28 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <Motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[var(--text-main)]">
                        {t('hobbySection.title')}
                        <span className="text-[var(--accent)]"> {t('hobbySection.titleHighlight')}</span>
                    </h2>
                    <div className="h-[2px] w-16 bg-[var(--accent)] mt-4 rounded-full" />
                </Motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {hobbyConfig.map((hobby, index) => (
                        <HobbyCard
                            key={hobby.id}
                            data={hobby}
                            index={index}
                            onClick={setActiveHobby}
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
