import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
    GraduationCap,
    Code2,
    Binary,
    Sparkles,
    MapPin
} from 'lucide-react';

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

    const yParallax = useTransform(scrollYProgress, [0, 1], [-30, 30]);

    return (
    <div ref={cardRef} className={`relative flex items-center justify-between mb-8 md:mb-12 w-full ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col`}>

        <div className={`absolute left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[var(--accent)] to-transparent opacity-40 hidden md:block z-0 ${isLast ? 'h-full' : 'h-[calc(100%+3rem)]'}`}
             style={{ top: '40px' }} />

        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-[3px] border-[var(--bg-main)] bg-[var(--accent)] z-20 hidden md:block shadow-[0_0_15px_var(--accent)]"
            style={{ top: '40px' }}
        />

        <motion.div
            initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="w-full md:w-[45%] p-6 md:p-8 rounded-[2rem] border backdrop-blur-md relative overflow-hidden group transition-all duration-500 z-10"
            style={{
                borderColor: 'rgba(var(--text-main-rgb), 0.1)',
                backgroundColor: 'rgba(var(--text-main-rgb), 0.02)'
            }}
        >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                 style={{ background: `radial-gradient(circle at center, var(--accent), transparent)` }} />

            <motion.div
                style={{ y: yParallax }}
                className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none"
            >
                <Binary size={120} strokeWidth={1} style={{ color: 'var(--accent)' }} />
            </motion.div>

            <div className="flex items-center justify-between mb-5 relative z-10">
                <div className="flex items-center gap-2">
                    <Sparkles size={12} style={{ color: 'var(--accent)' }} />
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-60" style={{ color: 'var(--text-main)' }}>
                        {t(`timeline.items.${itemKey}.year`)}
                    </p>
                </div>
                <div className="flex items-center gap-1.5 opacity-50" style={{ color: 'var(--text-main)' }}>
                    <MapPin size={12} />
                    <p className="text-[10px] uppercase tracking-wider font-bold">
                        {t(`timeline.items.${itemKey}.location`)}
                    </p>
                </div>
            </div>

            <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 md:p-3.5 rounded-2xl shadow-inner transition-colors group-hover:bg-white/5 border shrink-0"
                         style={{ backgroundColor: 'rgba(var(--accent-rgb), 0.05)', borderColor: 'rgba(var(--accent-rgb), 0.2)' }}>
                        <Icon size={22} style={{ color: 'var(--accent)' }} />
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl font-black tracking-tight leading-tight" style={{ color: 'var(--text-main)' }}>
                            {t(`timeline.items.${itemKey}.title`)}
                        </h3>
                        <p className="text-[10px] opacity-60 font-bold uppercase tracking-widest leading-none mt-1.5">
                            {t(`timeline.items.${itemKey}.subtitle`)}
                        </p>
                    </div>
                </div>

                <p className="text-sm leading-relaxed opacity-70 mb-1 font-medium" style={{ color: 'var(--text-main)' }}>
                    {t(`timeline.items.${itemKey}.description`)}
                </p>
            </div>
        </motion.div>

        <div className="hidden md:block md:w-[45%]" />
    </div>
);
};

const Timeline = () => {
    const { t } = useTranslation();

    return (
    <section id="timeline" className="py-16 md:py-20 relative overflow-hidden bg-transparent">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mb-12 md:mb-16 flex items-center gap-6"
            >
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter" style={{ color: 'var(--text-main)' }}>
                    {t('timeline.title')}
                    <span className="text-[var(--accent)]"> {t('timeline.titleHighlight')}</span>
                </h2>
                <div className="h-[1px] flex-grow opacity-20" style={{ backgroundColor: 'var(--text-main)' }}></div>
            </motion.div>

            <div className="relative pb-4 md:pb-8">
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