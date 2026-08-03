import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useConfigStore } from './store/useConfigStore';
import Home from '../src/views/Home';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from "./components/Navbar.jsx";
import GlobalBackground from "./components/GlobalBackground.jsx";

const MobPsychoLoader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isExploding, setIsExploding] = useState(false);

    useEffect(() => {
        const duration = 2500;
        const intervalTime = 40;
        const totalSteps = duration / intervalTime;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;

            const easeInExpo = currentStep === totalSteps ? 1 : Math.pow(2, 10 * (currentStep / totalSteps - 1));
            const currentProgress = Math.min(Math.floor(easeInExpo * 100), 100);

            setProgress(currentProgress);

            if (currentStep >= totalSteps || currentProgress >= 100) {
                clearInterval(timer);
                setProgress(100);
                setIsExploding(true);

                setTimeout(() => {
                    onComplete();
                }, 800);
            }
        }, intervalTime);

        return () => clearInterval(timer);
    }, [onComplete]);

    const shakeIntensity = progress >= 100 ? 0 : progress > 80 ? 8 : progress > 50 ? 3 : 0;

    return (
        <motion.div
            key="mob-loader"
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center overflow-hidden"
            animate={{ backgroundColor: isExploding ? 'var(--text-main)' : '#000000' }}
            exit={{
                opacity: 0,
                scale: 1.5,
                filter: "blur(20px)"
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="relative flex flex-col items-center justify-center z-10 mix-blend-difference">
                {!isExploding && (
                    <motion.div
                        className="text-xs font-black tracking-[0.5em] uppercase mb-4 text-white"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: progress > 80 ? 0.2 : 0.8 }}
                    >
                        Psychic Tension
                    </motion.div>
                )}

                <motion.div
                    className="text-8xl md:text-[150px] font-black tabular-nums tracking-tighter flex items-baseline text-white"
                    style={{ textShadow: isExploding ? 'none' : '4px 4px 0px var(--accent)' }}
                    animate={
                        isExploding
                            ? { scale: [1, 1.5], rotate: 0 }
                            : {
                                x: [-shakeIntensity, shakeIntensity, -shakeIntensity],
                                y: [shakeIntensity, -shakeIntensity, shakeIntensity],
                            }
                    }
                    transition={
                        isExploding
                            ? { duration: 0.5, type: "spring" }
                            : { repeat: Infinity, duration: 0.1 }
                    }
                >
                    {progress}
                    <span className="text-6xl md:text-8xl ml-2">%</span>
                </motion.div>

                {!isExploding && progress > 30 && (
                    <motion.div
                        className="absolute w-[120%] h-2 bg-white -rotate-6 mix-blend-overlay"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            scaleX: [0, 1, 0.5, 1],
                            y: [-20, 20, -10, 30]
                        }}
                        transition={{ repeat: Infinity, duration: 0.3 }}
                    />
                )}
            </div>
        </motion.div>
    );
};

const App = () => {
    const { theme } = useConfigStore();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <MobPsychoLoader
                        key="mob-loader"
                        onComplete={() => setIsLoading(false)}
                    />
                )}
            </AnimatePresence>

            {!isLoading && (
                <div className="relative min-h-screen transition-colors duration-700 overflow-hidden">
                    <GlobalBackground />

                    <Navbar />

                    <motion.div
                        initial={{ opacity: 0, filter: "brightness(2) blur(10px)" }}
                        animate={{ opacity: 1, filter: "brightness(1) blur(0px)" }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        transitionEnd={{ filter: "none", transform: "none" }}
                        className="w-full"
                    >
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default App;

