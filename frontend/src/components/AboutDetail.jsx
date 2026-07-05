import React from 'react';
import { motion } from 'framer-motion';
import { X, BookOpen, Code, Award, Coffee } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutDetail = ({ isOpen, onClose }) => {
    const { t } = useTranslation();

    return (
        <div className="fixed inset-0 z-[200] pointer-events-none">
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/40 backdrop-blur-md pointer-events-auto cursor-pointer"
                />
            )}

            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: isOpen ? 0 : '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="absolute right-0 top-0 bottom-0 w-full max-w-xl shadow-2xl border-l flex flex-col pointer-events-auto"
                style={{
                    backgroundColor: 'var(--bg-main, #0a0a0a)',
                    borderColor: 'rgba(var(--text-main-rgb), 0.1)',
                }}
            >
                <div className="p-6 flex items-center justify-between border-b" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.05)' }}>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                        <h3 className="text-sm font-black uppercase tracking-[0.2em]" style={{ color: 'var(--text-main)' }}>
                            {t('about.btnDetail')}
                        </h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-xl opacity-50 hover:opacity-100 hover:bg-white/5 transition-all"
                        style={{ color: 'var(--text-main)' }}
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar">

                    <div className="space-y-4">
                        <div className="flex items-center gap-2 opacity-40">
                            <BookOpen size={16} style={{ color: 'var(--text-main)' }} />
                            <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: 'var(--text-main)' }}>Background Story</span>
                        </div>
                        <h4 className="text-xl font-bold tracking-tight" style={{ color: 'var(--text-main)' }}>
                            Dari Pesantren ke Dunia Sistem Arsitektur
                        </h4>
                        <p className="text-sm opacity-70 leading-relaxed font-medium" style={{ color: 'var(--text-main)' }}>
                            {t('about.p2')} Jiwa kedisiplinan dan ketahanan mental yang terbentuk selama 3 tahun di Jombang menjadi modal utama saya dalam mengeksplorasi ekosistem teknologi yang bergerak sangat cepat.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-2 opacity-40">
                            <Coffee size={16} style={{ color: 'var(--text-main)' }} />
                            <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: 'var(--text-main)' }}>Work Philosophy</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 rounded-2xl border" style={{ backgroundColor: 'rgba(var(--text-main-rgb), 0.02)', borderColor: 'rgba(var(--text-main-rgb), 0.05)' }}>
                                <span className="text-xs font-bold block mb-1" style={{ color: 'var(--accent)' }}>Efficiency</span>
                                <p className="text-xs opacity-60 leading-relaxed" style={{ color: 'var(--text-main)' }}>Menulis kode yang tidak hanya jalan, tapi juga optimal dalam penggunaan memori (itulah alasan saya menyukai Go & Rust).</p>
                            </div>
                            <div className="p-4 rounded-2xl border" style={{ backgroundColor: 'rgba(var(--text-main-rgb), 0.02)', borderColor: 'rgba(var(--text-main-rgb), 0.05)' }}>
                                <span className="text-xs font-bold block mb-1" style={{ color: 'var(--accent)' }}>Scalability</span>
                                <p className="text-xs opacity-60 leading-relaxed" style={{ color: 'var(--text-main)' }}>Merancang arsitektur sistem sejak awal agar siap menangani lonjakan data dan pengguna di masa depan.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-2 opacity-40">
                            <Code size={16} style={{ color: 'var(--text-main)' }} />
                            <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: 'var(--text-main)' }}>Current Exploration</span>
                        </div>
                        <p className="text-sm opacity-70 leading-relaxed font-medium" style={{ color: 'var(--text-main)' }}>
                            Saat ini di Universitas Muhammadiyah Surabaya, saya sedang mendalami riset mengenai integrasi **Robotika** dengan sistem **Web real-time** menggunakan protokol gRPC dan WebSockets untuk menciptakan efisiensi monitoring data sensor.
                        </p>
                    </div>

                </div>
            </motion.div>
        </div>
    );
};

export default AboutDetail;