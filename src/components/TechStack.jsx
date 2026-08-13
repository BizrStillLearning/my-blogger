import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
    Terminal, Layout, Server,
    Database, Wrench, Rocket
} from 'lucide-react';

const TechStack = () => {
    const { t } = useTranslation();

    const techCategories = [
        {
            title: "Frontend Development",
            icon: Layout,
            items: [
                { name: "JavaScript", function: "Programming Language", icon: "javascript", color: "#F7DF1E", url: "https://developer.mozilla.org/" },
                { name: "TypeScript", function: "Programming Language", icon: "typescript", color: "#3178C6", url: "https://www.typescriptlang.org/" },
                { name: "React.js", function: "Frontend Library", icon: "react", color: "#61DAFB", url: "https://react.dev/" },
                { name: "Next.js", function: "React Framework", icon: "nextdotjs", color: "#000000", url: "https://nextjs.org/" },
                { name: "Vue.js", function: "Frontend Framework", icon: "vuedotjs", color: "#42B883", url: "https://vuejs.org/" },
                { name: "Nuxt.js", function: "Vue Framework", icon: "nuxt", color: "#00DC82", url: "https://nuxt.com/" },
                { name: "Tailwind CSS", function: "Utility-first CSS", icon: "tailwindcss", color: "#06B6D4", url: "https://tailwindcss.com/" },
                { name: "Pinia", function: "State Management", icon: "pinia", color: "#FFE66D", url: "https://pinia.vuejs.org/" },
                { name: "Redux", function: "State Management", icon: "redux", color: "#764ABC", url: "https://redux.js.org/" },
            ]
        },
        {
            title: "Backend Development",
            icon: Server,
            items: [
                { name: "Go (Golang)", function: "Backend Language", icon: "go", color: "#00ADD8", url: "https://go.dev/" },
                { name: "Gin Gonic", function: "Go Web Framework", customImage: "https://raw.githubusercontent.com/gin-gonic/logo/master/color.png", color: "#00ADD8", url: "https://gin-gonic.com/" },
                { name: "Node.js", function: "JavaScript Runtime", icon: "nodedotjs", color: "#339933", url: "https://nodejs.org/" },
                { name: "Express.js", function: "Backend Framework", icon: "express", color: "#000000", url: "https://expressjs.com/" },
                { name: "PHP", function: "Backend Language", icon: "php", color: "#777BB4", url: "https://www.php.net/" },
                { name: "Laravel", function: "PHP Framework", icon: "laravel", color: "#FF2D20", url: "https://laravel.com/" },
                { name: "Python", function: "Programming Language", icon: "python", color: "#3776AB", url: "https://www.python.org/" },
            ]
        },
        {
            title: "Database & ORM",
            icon: Database,
            items: [
                { name: "PostgreSQL", function: "Relational Database", icon: "postgresql", color: "#4169E1", url: "https://www.postgresql.org/" },
                { name: "MySQL", function: "Relational Database", icon: "mysql", color: "#4479A1", url: "https://www.mysql.com/" },
                { name: "MongoDB", function: "NoSQL Database", icon: "mongodb", color: "#47A248", url: "https://www.mongodb.com/" },
                { name: "GORM", function: "Go ORM Library", customImage: "https://avatars.githubusercontent.com/u/10832266?s=200&v=4", color: "#2496ED", url: "https://gorm.io/" },
            ]
        },
        {
            title: "DevOps & Tools",
            icon: Wrench,
            items: [
                { name: "Git", function: "Version Control", icon: "git", color: "#F05032", url: "https://git-scm.com/" },
                { name: "GitHub", function: "Code Hosting", icon: "github", color: "#ffffff", url: "https://github.com/" },
                { name: "Docker", function: "Container Platform", icon: "docker", color: "#2496ED", url: "https://www.docker.com/" },
                { name: "Vercel", function: "Deployment Platform", icon: "vercel", color: "#ffffff", url: "https://vercel.com/" },
                { name: "JetBrains", function: "IDE Environment", icon: "jetbrains", color: "#000000", url: "https://www.jetbrains.com/" },
                { name: "Android Studio", function: "Mobile IDE", icon: "androidstudio", color: "#3DDC84", url: "https://developer.android.com/studio" }
            ]
        }
    ];

    const learningItems = [
        { name: "Rust", function: "Systems Programming", icon: "rust", color: "#ffffff", url: "https://www.rust-lang.org/" },
        { name: "Kotlin", function: "Mobile Development", icon: "kotlin", color: "#7F52FF", url: "https://kotlinlang.org/" },
        { name: "Flutter", function: "Cross-Platform Framework", icon: "flutter", color: "#02569B", url: "https://flutter.dev/" },
        { name: "PyTorch", function: "Deep Learning", icon: "pytorch", color: "#EE4C2C", url: "https://pytorch.org/" },
        { name: "TensorFlow", function: "Machine Learning", icon: "tensorflow", color: "#FF6F00", url: "https://www.tensorflow.org/" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 15 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
    };

    return (
        <section id="tech-stack" className="relative py-24 overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--accent)] opacity-[0.03] blur-[150px] pointer-events-none rounded-full" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-14 flex items-center gap-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter" style={{ color: 'var(--text-main)' }}>
                            {t('techStack.title', 'Core')}
                            <span className="text-[var(--accent)]"> {t('techStack.titleHighlight', 'Technologies')}.</span>
                        </h2>
                        <div className="h-[1px] flex-grow opacity-10" style={{ backgroundColor: 'var(--text-main)' }}></div>
                    </motion.div>
                </div>

                <div className="flex flex-col gap-16">
                    {techCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <div className="flex items-center gap-3 mb-6 opacity-80">
                                <category.icon size={22} style={{ color: 'var(--accent)' }} />
                                <h3 className="text-xl font-bold tracking-tight uppercase" style={{ color: 'var(--text-main)' }}>
                                    {category.title}
                                </h3>
                            </div>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5"
                            >
                                {category.items.map((tech, idx) => {
                                    const bgColor = `${tech.color}10`;

                                    return (
                                        <motion.a
                                            href={tech.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            key={idx}
                                            variants={itemVariants}
                                            whileHover={{
                                                y: -5,
                                                scale: 1.02,
                                                borderColor: tech.color,
                                                boxShadow: `0 15px 35px -10px ${tech.color}40`
                                            }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="p-5 rounded-[1.5rem] border flex flex-col items-center text-center justify-center relative overflow-hidden group transition-colors duration-300"
                                            style={{
                                                backgroundColor: 'rgba(var(--text-main-rgb), 0.02)',
                                                borderColor: 'rgba(var(--text-main-rgb), 0.08)'
                                            }}
                                        >
                                            <div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                                style={{ background: `radial-gradient(circle at center, ${bgColor}, transparent)` }}
                                            />

                                            <div
                                                className="w-14 h-14 rounded-2xl mb-4 border transition-transform duration-300 group-hover:scale-110 flex items-center justify-center bg-white/5 backdrop-blur-md shadow-sm relative z-10"
                                                style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)' }}
                                            >
                                                <img
                                                    src={
                                                        tech.customImage
                                                            ? tech.customImage
                                                            : `https://cdn.simpleicons.org/${tech.icon}/${tech.color.replace('#', '')}`
                                                    }
                                                    alt={tech.name}
                                                    className={`w-7 h-7 object-contain drop-shadow-md ${tech.customImage ? 'rounded-md' : ''}`}
                                                    style={{ filter: (tech.color === '#ffffff' || tech.color === '#000000') && !tech.customImage ? 'invert(1)' : 'none' }}
                                                />
                                            </div>

                                            <h3 className="text-sm font-bold tracking-tight mb-1 relative z-10" style={{ color: 'var(--text-main)' }}>
                                                {tech.name}
                                            </h3>

                                            <span
                                                className="text-[9px] font-black uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity relative z-10"
                                                style={{ color: (tech.color === "#ffffff" || tech.color === "#000000") ? 'var(--text-main)' : tech.color }}
                                            >
                                                {tech.function}
                                            </span>
                                        </motion.a>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="mt-20 pt-12 border-t border-dashed relative"
                    style={{ borderColor: 'rgba(var(--text-main-rgb), 0.15)' }}
                >
                    <div className="flex items-center gap-3 mb-8 opacity-70">
                        <Rocket size={22} style={{ color: 'var(--accent)' }} />
                        <h3 className="text-xl font-bold tracking-tight uppercase" style={{ color: 'var(--text-main)' }}>
                            Currently Learning
                        </h3>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                    >
                        {learningItems.map((tech, idx) => (
                            <motion.a
                                href={tech.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={idx}
                                variants={itemVariants}
                                whileHover={{
                                    y: -4,
                                    scale: 1.02,
                                    borderColor: tech.color,
                                    backgroundColor: `${tech.color}0A`
                                }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="p-4 rounded-2xl border border-dashed flex items-center justify-start gap-4 transition-all duration-300 opacity-80 hover:opacity-100 group"
                                style={{
                                    borderColor: 'rgba(var(--text-main-rgb), 0.15)',
                                    backgroundColor: 'transparent'
                                }}
                            >
                                <div className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center bg-white/5 border border-white/5">
                                    <img
                                        src={`https://cdn.simpleicons.org/${tech.icon}/${tech.color.replace('#', '')}`}
                                        alt={tech.name}
                                        className="w-5 h-5 object-contain"
                                        style={{ filter: (tech.color === '#ffffff' || tech.color === '#000000') ? 'invert(1)' : 'none' }}
                                    />
                                </div>
                                <div className="flex flex-col text-left">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-sm font-bold tracking-tight" style={{ color: 'var(--text-main)' }}>
                                            {tech.name}
                                        </h3>
                                    </div>
                                    <span className="text-[8px] font-black uppercase tracking-widest mt-0.5 opacity-60" style={{ color: 'var(--text-main)' }}>
                                        {tech.function}
                                    </span>
                                </div>

                                <div className="absolute top-2 right-2 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent)' }} title="Currently Learning" />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default TechStack;

