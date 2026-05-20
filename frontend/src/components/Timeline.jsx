import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Import i18n hook
import {
    GraduationCap,
    Code2,
    Binary,
    Sparkles
} from 'lucide-react';

// Struktur dasar untuk layout & icon saja (Teksnya diambil dari i18n)
const timelineStructure = [
    { id: 'item1', icon: GraduationCap, side: "left" },
    { id: 'item2', icon: Code2, side: "right" }
];

const TimelineCard = ({ itemKey, icon: Icon, side, index, isLast }) => {
    const { t } = useTranslation();
    const isLeft = side === "left";
    const cardRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    // Mengambil data spesifik (array) untuk tags dari i18next
    const tags = t(`timeline.items.${itemKey}.tags`, { returnObjects: true }) || [];

    return (
        <div ref={cardRef} className={`relative flex items-center justify-between mb-32 w-full ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col`}>

            {/* Garis Tengah - Disesuaikan agar berhenti di poin terakhir */}
            <div className={`absolute left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[var(--accent)] to-transparent opacity-20 hidden md:block z-0 ${isLast ? 'h-full' : 'h-[200%]'}`}
                 style={{ top: '0' }} />

            {/* Dot Indicator */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-[var(--bg-main)] bg-[var(--accent)] z-20 hidden md:block shadow-[0_0_20px_var(--accent)]"
                style={{ top: '40px' }}
            />

            {/* Kartu Utama */}
            <motion.div
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="w-full md:w-[45%] p-8 rounded-[2.5rem] border backdrop-blur-md relative overflow-hidden group transition-all duration-500 z-10"
                style={{
                    borderColor: 'rgba(var(--text-main-rgb), 0.1)',
                    backgroundColor: 'rgba(var(--text-main-rgb), 0.03)'
                }}
            >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                     style={{ background: `radial-gradient(circle at center, var(--accent), transparent)` }} />

                <motion.div
                    style={{ y: yParallax }}
                    className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none"
                >
                    <Binary size={160} strokeWidth={1} style={{ color: 'var(--accent)' }} />
                </motion.div>

                <div className="flex items-center gap-2 mb-6 relative z-10">
                    <Sparkles size={12} style={{ color: 'var(--accent)' }} />
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40" style={{ color: 'var(--text-main)' }}>
                        {t(`timeline.items.${itemKey}.year`)}
                    </p>
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-5 mb-5">
                        <div className="p-4 rounded-2xl shadow-inner transition-colors group-hover:bg-white/5"
                             style={{ backgroundColor: 'rgba(var(--accent-rgb), 0.1)' }}>
                            <Icon size={26} style={{ color: 'var(--accent)' }} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black tracking-tight" style={{ color: 'var(--text-main)' }}>
                                {t(`timeline.items.${itemKey}.title`)}
                            </h3>
                            <p className="text-[10px] opacity-40 font-bold uppercase tracking-widest leading-none mt-1">
                                {t(`timeline.items.${itemKey}.subtitle`)}
                            </p>
                        </div>
                    </div>

                    <p className="text-sm leading-relaxed opacity-60 mb-6" style={{ color: 'var(--text-main)' }}>
                        {t(`timeline.items.${itemKey}.description`)}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {Array.isArray(tags) && tags.map((tag, i) => (
                            <span key={i} className="text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border border-white/5 bg-white/5" style={{ color: 'var(--text-main)' }}>
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>

            <div className="hidden md:block md:w-[45%]" />
        </div>
    );
};

const Timeline = () => {
    const { t } = useTranslation();

    return (
        <section id="timeline" className="py-32 relative overflow-hidden bg-transparent">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 flex items-center gap-4"
                >
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter" style={{ color: 'var(--text-main)' }}>
                        {t('timeline.title')}
                        <span className="text-[var(--accent)]"> {t('timeline.titleHighlight')}</span>
                    </h2>
                    <div className="h-[2px] flex-grow opacity-10" style={{ backgroundColor: 'var(--text-main)' }}></div>
                </motion.div>

                <div className="relative pb-20">
                    {timelineStructure.map((item, index) => (
                        <TimelineCard
                            key={item.id}
                            itemKey={item.id}
                            icon={item.icon}
                            side={item.side}
                            index={index}
                            isLast={index === timelineStructure.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;