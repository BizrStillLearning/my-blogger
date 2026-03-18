import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Tambahkan Link
import {
    Code2,
    Gamepad2,
    Music,
    Film,
    Sparkles,
    Binary,
    Play,
    Terminal,
    Cpu
} from 'lucide-react';

const hobbyData = [
    {
        id: "coding", // Tambahkan ID untuk rute
        title: "Coding",
        subtitle: "System Architecting",
        description: "Membangun logika kompleks dan arsitektur sistem yang skalabel menggunakan Go, Rust, dan React.",
        icon: Code2,
        color: "var(--accent)",
        bgIcon: <Binary size={120} className="absolute -right-4 -bottom-4 opacity-[0.05] group-hover:opacity-[0.08] transition-all duration-700" />
    },
    {
        id: "gaming",
        title: "Gaming",
        subtitle: "Competitive Strategy",
        description: "Menikmati tantangan mekanik dan strategi dalam game kompetitif untuk melatih refleks dan fokus.",
        icon: Gamepad2,
        color: "#4caf50",
        bgIcon: <Cpu size={120} className="absolute -right-4 -bottom-4 opacity-[0.05] group-hover:opacity-[0.08] transition-all duration-700" />
    },
    {
        id: "music",
        title: "Music",
        subtitle: "Aural Experience",
        description: "Menemukan ritme kerja yang sempurna melalui playlist Spotify yang dikurasi khusus.",
        icon: Music,
        color: "#2196f3",
        bgIcon: <Play size={120} className="absolute -right-4 -bottom-4 opacity-[0.05] group-hover:opacity-[0.08] transition-all duration-700" />
    },
    {
        id: "film",
        title: "Film",
        subtitle: "Visual Storytelling",
        description: "Mengapresiasi sinematografi dan narasi mendalam sebagai sumber inspirasi kreatif.",
        icon: Film,
        color: "#f44336",
        bgIcon: <Terminal size={120} className="absolute -right-4 -bottom-4 opacity-[0.05] group-hover:opacity-[0.08] transition-all duration-700" />
    }
];

const HobbyCard = ({ data, index }) => {
    return (
        // Gunakan Link sebagai pembungkus utama
        <Link to={`/hobby/${data.id}`} className="block h-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.95 }} // Feedback tactile saat diklik
                className="p-8 rounded-[2.5rem] border backdrop-blur-md relative overflow-hidden group transition-all duration-500 h-full"
                style={{
                    borderColor: 'rgba(var(--text-main-rgb), 0.1)',
                    backgroundColor: 'rgba(var(--text-main-rgb), 0.03)'
                }}
            >
                {/* Dynamic Glow Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none"
                     style={{ backgroundColor: data.color }} />

                {/* Background Icon Decoration */}
                {data.bgIcon}

                {/* Content */}
                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-8">
                        <Sparkles size={12} style={{ color: data.color }} />
                        <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40" style={{ color: 'var(--text-main)' }}>
                            Interests.log
                        </p>
                    </div>

                    <div className="p-4 w-fit rounded-2xl mb-6 transition-all duration-500 group-hover:scale-110 shadow-lg"
                         style={{ backgroundColor: `rgba(${data.color === 'var(--accent)' ? 'var(--accent-rgb)' : '100,100,100'}, 0.1)` }}>
                        <data.icon size={32} style={{ color: data.color }} />
                    </div>

                    <h3 className="text-2xl font-black tracking-tight mb-2" style={{ color: 'var(--text-main)' }}>
                        {data.title}
                    </h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-4" style={{ color: data.color }}>
                        {data.subtitle}
                    </p>
                    <p className="text-sm leading-relaxed opacity-60" style={{ color: 'var(--text-main)' }}>
                        {data.description}
                    </p>
                </div>
            </motion.div>
        </Link>
    );
};

const Hobby = () => {
    return (
        <section id="hobby" className="py-32 relative overflow-hidden bg-transparent">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex items-center gap-4"
                >
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter" style={{ color: 'var(--text-main)' }}>
                        User<span className="text-[var(--accent)]">.</span>Interests
                    </h2>
                    <div className="h-[2px] flex-grow opacity-10" style={{ backgroundColor: 'var(--text-main)' }}></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {hobbyData.map((hobby, index) => (
                        <HobbyCard key={index} data={hobby} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hobby;