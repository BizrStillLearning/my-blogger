import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
    MapPin,
    GraduationCap,
    Compass,
    Coffee,
    BookOpen,
    Layers,
    Code2
} from 'lucide-react';

const About = ({ isStandalone = false }) => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language || 'en';
    const isId = currentLang.startsWith('id');

    return (
        <section
            id="about"
            className={`${isStandalone ? 'pt-8 pb-20' : 'py-20 md:py-28'} relative`}
        >
            <div className="container mx-auto px-6 max-w-5xl">
                {/* Header: Clean Editorial Typography */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="flex flex-col space-y-4 max-w-3xl"
                >
                    <div className="flex items-center gap-3">
                        <span className="w-6 h-[2px] bg-[var(--accent)] inline-block" />
                        <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
                            {isId ? '01 / Biografi & Perspektif' : '01 / Biography & Perspective'}
                        </span>
                    </div>

                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15]"
                        style={{ color: 'var(--text-main)' }}
                    >
                        {t('about.title')}{' '}
                        <span className="text-[var(--accent)]">{t('about.highlight', 'Me')}.</span>
                    </h2>

                    <p
                        className="text-lg sm:text-xl font-normal leading-relaxed opacity-85 pt-1"
                        style={{ color: 'var(--text-main)' }}
                    >
                        {t('about.p1')}
                    </p>
                </motion.div>

                {/* Main Split Layout: Pure Flexbox, Strictly NO CSS Grid */}
                <div className="mt-12 md:mt-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                    
                    {/* Primary Narrative Column */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="flex-1 flex flex-col space-y-10 w-full"
                    >
                        {/* Narrative Block 1: Background & Boarding School Discipline */}
                        <div className="flex flex-col space-y-3">
                            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[var(--accent)]">
                                <BookOpen size={14} />
                                <span>{isId ? 'Pondasi & Karakter' : 'Foundations & Discipline'}</span>
                            </div>

                            <h3
                                className="text-xl sm:text-2xl font-bold tracking-tight"
                                style={{ color: 'var(--text-main)' }}
                            >
                                {isId
                                    ? 'Dari Pesantren ke Dunia Rekayasa Sistem'
                                    : 'From Boarding School to Systems Engineering'}
                            </h3>

                            <div className="flex flex-col space-y-4 text-base sm:text-[17px] leading-relaxed opacity-80" style={{ color: 'var(--text-main)' }}>
                                <p>{t('about.p2')}</p>
                                <p>
                                    {isId
                                        ? 'Pengalaman hidup mandiri di pondok pesantren Annajiyah Bahrul Ulum (Jombang) menanamkan kebiasaan untuk berpikir jernih di bawah tekanan, tekun membaca dokumentasi secara menyeluruh, dan tidak mudah menyerah saat menghadapi masalah teknis yang rumit.'
                                        : 'Living independently for three years at an Islamic boarding school in Jombang taught me patience and mental focus. It shaped my habit of reading technical docs deeply, diagnosing tricky edge cases calmly, and respecting the time good engineering takes.'}
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-[1px] w-full bg-[var(--text-main)]/10" />

                        {/* Narrative Block 2: Engineering Philosophy */}
                        <div className="flex flex-col space-y-3">
                            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[var(--accent)]">
                                <Layers size={14} />
                                <span>{isId ? 'Filosofi Rekayasa' : 'Engineering Philosophy'}</span>
                            </div>

                            <h3
                                className="text-xl sm:text-2xl font-bold tracking-tight"
                                style={{ color: 'var(--text-main)' }}
                            >
                                {isId
                                    ? 'Pragmatisme, Efisiensi, & Kode yang Terbaca'
                                    : 'Pragmatism, Efficiency, & Clear Code'}
                            </h3>

                            <p className="text-base sm:text-[17px] leading-relaxed opacity-80" style={{ color: 'var(--text-main)' }}>
                                {isId
                                    ? 'Saya percaya bahwa kode yang baik adalah kode yang mudah dipahami rekan tim, efisien dalam pemanfaatan sumber daya memori, dan memecahkan masalah riil pengguna tanpa kompleksitas yang berlebihan. Saya lebih memilih memahami cara kerja internal sistem dan fondasi protokol daripada sekadar mengikuti tren sesaat.'
                                    : 'I value readable code, measurable memory efficiency, and architecture that solves real problems without over-engineering. Understanding protocol fundamentals and system internals always brings more enduring value than chasing fleeting framework hype.'}
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="h-[1px] w-full bg-[var(--text-main)]/10" />

                        {/* Narrative Block 3: Current Exploration */}
                        <div className="flex flex-col space-y-3">
                            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[var(--accent)]">
                                <Code2 size={14} />
                                <span>{isId ? 'Eksplorasi Saat Ini' : 'Current Exploration'}</span>
                            </div>

                            <h3
                                className="text-xl sm:text-2xl font-bold tracking-tight"
                                style={{ color: 'var(--text-main)' }}
                            >
                                {isId
                                    ? 'Integrasi Web, Sistem Backend, & Kecerdasan Buatan'
                                    : 'Web Systems, Backend Architectures, & AI Tooling'}
                            </h3>

                            <div className="flex flex-col space-y-3 text-base sm:text-[17px] leading-relaxed opacity-80" style={{ color: 'var(--text-main)' }}>
                                <p>{t('aboutDetail.currentExplorationText')}</p>
                                <p>{t('aboutDetail.futureGoalsText')}</p>
                            </div>
                        </div>

                        {/* Core Principles: Flex layout (No Grid!) */}
                        <div className="pt-2">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-1 p-5 rounded-2xl border border-[var(--text-main)]/10 bg-[var(--text-main)]/[0.02]">
                                    <span className="text-[11px] font-mono font-semibold text-[var(--accent)] block mb-1">
                                        01 / {isId ? 'Disiplin' : 'Discipline'}
                                    </span>
                                    <h4 className="text-sm font-bold mb-1.5" style={{ color: 'var(--text-main)' }}>
                                        {isId ? 'Konsistensi Logika' : 'Consistent Logic'}
                                    </h4>
                                    <p className="text-xs opacity-70 leading-relaxed" style={{ color: 'var(--text-main)' }}>
                                        {isId
                                            ? 'Membiasakan diri memeriksa logika secara teliti dari unit terkecil hingga arsitektur menyeluruh.'
                                            : 'Carefully validating logic from the smallest unit up to the overarching system design.'}
                                    </p>
                                </div>

                                <div className="flex-1 p-5 rounded-2xl border border-[var(--text-main)]/10 bg-[var(--text-main)]/[0.02]">
                                    <span className="text-[11px] font-mono font-semibold text-[var(--accent)] block mb-1">
                                        02 / {isId ? 'Kesederhanaan' : 'Simplicity'}
                                    </span>
                                    <h4 className="text-sm font-bold mb-1.5" style={{ color: 'var(--text-main)' }}>
                                        {isId ? 'Anti-Overengineering' : 'Pragmatic Design'}
                                    </h4>
                                    <p className="text-xs opacity-70 leading-relaxed" style={{ color: 'var(--text-main)' }}>
                                        {isId
                                            ? 'Solusi yang elegan adalah yang paling sederhana dan mudah dipelihara dalam jangka panjang.'
                                            : 'The most elegant solution is straightforward, reliable, and easy to maintain over time.'}
                                    </p>
                                </div>

                                <div className="flex-1 p-5 rounded-2xl border border-[var(--text-main)]/10 bg-[var(--text-main)]/[0.02]">
                                    <span className="text-[11px] font-mono font-semibold text-[var(--accent)] block mb-1">
                                        03 / {isId ? 'Eksplorasi' : 'Curiosity'}
                                    </span>
                                    <h4 className="text-sm font-bold mb-1.5" style={{ color: 'var(--text-main)' }}>
                                        {isId ? 'Pembelajar Aktif' : 'Continuous Growth'}
                                    </h4>
                                    <p className="text-xs opacity-70 leading-relaxed" style={{ color: 'var(--text-main)' }}>
                                        {isId
                                            ? 'Eksplorasi bahasa modern seperti Go & Rust dan integrasi AI fungsional untuk alur kerja riil.'
                                            : 'Exploring performant languages like Go & Rust and functional AI workflows for real utility.'}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </motion.div>

                    {/* Secondary Column: Clean Editorial Metadata Rail (Pure Flexbox) */}
                    <motion.aside
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.08 }}
                        className="w-full lg:w-80 shrink-0 flex flex-col space-y-6"
                    >
                        <div className="p-6 sm:p-7 rounded-2xl border border-[var(--text-main)]/10 bg-[var(--text-main)]/[0.02] flex flex-col space-y-6">
                            
                            {/* Metadata Item: Location */}
                            <div className="flex flex-col space-y-1.5">
                                <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider opacity-50" style={{ color: 'var(--text-main)' }}>
                                    <MapPin size={12} />
                                    <span>{isId ? 'Lokasi' : 'Location'}</span>
                                </div>
                                <span className="text-sm font-semibold" style={{ color: 'var(--text-main)' }}>
                                    Surabaya & Jombang, Indonesia
                                </span>
                            </div>

                            <div className="h-[1px] bg-[var(--text-main)]/10" />

                            {/* Metadata Item: Education */}
                            <div className="flex flex-col space-y-1.5">
                                <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider opacity-50" style={{ color: 'var(--text-main)' }}>
                                    <GraduationCap size={13} />
                                    <span>{isId ? 'Pendidikan' : 'Education'}</span>
                                </div>
                                <div className="flex flex-col space-y-0.5">
                                    <span className="text-sm font-semibold" style={{ color: 'var(--text-main)' }}>
                                        S1 Teknik Informatika
                                    </span>
                                    <span className="text-xs opacity-70" style={{ color: 'var(--text-main)' }}>
                                        Universitas Muhammadiyah Surabaya (2025 - Sekarang)
                                    </span>
                                </div>
                                <div className="flex flex-col space-y-0.5 pt-1">
                                    <span className="text-xs font-medium" style={{ color: 'var(--text-main)' }}>
                                        SMK TI Annajiyah Bahrul Ulum
                                    </span>
                                    <span className="text-[11px] opacity-60" style={{ color: 'var(--text-main)' }}>
                                        Pesantren Tambakberas Jombang (2022 - 2025)
                                    </span>
                                </div>
                            </div>

                            <div className="h-[1px] bg-[var(--text-main)]/10" />

                            {/* Metadata Item: Focus Areas */}
                            <div className="flex flex-col space-y-1.5">
                                <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider opacity-50" style={{ color: 'var(--text-main)' }}>
                                    <Compass size={12} />
                                    <span>{isId ? 'Domain Minat' : 'Primary Focus'}</span>
                                </div>
                                <span className="text-xs font-medium leading-relaxed opacity-85" style={{ color: 'var(--text-main)' }}>
                                    Full Stack Web Development, Backend Architectures, Memory-efficient Systems, Practical AI Engineering.
                                </span>
                            </div>

                            <div className="h-[1px] bg-[var(--text-main)]/10" />

                            {/* Metadata Item: Personal Interests */}
                            <div className="flex flex-col space-y-1.5">
                                <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider opacity-50" style={{ color: 'var(--text-main)' }}>
                                    <Coffee size={12} />
                                    <span>{isId ? 'Di Luar Coding' : 'Beyond the Screen'}</span>
                                </div>
                                <p className="text-xs leading-relaxed opacity-80" style={{ color: 'var(--text-main)' }}>
                                    {isId
                                        ? 'Menikmati seduhan kopi manual, apresiasi visual sinematografi/film, permainan strategi, dan musik kurasi.'
                                        : 'Pour-over coffee, cinematography & visual storytelling, competitive strategy gaming, and curated music.'}
                                </p>
                            </div>

                            <div className="h-[1px] bg-[var(--text-main)]/10" />

                            {/* Metadata Item: Status */}
                            <div className="flex flex-col space-y-2">
                                <span className="text-[11px] font-mono uppercase tracking-wider opacity-50" style={{ color: 'var(--text-main)' }}>
                                    {isId ? 'Ketersediaan' : 'Availability'}
                                </span>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                                    <span className="text-xs font-medium" style={{ color: 'var(--text-main)' }}>
                                        {isId ? 'Terbuka untuk kolaborasi proyek' : 'Open for projects & collaboration'}
                                    </span>
                                </div>
                            </div>

                        </div>
                    </motion.aside>

                </div>
            </div>
        </section>
    );
};

export default About;
