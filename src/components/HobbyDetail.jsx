import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { X, Code2, Gamepad2, Music, Film } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import ImageWithLoader from './ImageWithLoader';
import HobbyFilm from './HobbyFilm';
import HobbyCoding from "./HobbyCoding.jsx";

const hobbyConfig = {
    coding: { icon: Code2, accent: "var(--accent)" },
    gaming: { icon: Gamepad2, accent: "var(--accent)" },
    music: { icon: Music, accent: "var(--accent)" },
    film: { icon: Film, accent: "var(--accent)" }
};

const HobbyDetail = ({ isOpen, onClose, hobbyId }) => {
    const { t } = useTranslation();
    const currentHobby = hobbyConfig[hobbyId] || hobbyConfig.coding;
    const Icon = currentHobby.icon;

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] pointer-events-none flex">
                    <Motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-[var(--bg-main)]/60 backdrop-blur-md pointer-events-auto cursor-pointer"
                    />

                    <Motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="absolute right-0 top-0 bottom-0 w-full max-w-xl shadow-2xl border-l border-[var(--text-main)]/10 flex flex-col pointer-events-auto bg-[var(--bg-main)]"
                    >
                        <div className="p-6 flex items-center justify-between border-b border-[var(--text-main)]/10">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl border border-[var(--text-main)]/10 bg-[var(--text-main)]/[0.02]">
                                    <Icon size={18} className="text-[var(--accent)]" />
                                </div>
                                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[var(--text-main)]">
                                    {t(`hobbyDetail.header.${hobbyId}`)}
                                </h3>
                            </div>
                            <button 
                                onClick={onClose} 
                                className="p-2 rounded-xl opacity-50 hover:opacity-100 hover:bg-[var(--text-main)]/5 transition-all cursor-pointer text-[var(--text-main)]"
                                aria-label="Close"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                            <div className="w-full">
                                {hobbyId === 'coding' && <HobbyCoding />}
                                {hobbyId === 'film' && <HobbyFilm />}

                                {hobbyId === 'gaming' && (
                                    <div className="flex flex-col gap-8">
                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-3 opacity-60 text-[var(--text-main)]">
                                                {t('hobbyGaming.mobileGames')}
                                            </h4>
                                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                                <GameItem 
                                                    src="https://images.igdb.com/igdb/image/upload/t_cover_big/co7lqm.webp" 
                                                    title="Mobile Legends : Bang Bang" 
                                                />
                                                <GameItem 
                                                    src="https://images.igdb.com/igdb/image/upload/t_cover_big/co1vqe.webp" 
                                                    title="Call of Duty : Mobile" 
                                                />
                                                <GameItem 
                                                    src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1665460/9182eac331f562e4a3aab2384b6759c3e1a95797/header.jpg?t=1782314037" 
                                                    title="eFootball™" 
                                                    className="hidden sm:block"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-3 opacity-60 text-[var(--text-main)]">
                                                {t('hobbyGaming.consolePc')}
                                            </h4>
                                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                                <GameItem src="https://images.igdb.com/igdb/image/upload/t_cover_big/co55n7.webp" title="God Hand" />
                                                <GameItem src="https://images.igdb.com/igdb/image/upload/t_cover_big/co7lbb.webp" title="Tekken 8" />
                                                <GameItem src="https://images.igdb.com/igdb/image/upload/t_cover_big/co8bg9.webp" title="Honkai : Star Rail" />
                                                <GameItem src="//images.igdb.com/igdb/image/upload/t_cover_big/co6ya5.webp" title="Asphalt 9" />
                                                <GameItem src="//images.igdb.com/igdb/image/upload/t_cover_big/co4qr5.webp" title="Attack on Titan" />
                                                <GameItem src="//images.igdb.com/igdb/image/upload/t_cover_big/coab09.webp" title="LEGO Batman: Legacy of the Dark Knight" />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {hobbyId === 'music' && (
                                    <div className="flex flex-col gap-8">
                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-3 opacity-60 text-[var(--text-main)]">
                                                {t('hobbyMusic.recentlyPlayed')}
                                            </h4>
                                            <div className="w-full rounded-2xl overflow-hidden border border-[var(--text-main)]/10 p-4 flex flex-col gap-4 bg-[var(--text-main)]/[0.02]">
                                                <SpotifyEmbed url="https://spotify-github-stats.vercel.app/api/now-playing?user=Bizr86&theme=synthwave&border=false" alt="Now Playing" />
                                                <div className="flex flex-col sm:flex-row gap-4 w-full">
                                                    <SpotifyEmbed url="https://spotify-github-stats.vercel.app/api/recent?user=Bizr86&theme=synthwave&border=false" alt="Recently Played" className="flex-1" />
                                                    <SpotifyEmbed url="https://spotify-github-stats.vercel.app/api/top-albums?user=Bizr86&theme=synthwave&border=false" alt="Top Albums" className="flex-[0.7]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};

// Helper Components
const GameItem = ({ src, title, className = "" }) => (
    <div className={`relative aspect-[3/4] rounded-xl border border-[var(--text-main)]/10 overflow-hidden group ${className}`}>
        <ImageWithLoader src={src} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-3">
            <span className="text-xs font-bold text-white line-clamp-2 leading-tight">{title}</span>
        </div>
    </div>
);

const SpotifyEmbed = ({ url, alt, className = "" }) => (
    <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer" className={`block hover:opacity-80 transition-opacity ${className}`}>
        <img src={url} alt={alt} className="w-full h-auto rounded-lg" />
    </a>
);

export default HobbyDetail;
