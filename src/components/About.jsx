import React, { useMemo } from 'react';
import { motion as Motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
    MapPin,
    GraduationCap,
    Compass,
    Coffee,
    BookOpen,
    Layers,
    Code2,
    CheckCircle2,
    Terminal,
    Sparkles,
    ArrowUpRight
} from 'lucide-react';

const About = ({ isStandalone = false }) => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language || 'en';
    const isId = currentLang.startsWith('id');

    const keyHighlights = useMemo(() => isId ? [
        { id: 'backend', label: 'Sistem Terdistribusi & Backend', desc: 'Arsitektur efisien & performa tinggi' },
        { id: 'ai', label: 'Eksplorasi AI Praktis', desc: 'Integrasi LLM & alur kerja cerdas' },
        { id: 'pragmatic', label: 'Pragmatisme & Clean Code', desc: 'Kode ringkas, teruji, dan mudah dirawat' }
    ] : [
        { id: 'backend', label: 'Distributed Backend Systems', desc: 'High performance & clean architecture' },
        { id: 'ai', label: 'Practical AI Integration', desc: 'LLM workflows & intelligent tools' },
        { id: 'pragmatic', label: 'Pragmatic Engineering', desc: 'Clean, maintainable & tested code' }
    ], [isId]);

    const narrativeSections = useMemo(() => [
        {
            id: 'foundations',
            icon: BookOpen,
            badge: isId ? 'Latar Belakang & Kedisiplinan' : 'Foundations & Discipline',
            title: isId ? 'Dari Pesantren ke Dunia Rekayasa Sistem' : 'From Boarding School to Systems Engineering',
            content: [
                t('about.p2'),
                isId
                    ? 'Pengalaman hidup mandiri di pondok pesantren Annajiyah Bahrul Ulum (Jombang) menanamkan kebiasaan untuk berpikir jernih di bawah tekanan, tekun membaca dokumentasi secara menyeluruh, dan tidak mudah menyerah saat menghadapi masalah teknis yang rumit.'
                    : 'Living independently for three years at an Islamic boarding school in Jombang taught me patience and mental focus. It shaped my habit of reading technical docs deeply, diagnosing tricky edge cases calmly, and respecting the time good engineering takes.'
            ]
        },
        {
            id: 'philosophy',
            icon: Layers,
            badge: isId ? 'Filosofi Rekayasa' : 'Engineering Philosophy',
            title: isId ? 'Pragmatisme, Efisiensi, & Kode yang Terbaca' : 'Pragmatism, Efficiency, & Clear Code',
            content: [
                isId
                    ? 'Saya percaya bahwa kode yang baik adalah kode yang mudah dipahami rekan tim, efisien dalam pemanfaatan sumber daya memori, dan memecahkan masalah riil pengguna tanpa kompleksitas yang berlebihan. Saya lebih memilih memahami cara kerja internal sistem dan fondasi protokol daripada sekadar mengikuti tren sesaat.'
                    : 'I value readable code, measurable memory efficiency, and architecture that solves real problems without over-engineering. Understanding protocol fundamentals and system internals always brings more enduring value than chasing fleeting framework hype.'
            ]
        },
        {
            id: 'focus',
            icon: Code2,
            badge: isId ? 'Fokus & Visi' : 'Focus & Direction',
            title: isId ? 'Sistem Web, Backend, & Integrasi Kecerdasan Buatan' : 'Web Systems, Backend & AI Tooling',
            content: [
                t('aboutDetail.currentExplorationText'),
                t('aboutDetail.futureGoalsText')
            ]
        }
    ], [isId, t]);

    const educationItems = useMemo(() => [
        {
            id: 'um-surabaya',
            degree: 'S1 Teknik Informatika',
            institution: isId ? 'UM Surabaya (2025 - Sekarang)' : 'UM Surabaya (2025 - Present)',
            isPrimary: true
        },
        {
            id: 'annajiyah',
            degree: 'SMK TI Annajiyah Bahrul Ulum',
            institution: 'Pesantren Tambakberas (2022 - 2025)',
            isPrimary: false
        }
    ], [isId]);

    const focusTags = useMemo(() => ['Full Stack', 'Backend Systems', 'React / Go', 'AI Tools'], []);

    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className={`${isStandalone ? 'pt-8 pb-20' : 'py-20 md:py-28'} relative overflow-hidden text-[var(--text-main)]`}
        >
            {/* Soft Ambient Glows */}
            <div
                aria-hidden="true"
                className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl pointer-events-none -z-10"
            />
            <div
                aria-hidden="true"
                className="absolute bottom-10 -right-32 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none -z-10"
            />

            <div className="container mx-auto px-6 max-w-6xl">
                {/* Header: Editorial & Modern Tagline */}
                <Motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="flex flex-col space-y-4 max-w-3xl"
                >
                    <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 w-fit">
                        <Terminal size={14} className="text-[var(--accent)] shrink-0" aria-hidden="true" />
                        <span className="text-xs font-mono font-medium tracking-wide text-[var(--accent)]">
                            {isId ? '01 / Profil & Filosofi' : '01 / Profile & Mindset'}
                        </span>
                    </div>

                    <h2
                        id="about-heading"
                        className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15]"
                    >
                        {t('about.title')}{' '}
                        <span className="text-[var(--accent)] relative inline-block">
                            {t('about.highlight', 'Me')}
                            <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[var(--accent)]/30 rounded-full" aria-hidden="true" />
                        </span>
                    </h2>

                    <p className="text-lg sm:text-xl font-normal leading-relaxed opacity-90 pt-1">
                        {t('about.p1')}
                    </p>
                </Motion.div>

                {/* Main Content Layout */}
                <div className="mt-12 md:mt-16 flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
                    
                    {/* Left/Primary Narrative Column */}
                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45 }}
                        className="flex-1 flex flex-col space-y-8 w-full"
                    >
                        {/* Key Highlights Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {keyHighlights.map((item) => (
                                <div
                                    key={item.id}
                                    className="p-4 rounded-xl border border-[var(--text-main)]/10 bg-[var(--text-main)]/[0.02] backdrop-blur-sm hover:border-[var(--accent)]/40 transition-colors duration-200"
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <CheckCircle2 size={15} className="text-[var(--accent)] shrink-0" aria-hidden="true" />
                                        <span className="text-xs font-bold truncate">
                                            {item.label}
                                        </span>
                                    </div>
                                    <p className="text-[11px] opacity-70 leading-normal pl-5">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Narrative Cards Container */}
                        <div className="flex flex-col space-y-6">
                            {narrativeSections.map((section) => {
                                const IconComponent = section.icon;
                                return (
                                    <article
                                        key={section.id}
                                        className="p-6 sm:p-8 rounded-2xl border border-[var(--text-main)]/10 bg-[var(--text-main)]/[0.02] hover:bg-[var(--text-main)]/[0.03] transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent)] mb-3">
                                            <IconComponent size={16} aria-hidden="true" />
                                            <span>{section.badge}</span>
                                        </div>

                                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-4">
                                            {section.title}
                                        </h3>

                                        <div className="space-y-4 text-base leading-relaxed opacity-85">
                                            {section.content.map((paragraph, pIdx) => (
                                                <p key={`${section.id}-p-${pIdx}`}>{paragraph}</p>
                                            ))}
                                        </div>
                                    </article>
                                );
                            })}
                        </div>

                    </Motion.div>

                    {/* Right/Secondary Column: Structured Metadata Card */}
                    <Motion.aside
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.1 }}
                        aria-label={isId ? 'Spesifikasi & Detail Utama' : 'Quick Info & Specs'}
                        className="w-full lg:w-80 shrink-0 flex flex-col space-y-6 lg:sticky lg:top-24"
                    >
                        <div className="p-6 sm:p-7 rounded-2xl border border-[var(--text-main)]/10 bg-[var(--text-main)]/[0.02] backdrop-blur-md flex flex-col space-y-6">
                            
                            {/* Metadata Header */}
                            <div className="flex items-center justify-between pb-2 border-b border-[var(--text-main)]/10">
                                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)]">
                                    {isId ? 'Info Utama' : 'Quick Specs'}
                                </span>
                                <Sparkles size={14} className="text-[var(--accent)]" aria-hidden="true" />
                            </div>

                            {/* Location */}
                            <div className="flex flex-col space-y-1.5">
                                <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider opacity-60">
                                    <MapPin size={13} aria-hidden="true" />
                                    <span>{isId ? 'Lokasi' : 'Location'}</span>
                                </div>
                                <span className="text-sm font-semibold">
                                    Surabaya & Jombang, ID
                                </span>
                            </div>

                            {/* Education */}
                            <div className="flex flex-col space-y-2">
                                <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider opacity-60">
                                    <GraduationCap size={14} aria-hidden="true" />
                                    <span>{isId ? 'Pendidikan' : 'Education'}</span>
                                </div>
                                <div className="flex flex-col space-y-1">
                                    {educationItems.map((edu) => (
                                        <div key={edu.id} className="p-2.5 rounded-lg border border-[var(--text-main)]/5 bg-[var(--text-main)]/[0.02]">
                                            <span className={`text-xs block ${edu.isPrimary ? 'font-bold' : 'font-semibold'}`}>
                                                {edu.degree}
                                            </span>
                                            <span className="text-[11px] opacity-70 block">
                                                {edu.institution}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Focus Areas */}
                            <div className="flex flex-col space-y-1.5">
                                <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider opacity-60">
                                    <Compass size={13} aria-hidden="true" />
                                    <span>{isId ? 'Domain Utama' : 'Primary Focus'}</span>
                                </div>
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {focusTags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[11px] font-medium px-2.5 py-1 rounded-md border border-[var(--text-main)]/10 bg-[var(--text-main)]/[0.03]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Personal Interests */}
                            <div className="flex flex-col space-y-1.5">
                                <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider opacity-60">
                                    <Coffee size={13} aria-hidden="true" />
                                    <span>{isId ? 'Di Luar Koding' : 'Beyond Code'}</span>
                                </div>
                                <p className="text-xs leading-relaxed opacity-80">
                                    {isId
                                        ? 'Kopi seduh manual, sinematografi, game strategi, & musik kurasi.'
                                        : 'Pour-over coffee, cinematography, strategy gaming, & music.'}
                                </p>
                            </div>

                            {/* Availability Banner */}
                            <div className="pt-2 border-t border-[var(--text-main)]/10">
                                <div className="p-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="relative flex h-2 w-2" aria-hidden="true">
                                            <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                        </span>
                                        <span className="text-xs font-semibold flex items-center gap-1">
                                            <span className="sr-only">
                                                {isId ? 'Status ketersediaan:' : 'Availability status:'}
                                            </span>
                                            {isId ? 'Terbuka Kolaborasi Proyek' : 'Open for Projects & Collaboration'}
                                        </span>
                                    </div>
                                    <ArrowUpRight size={14} className="opacity-60 shrink-0" aria-hidden="true" />
                                </div>
                            </div>

                        </div>
                    </Motion.aside>

                </div>
            </div>
        </section>
    );
};

export default About;
