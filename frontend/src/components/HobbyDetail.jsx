import React from 'react';
import { motion } from 'framer-motion';
import { X, Code2, Gamepad2, Music, Film } from 'lucide-react';

const hobbyConfig = {
    coding: { icon: Code2, color: "var(--accent)" },
    gaming: { icon: Gamepad2, color: "#4caf50" },
    music: { icon: Music, color: "#2196f3" },
    film: { icon: Film, color: "#f44336" }
};

const hobbyContent = {
    coding: { title: "Coding Stats" },
    gaming: { title: "Gaming Collection" },
    music: { title: "Music & Vibes" },
    film: { title: "Film & Anime" }
};

const HobbyDetail = ({ isOpen, onClose, hobbyId }) => {
    const currentHobby = hobbyConfig[hobbyId] || hobbyConfig.coding;
    const content = hobbyContent[hobbyId] || hobbyContent.coding;
    const Icon = currentHobby.icon;

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
                            {content.title}
                        </h3>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-xl opacity-50 hover:opacity-100 hover:bg-white/5 transition-all" style={{ color: 'var(--text-main)' }}>
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    <div className="w-full">

                        {hobbyId === 'coding' && (
                            <div className="flex flex-col gap-5">
                                <div className="w-full rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                                    <img
                                        src="https://github-readme-stats-chi-one-75.vercel.app/api?username=BizrStillLearning&show_icons=true&hide_border=true&bg_color=0a0a0a&title_color=ffffff&text_color=d4d4d4&icon_color=ffffff&v=101"
                                        alt="Overall Stats"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>

                                <div className="w-full rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                                    <img
                                        src="https://my-streak-stats-api.vercel.app/?user=BizrStillLearning&hide_border=true&background=0a0a0a&labels=ffffff&dates=d4d4d4&ring=ffffff&currStreakNum=ffffff&sideNums=ffffff&sideLabels=d4d4d4&v=101"
                                        alt="Streak Stats"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>

                                <div className="w-full rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                                    <img
                                        src="https://github-readme-stats-chi-one-75.vercel.app/api/top-langs/?username=BizrStillLearning&layout=compact&hide_border=true&bg_color=0a0a0a&title_color=ffffff&text_color=d4d4d4&langs_count=10&v=101"
                                        alt="Top Languages"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>

                                <div className="w-full rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                                    <img
                                        src="https://github-readme-stats-chi-one-75.vercel.app/api/wakatime?username=BizrStillLearning&layout=compact&range=last_7_days&custom_title=WakaTime%20(Last%207%20Days)&hide_border=true&bg_color=0a0a0a&title_color=ffffff&text_color=d4d4d4&v=101"
                                        alt="Wakatime Stats"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        )}

                        {hobbyId === 'gaming' && (
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                <div className="aspect-[3/4] rounded-xl border overflow-hidden" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                                    <img src="https://m.media-amazon.com/images/M/MV5BMjY5ODUyOTAtNTUzMy00NjI1LWI2ZTUtNjE4MDlkOWJmM2IwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="Mobile Legends" className="w-full h-full object-cover" />
                                </div>
                                <div className="aspect-[3/4] rounded-xl border overflow-hidden" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                                    <img src="https://image.api.playstation.com/vulcan/ap/rnd/202306/2400/9801452504930d06f0e2195dfb4eecfc8929bb63fc3c03fc.png" alt="Call of Duty" className="w-full h-full object-cover" />
                                </div>
                                <div className="aspect-[3/4] rounded-xl border overflow-hidden" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/87/EFootball_2022_cover.jpg/220px-EFootball_2022_cover.jpg" alt="eFootball" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        )}

                        {hobbyId === 'music' && (
                            <div className="w-full rounded-2xl overflow-hidden border p-2" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                                <img
                                    src="https://spotify-recently-played-readme.vercel.app/api?user=31syxwnrvuff6jujdk7xwn6gdawm&count=8"
                                    alt="Spotify Currently Playing"
                                    className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        )}

                        {hobbyId === 'film' && (
                            <div className="flex flex-col gap-4">
                                <div className="w-full aspect-video rounded-xl border overflow-hidden relative" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                                    <img src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8RV6WEs53otO4glEU23s/AAAABS1qC3X_UfFzN9-D1D8Q3N2g1iS1X_B8YhZf9YhZf9YhZf9YhZf9YhZf9YhZf9YhZf9.jpg" alt="KDrama" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4"><span className="text-sm font-bold text-white tracking-wider">K-Drama</span></div>
                                </div>
                                <div className="w-full aspect-video rounded-xl border overflow-hidden relative" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                                    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/323c8225722ce80286373809cb57a53c.jpe" alt="Anime" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4"><span className="text-sm font-bold text-white tracking-wider">Anime</span></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default HobbyDetail;