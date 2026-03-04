import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; // Tambahkan Link
import { Sparkles, ArrowUpRight } from 'lucide-react';

const galleryData = [
    {
        id: "pondok-pesantren-vibes", // Ubah ID menjadi slug string untuk URL
        title: "Pondok Pesantren Vibes",
        category: "Life",
        image: "https://images.unsplash.com/photo-1590076214667-c0f33b98c422?q=80&w=2070&auto=format&fit=crop",
        description: "Dokumentasi 3 tahun perjalanan di pesantren."
    },
    {
        id: "robotics-research",
        title: "Robotics Research",
        category: "Tech",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
        description: "Eksperimen sensor dan mikrokontroler."
    },
    {
        id: "setup-architecture",
        title: "Setup Architecture",
        category: "Setup",
        image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=2070&auto=format&fit=crop",
        description: "Tempat logika dan baris kode tercipta."
    },
    {
        id: "ui-design-exploration",
        title: "UI Design Exploration",
        category: "Design",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop",
        description: "Eksperimen interface SantriConnect."
    }
];

const Gallery = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Tech', 'Life', 'Setup', 'Design'];
    const filteredData = filter === 'All' ? galleryData : galleryData.filter(item => item.category === filter);

    return (
        <section id="gallery" className="py-32 relative overflow-hidden bg-transparent">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter" style={{ color: 'var(--text-main)' }}>
                            Visual<span className="text-[var(--accent)]">.</span>Archive
                        </h2>
                        <div className="flex items-center gap-2 mt-4 opacity-40">
                            <Sparkles size={14} style={{ color: 'var(--accent)' }} />
                            <p className="text-[10px] uppercase tracking-[0.3em] font-bold">Snapshot of my journey</p>
                        </div>
                    </motion.div>

                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                                    filter === cat
                                        ? 'bg-[var(--accent)] border-[var(--accent)] text-white shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)]'
                                        : 'border-white/5 bg-white/5 opacity-40 hover:opacity-100'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode='popLayout'>
                        {filteredData.map((item) => (
                            <Link to={`/gallery/${item.id}`} key={item.id}>
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    whileHover={{ y: -10 }}
                                    className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/5 cursor-pointer shadow-2xl"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                                        <p className="text-[var(--accent)] text-[10px] font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                                            <div className="w-1 h-1 bg-[var(--accent)] rounded-full animate-pulse" /> {item.category}
                                        </p>
                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-xs text-white/60 line-clamp-2">{item.description}</p>

                                        <div className="absolute top-6 right-6 p-3 rounded-full bg-[var(--accent)] text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-xl">
                                            <ArrowUpRight size={18} />
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Gallery;