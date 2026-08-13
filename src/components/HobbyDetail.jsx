import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code2, Gamepad2, Music, Film } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import ImageWithLoader from './ImageWithLoader';
import HobbyFilm from './HobbyFilm';
import HobbyCoding from "./HobbyCoding.jsx";

const hobbyConfig = {
    coding: { icon: Code2, color: "var(--accent)" },
    gaming: { icon: Gamepad2, color: "#4caf50" },
    music: { icon: Music, color: "#2196f3" },
    film: { icon: Film, color: "#f44336" }
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
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/40 backdrop-blur-md pointer-events-auto cursor-pointer"
                    />

                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="absolute right-0 top-0 bottom-0 w-full max-w-xl shadow-2xl border-l flex flex-col pointer-events-auto"
                        style={{
                            backgroundColor: 'var(--bg-main, #0a0a0a)',
                            borderColor: 'rgba(var(--text-main-rgb), 0.1)',
                        }}
                    >
                        <div className="p-6 flex items-center justify-between border-b" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.05)' }}>
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl" style={{ backgroundColor: `rgba(var(--bg-main-rgb), 0.5)`, border: '1px solid rgba(var(--text-main-rgb), 0.1)' }}>
                                    <Icon size={18} style={{ color: currentHobby.color }} />
                                </div>
                                <h3 className="text-sm font-black uppercase tracking-[0.2em]" style={{ color: 'var(--text-main)' }}>
                                    {t(`hobbyDetail.header.${hobbyId}`)}
                                </h3>
                            </div>
                            <button onClick={onClose} className="p-2 rounded-xl opacity-50 hover:opacity-100 hover:bg-white/5 transition-all cursor-pointer" style={{ color: 'var(--text-main)' }}>
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
                                            <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-3" style={{ color: 'var(--text-main)', opacity: 0.7 }}>
                                                {t('hobbyGaming.mobileGames')}
                                            </h4>
                                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                                <div className="relative aspect-[3/4] rounded-xl border overflow-hidden group" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                                                    <ImageWithLoader src="https://images.igdb.com/igdb/image/upload/t_cover_big/co7lqm.webp" alt="Mobile Legends" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-3">
                                                        <span className="text-xs font-bold text-white line-clamp-2 leading-tight">Mobile Legends : Bang Bang</span>
                                                    </div>
                                                </div>

                                                <div className="relative aspect-[3/4] rounded-xl border overflow-hidden group" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                                                    <ImageWithLoader src="https://images.igdb.com/igdb/image/upload/t_cover_big/co1vqe.webp" alt="Call of Duty: Mobile" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-3">
                                                        <span className="text-xs font-bold text-white line-clamp-2 leading-tight">Call of Duty : Mobile</span>
                                                    </div>
                                                </div>

                                                <div className="relative aspect-[3/4] rounded-xl border overflow-hidden group hidden sm:block" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                                                    <ImageWithLoader src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1665460/9182eac331f562e4a3aab2384b6759c3e1a95797/header.jpg?t=1782314037" alt="eFootball" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-3">
                                                        <span className="text-xs font-bold text-white line-clamp-2 leading-tight">eFootball™</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-3" style={{ color: 'var(--text-main)', opacity: 0.7 }}>
                                                {t('hobbyGaming.consolePc')}
                                            </h4>
                                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                                <div className="relative aspect-[3/4] rounded-xl border overflow-hidden group" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                                                    <ImageWithLoader src="https://images.igdb.com/igdb/image/upload/t_cover_big/co55n7.webp" alt="God Hand" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-3">
                                                        <span className="text-xs font-bold text-white line-clamp-2 leading-tight">God Hand</span>
                                                    </div>
                                                </div>

                                                <div className="relative aspect-[3/4] rounded-xl border overflow-hidden group" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                                                    <ImageWithLoader src="https://images.igdb.com/igdb/image/upload/t_cover_big/co7lbb.webp" alt="Tekken 8" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-3">
                                                        <span className="text-xs font-bold text-white line-clamp-2 leading-tight">Tekken 8</span>
                                                    </div>
                                                </div>

                                                <div className="relative aspect-[3/4] rounded-xl border overflow-hidden group" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                                                    <ImageWithLoader src="https://images.igdb.com/igdb/image/upload/t_cover_big/co8bg9.webp" alt="Honkai: Star Rail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-3">
                                                        <span className="text-xs font-bold text-white line-clamp-2 leading-tight">Honkai : Star Rail</span>
                                                    </div>
                                                </div>

                                                <div className="relative aspect-[3/4] rounded-xl border overflow-hidden group" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                                                    <ImageWithLoader src="//images.igdb.com/igdb/image/upload/t_cover_big/co6ya5.webp" alt="Asphalt 9" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-3">
                                                        <span className="text-xs font-bold text-white line-clamp-2 leading-tight">Asphalt 9</span>
                                                    </div>
                                                </div>

                                                <div className="relative aspect-[3/4] rounded-xl border overflow-hidden group" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                                                    <ImageWithLoader src="//images.igdb.com/igdb/image/upload/t_cover_big/co4qr5.webp" alt="Attack on Titan" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-3">
                                                        <span className="text-xs font-bold text-white line-clamp-2 leading-tight">Attack on Titan</span>
                                                    </div>
                                                </div>

                                                <div className="relative aspect-[3/4] rounded-xl border overflow-hidden group" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                                                    <ImageWithLoader
                                                        src="//images.igdb.com/igdb/image/upload/t_cover_big/coab09.webp"
                                                        alt="LEGO Batman: Legacy of the Dark Knight" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-3">
                                                        <span className="text-xs font-bold text-white line-clamp-2 leading-tight">LEGO Batman: Legacy of the Dark Knight</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {hobbyId === 'music' && (
                                    <div className="flex flex-col gap-8">
                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-3" style={{ color: 'var(--text-main)', opacity: 0.7 }}>
                                                {t('hobbyMusic.recentlyPlayed')}
                                            </h4>
                                            <div className="w-full rounded-2xl overflow-hidden border p-2" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                                                <ImageWithLoader src="https://spotify-recently-played-readme.vercel.app/api?user=31syxwnrvuff6jujdk7xwn6gdawm&count=5" alt="Spotify Currently Playing" className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity" />
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-3" style={{ color: 'var(--text-main)', opacity: 0.7 }}>
                                                {t('hobbyMusic.topArtists')}
                                            </h4>
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="flex flex-col items-center gap-2 group">
                                                    <div className="w-full aspect-square rounded-full border overflow-hidden relative" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                                                        <ImageWithLoader src="https://images.genius.com/43ed61323009a690cc6b57df522a1f7a.1000x1000x1.jpg" alt="Babymonster" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                    </div>
                                                    <span className="text-xs font-bold text-center line-clamp-1" style={{ color: 'var(--text-main)' }}>BABYMONSTER</span>
                                                </div>

                                                <div className="flex flex-col items-center gap-2 group">
                                                    <div className="w-full aspect-square rounded-full border overflow-hidden relative" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                                                        <ImageWithLoader src="https://images.genius.com/df65d4044dffebc1d7576032d72b3b13.1000x1000x1.png" alt="aespa" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                    </div>
                                                    <span className="text-xs font-bold text-center line-clamp-1" style={{ color: 'var(--text-main)' }}>aespa</span>
                                                </div>

                                                <div className="flex flex-col items-center gap-2 group">
                                                    <div className="w-full aspect-square rounded-full border overflow-hidden relative" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                                                        <ImageWithLoader src="https://images.genius.com/309da76e403666d515ce0b6675b0e674.1000x1000x1.png" alt="TWICE" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                    </div>
                                                    <span className="text-xs font-bold text-center line-clamp-1" style={{ color: 'var(--text-main)' }}>TWICE</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-3" style={{ color: 'var(--text-main)', opacity: 0.7 }}>
                                                {t('hobbyMusic.favoriteAlbums')}
                                            </h4>
                                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                                <div className="relative aspect-square rounded-xl border overflow-hidden group" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                                                    <ImageWithLoader src="https://i.scdn.co/image/ab67616d0000e1a3119800c5fc88785ee3ed1524" alt="Drip - 1st Full Album by BABYMONSTER" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-3">
                                                        <span className="text-xs font-bold text-white line-clamp-2 leading-tight">DRIP</span>
                                                    </div>
                                                </div>

                                                <div className="relative aspect-square rounded-xl border overflow-hidden group" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                                                    <ImageWithLoader src="https://i.scdn.co/image/ab67616d00001e020fc598038040859794c600e2" alt="Armageddon - aespa" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-3">
                                                        <span className="text-xs font-bold text-white line-clamp-2 leading-tight">Armageddon</span>
                                                    </div>
                                                </div>

                                                <div className="relative aspect-square rounded-xl border overflow-hidden group hidden sm:block" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                                                    <ImageWithLoader src="https://i.scdn.co/image/ab67616d00001e02d179b01c0b9baac10170d1ad" alt="Heavy Serenade - NMIXX" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-3">
                                                        <span className="text-xs font-bold text-white line-clamp-2 leading-tight">Heavy Serenade</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default HobbyDetail;

