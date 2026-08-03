import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Sparkles, X } from 'lucide-react';

const galleryConfig = [
    {
        id: "pondokPesantren",
        categoryKey: "life",
        image: "https://images.unsplash.com/photo-1590076214667-c0f33b98c422?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: "robotics",
        categoryKey: "tech",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: "setup",
        categoryKey: "setup",
        image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: "uiDesign",
        categoryKey: "design",
        image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2070&auto=format&fit=crop",
    }
];

const Gallery = () => {
    const { t } = useTranslation();
    const [filter, setFilter] = useState('all');
    const [selectedItem, setSelectedItem] = useState(null);

    const categoryKeys = ['all', 'tech', 'life', 'setup', 'design'];

    const filteredData = filter === 'all'
        ? galleryConfig
        : galleryConfig.filter(item => item.categoryKey === filter);

    useEffect(() => {
        if (selectedItem) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        const handleEsc = (e) => {
            if (e.key === 'Escape') setSelectedItem(null);
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [selectedItem]);

    return (
        <section id="gallery" className="py-24 md:pt-16 md:pb-32 relative overflow-hidden bg-transparent">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter" style={{ color: 'var(--text-main)' }}>
                            {t('gallerySection.title')}
                            <span className="text-[var(--accent)]"> {t('gallerySection.titleHighlight')}</span>
                        </h2>
                        <div className="flex items-center gap-2 mt-4 opacity-60">
                            <Sparkles size={14} style={{ color: 'var(--accent)' }} />
                            <p className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: 'var(--text-main)' }}>
                                {t('gallerySection.subtitle')}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-2 md:gap-3"
                    >
                        {categoryKeys.map((catKey) => (
                            <button
                                key={catKey}
                                onClick={() => setFilter(catKey)}
                                className="px-5 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300 border cursor-pointer"
                                style={{
                                    borderColor: filter === catKey ? 'var(--accent)' : 'rgba(var(--text-main-rgb), 0.1)',
                                    backgroundColor: filter === catKey ? 'var(--accent)' : 'transparent',
                                    color: filter === catKey ? '#fff' : 'var(--text-main)',
                                    opacity: filter === catKey ? 1 : 0.6
                                }}
                            >
                                {t(`gallerySection.categories.${catKey}`)}
                            </button>
                        ))}
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredData.map((item) => (
                            <motion.div
                                layoutId={`card-${item.id}`}
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                                onClick={() => setSelectedItem(item)}
                                className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border cursor-pointer group"
                                style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)' }}
                            >
                                <motion.img
                                    layoutId={`image-${item.id}`}
                                    src={item.image}
                                    alt={t(`gallerySection.items.${item.id}.title`)}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-[var(--accent)] text-[10px] font-black uppercase tracking-widest mb-3 flex items-center gap-2 drop-shadow-md">
                                            <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse shadow-[0_0_10px_var(--accent)]" />
                                            {t(`gallerySection.categories.${item.categoryKey}`)}
                                        </p>
                                        <h3 className="text-xl md:text-2xl font-black text-white mb-2 leading-tight drop-shadow-lg">
                                            {t(`gallerySection.items.${item.id}.title`)}
                                        </h3>
                                        <p className="text-xs md:text-sm text-white/70 line-clamp-2 font-medium drop-shadow-md">
                                            {t(`gallerySection.items.${item.id}.description`)}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {createPortal(
                <AnimatePresence>
                    {selectedItem && (
                        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-12 pointer-events-none">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedItem(null)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-md pointer-events-auto cursor-pointer"
                            />

                            <motion.div
                                layoutId={`card-${selectedItem.id}`}
                                className="relative w-full max-w-5xl bg-[#0a0a0a] rounded-3xl overflow-hidden border shadow-2xl flex flex-col md:flex-row z-10 pointer-events-auto max-h-[90vh]"
                                style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)' }}
                            >
                                <button
                                    onClick={() => setSelectedItem(null)}
                                    className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black text-white rounded-full backdrop-blur-md border border-white/10 transition-colors cursor-pointer"
                                >
                                    <X size={20} />
                                </button>

                                <div className="w-full md:w-3/5 h-[40vh] md:h-auto relative">
                                    <motion.img
                                        layoutId={`image-${selectedItem.id}`}
                                        src={selectedItem.image}
                                        alt={t(`gallerySection.items.${selectedItem.id}.title`)}
                                        className="w-full h-full object-cover absolute inset-0"
                                    />
                                </div>

                                <div className="w-full md:w-2/5 p-8 md:p-10 flex flex-col justify-center bg-[#0a0a0a] overflow-y-auto custom-scrollbar border-l border-white/5">
                                    <p className="text-[var(--accent)] text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse shadow-[0_0_10px_var(--accent)]" />
                                        {t(`gallerySection.categories.${selectedItem.categoryKey}`)}
                                    </p>

                                    <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                                        {t(`gallerySection.items.${selectedItem.id}.title`)}
                                    </h3>

                                    <div className="w-12 h-1 rounded-full mb-6 opacity-50" style={{ backgroundColor: 'var(--accent)' }}></div>

                                    <p className="text-sm md:text-base text-white/70 leading-relaxed font-medium">
                                        {t(`gallerySection.items.${selectedItem.id}.description`)}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
};

export default Gallery;



