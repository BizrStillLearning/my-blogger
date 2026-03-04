import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar } from 'lucide-react';

// Simulasi data detail yang lebih lengkap
const galleryDetails = {
    "pondok-pesantren-vibes": {
        title: "Pondok Pesantren Vibes",
        location: "Jombang, Jawa Timur",
        date: "2021 - 2024",
        description: "3 tahun menjalani kehidupan di Pondok Pesantren Annajiyah Bahrul Ulum. Tempat di mana disiplin, kesabaran, dan solidaritas dibentuk, sembari tetap mendalami dunia teknologi informasi.",
        mainImage: "https://images.unsplash.com/photo-1590076214667-c0f33b98c422?q=80&w=2070&auto=format&fit=crop",
        subImages: [
            "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?q=80&w=2070",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070",
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070"
        ]
    },
    // Tambahkan data detail lainnya sesuai slug id
};

const GalleryDetail = () => {
    const { id } = useParams();
    const data = galleryDetails[id];

    if (!data) return <div className="p-20 text-center text-[var(--text-main)]">Log data not found.</div>;

    return (
        <section className="min-h-screen py-32 bg-transparent relative">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">

                {/* Back Button */}
                <Link to="/" className="inline-flex items-center gap-2 mb-12 opacity-40 hover:opacity-100 transition-opacity font-bold uppercase text-[10px] tracking-[0.3em]">
                    <ArrowLeft size={16} /> Back to Archive
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic" style={{ color: 'var(--text-main)' }}>
                            {data.title}
                        </h1>
                        <div className="flex flex-col gap-4 mb-10 opacity-60">
                            <div className="flex items-center gap-3">
                                <MapPin size={18} style={{ color: 'var(--accent)' }} />
                                <p className="text-sm font-bold uppercase tracking-widest">{data.location}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Calendar size={18} style={{ color: 'var(--accent)' }} />
                                <p className="text-sm font-bold uppercase tracking-widest">{data.date}</p>
                            </div>
                        </div>
                        <p className="text-lg opacity-60 leading-relaxed max-w-xl">
                            {data.description}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl aspect-video"
                    >
                        <img src={data.mainImage} className="w-full h-full object-cover" alt="Main" />
                    </motion.div>
                </div>

                {/* Sub Images Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {data.subImages.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="aspect-square rounded-[2rem] overflow-hidden border border-white/5 group"
                        >
                            <img
                                src={img}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt={`Sub ${index}`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GalleryDetail;