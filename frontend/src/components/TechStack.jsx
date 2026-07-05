import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Terminal } from 'lucide-react';

const TechStack = () => {
    const { t } = useTranslation();

    const techItems = [
        { name: "Vue.js", function: "Core Frontend", icon: "vuedotjs", color: "#42B883", url: "https://vuejs.org/" },
        { name: "PHP", function: "Core Backend", icon: "php", color: "#777BB4", url: "https://www.php.net/" },
        { name: "Tailwind CSS", function: "UI Architecture", icon: "tailwindcss", color: "#06B6D4", url: "https://tailwindcss.com/" },

        { name: "React.js", function: "Alternative Frontend", icon: "react", color: "#61DAFB", url: "https://react.dev/" },
        { name: "Next.js", function: "Fullstack Framework", icon: "nextdotjs", color: "#000000", url: "https://nextjs.org/" },
        { name: "Nuxt.js", function: "Fullstack Framework", icon: "nuxt", color: "#00DC82", url: "https://nuxt.com/" },
        { name: "Laravel", function: "Fullstack Framework", icon: "laravel", color: "#FF2D20", url: "https://laravel.com/" },
        { name: "Go (Golang)", function: "Alternative Backend", icon: "go", color: "#00ADD8", url: "https://go.dev/" },
        { name: "Rust", function: "Core Systems", icon: "rust", color: "#000000", url: "https://www.rust-lang.org/" },

        { name: "Node.js", function: "Backend Runtime", icon: "nodedotjs", color: "#339933", url: "https://nodejs.org/" },
        { name: "Express.js", function: "Backend Framework", icon: "express", color: "#000000", url: "https://expressjs.com/" },
        { name: "JavaScript", function: "Core Language", icon: "javascript", color: "#F7DF1E", url: "https://developer.mozilla.org/" },

        { name: "Gin Gonic", function: "Go Web Framework", customImage: "https://raw.githubusercontent.com/gin-gonic/logo/master/color.png", color: "#00ADD8", url: "https://gin-gonic.com/" },
        { name: "GORM", function: "Go ORM Library", customImage: "https://avatars.githubusercontent.com/u/10832266?s=200&v=4", color: "#2496ED", url: "https://gorm.io/" },

        { name: "PostgreSQL", function: "Relational Database", icon: "postgresql", color: "#4169E1", url: "https://www.postgresql.org/" },
        { name: "MongoDB", function: "NoSQL Database", icon: "mongodb", color: "#47A248", url: "https://www.mongodb.com/" },

        { name: "Pinia", function: "Vue State Management", icon: "pinia", color: "#FFE66D", url: "https://pinia.vuejs.org/" },
        { name: "Redux", function: "React State Management", icon: "redux", color: "#764ABC", url: "https://redux.js.org/" },
        { name: "Git", function: "Version Control", icon: "git", color: "#F05032", url: "https://git-scm.com/" },
        { name: "GitHub", function: "Code Repository", icon: "github", color: "#ffffff", url: "https://github.com/" },
        { name: "Vercel", function: "Deployment Platform", icon: "vercel", color: "#ffffff", url: "https://vercel.com/" },
        { name: "Docker", function: "Containerization", icon: "docker", color: "#2496ED", url: "https://www.docker.com/" },

        { name: "Kotlin", function: "Native Android", icon: "kotlin", color: "#7F52FF", url: "https://kotlinlang.org/" },
        { name: "Flutter", function: "Cross-Platform Mobile", icon: "flutter", color: "#02569B", url: "https://flutter.dev/" },

        { name: "Python", function: "AI Core Language", icon: "python", color: "#3776AB", url: "https://www.python.org/" },
        { name: "Machine Learning", function: "Core Concept", icon: "scikitlearn", color: "#F7931E", url: "https://scikit-learn.org/" },
        { name: "PyTorch", function: "Deep Learning", icon: "pytorch", color: "#EE4C2C", url: "https://pytorch.org/" },
        { name: "TensorFlow", function: "Deep Learning", icon: "tensorflow", color: "#FF6F00", url: "https://www.tensorflow.org/" },

        { name: "JetBrains", function: "Dev Environment", icon: "jetbrains", color: "#000000", url: "https://www.jetbrains.com/" },
        { name: "Android Studio", function: "Mobile Environment", icon: "androidstudio", color: "#3DDC84", url: "https://developer.android.com/studio" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", stiffness: 150, damping: 15 }
        }
    };

    return (
        <section id="tech-stack" className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                <div className="text-center mb-14">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-4 text-[10px] font-black uppercase tracking-widest"
                        style={{
                            backgroundColor: 'rgba(var(--text-main-rgb), 0.03)',
                            borderColor: 'rgba(var(--text-main-rgb), 0.08)',
                            color: 'var(--accent)'
                        }}
                    >
                        <Terminal size={12} />
                        {t('techStack.badge')}
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black tracking-tighter"
                        style={{ color: 'var(--text-main)' }}
                    >
                        {t('techStack.title', 'Core')} <span className="text-[var(--accent)]">{t('techStack.titleHighlight', 'Tech Stack')}</span>
                    </motion.h2>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5"
                >
                    {techItems.map((tech, idx) => {
                        const bgColor = `${tech.color}1A`;

                        return (
                            <motion.a
                                href={tech.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={idx}
                                variants={itemVariants}
                                whileHover={{
                                    y: -6,
                                    borderColor: tech.color,
                                    boxShadow: `0 12px 35px -15px ${tech.color}70`
                                }}
                                className="p-5 rounded-3xl border flex flex-col items-center text-center justify-center relative overflow-hidden group transition-all duration-300 select-none cursor-pointer"
                                style={{
                                    backgroundColor: bgColor,
                                    borderColor: 'rgba(var(--text-main-rgb), 0.1)'
                                }}
                            >
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                                    style={{ backgroundColor: tech.color }}
                                />

                                <div
                                    className="w-16 h-16 rounded-2xl mb-4 border transition-transform duration-300 group-hover:scale-110 flex items-center justify-center bg-white/10 backdrop-blur-md shadow-sm"
                                    style={{
                                        borderColor: 'rgba(var(--text-main-rgb), 0.15)',
                                    }}
                                >
                                    <img
                                        src={
                                            tech.customImage
                                                ? tech.customImage
                                                : `https://cdn.simpleicons.org/${tech.icon}/${tech.color.replace('#', '')}`
                                        }
                                        alt={tech.name}
                                        className={`w-9 h-9 object-contain drop-shadow-md ${tech.customImage ? 'rounded-md' : ''}`}
                                        style={{ filter: (tech.color === '#ffffff' || tech.color === '#000000') && !tech.customImage ? 'invert(var(--invert-value, 0))' : 'none' }}
                                    />
                                </div>

                                <h3 className="text-base font-black tracking-tight mb-1" style={{ color: 'var(--text-main)' }}>
                                    {tech.name}
                                </h3>

                                <span
                                    className="text-[10px] font-black uppercase tracking-wider opacity-90 group-hover:opacity-100 transition-opacity"
                                    style={{ color: (tech.color === "#ffffff" || tech.color === "#000000") ? 'var(--text-main)' : tech.color }}
                                >
                                    {tech.function}
                                </span>
                            </motion.a>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
};

export default TechStack;

