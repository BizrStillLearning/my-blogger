import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu } from 'lucide-react';

const GlobalBackground = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" style={{ backgroundColor: 'var(--bg-main)' }}>

            <svg className="absolute inset-0 w-full h-full opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="global-connections" width="200" height="200" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="200" y2="200" stroke="var(--accent)" strokeWidth="1.2" />
                        <line x1="200" y1="0" x2="0" y2="200" stroke="var(--accent)" strokeWidth="1.2" />

                        <circle cx="0" cy="0" r="3" fill="var(--accent)" />
                        <circle cx="200" cy="200" r="3" fill="var(--accent)" />
                        <circle cx="100" cy="100" r="2" fill="var(--accent)" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#global-connections)" />
            </svg>

            <div className="absolute inset-0 opacity-[0.06]"
                 style={{
                     backgroundImage: `linear-gradient(var(--text-main) 1.5px, transparent 1.5px), linear-gradient(90deg, var(--text-main) 1.5px, transparent 1.5px)`,
                     backgroundSize: '60px 60px'
                 }}
            />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1200px] rounded-full blur-[150px] opacity-15"
                 style={{ background: `radial-gradient(circle, var(--accent) 0%, transparent 70%)` }}
            />

            <motion.div
                animate={{ y: [0, -30, 0], rotate: [0, 10, 0], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[15%] left-[5%] hidden lg:block"
            >
                <Code2 size={120} style={{ color: 'var(--accent)' }} />
            </motion.div>

            <motion.div
                animate={{ y: [0, 30, 0], rotate: [0, -15, 0], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[15%] right-[5%] hidden lg:block"
            >
                <Cpu size={100} style={{ color: 'var(--accent)' }} />
            </motion.div>
        </div>
    );
};

export default GlobalBackground;