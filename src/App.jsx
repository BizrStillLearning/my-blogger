import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useConfigStore } from './store/useConfigStore';
import Home from '../src/views/Home';
import { motion, AnimatePresence } from 'framer-motion';
import GlobalBackground from "./components/GlobalBackground.jsx";
import GalleryDetail from "./views/GalleryDetails.jsx";

const morphPaths = [
    "M25,50 C25,30 30,25 50,25 C70,25 75,30 75,50 C75,70 70,75 50,75 C30,75 25,70 25,50 Z",
    "M20,50 C20,30 30,20 50,20 C70,20 80,30 80,50 C80,70 70,80 50,80 C30,80 20,70 20,50 Z",
    "M30,50 C30,20 20,30 50,20 C80,10 70,40 70,50 C70,80 80,70 50,80 C20,90 30,60 30,50 Z",
    "M25,50 C25,30 30,25 50,25 C70,25 75,30 75,50 C75,70 70,75 50,75 C30,75 25,70 25,50 Z"
];

const LoadingScreen = () => {
    return (
        <motion.div
            key="loading-wrapper"
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center transition-colors duration-700"
            style={{ backgroundColor: 'var(--bg-main)' }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
            <div className="relative">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 blur-3xl rounded-full"
                    style={{ backgroundColor: 'var(--accent)' }}
                />

                <motion.svg width="120" height="120" viewBox="0 0 100 100" className="relative z-10">
                    <motion.path
                        style={{ fill: 'var(--accent)' }}
                        initial={{ d: morphPaths[0] }}
                        animate={{ d: morphPaths }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.33, 0.66, 1]
                        }}
                    />
                </motion.svg>
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mt-12 font-mono text-[10px] uppercase tracking-[0.6em]"
                style={{ color: 'var(--text-main)' }}
            >
                Loading System
            </motion.p>
        </motion.div>
    );
};

const App = () => {
    const { theme } = useConfigStore();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, [theme]);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && <LoadingScreen key="manual-loader" />}
            </AnimatePresence>

            {!isLoading && (
                <div className="relative min-h-screen transition-colors duration-700" >
                    <GlobalBackground />

                    <div className="relative z-10">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/gallery/:id" element={<GalleryDetail />} />
                        </Routes>
                    </div>
                </div>
            )}
        </>
    );
};

export default App;