import React from 'react';
import { useTranslation } from 'react-i18next';
import ImageWithLoader from './ImageWithLoader'; // <-- Diimpor dari file barunya

const kDramaConfig = [
    { id: "loveTranslated", image: "https://media.themoviedb.org/t/p/w300_and_h450_face/zgUh4cgalSzBjbsT5P0qmU7Rjzk.jpg", url: "https://mydramalist.com/754291-can-this-love-be-translated" },
    { id: "manipulated", image: "https://media.themoviedb.org/t/p/w300_and_h450_face/nOj4nsomFyAVJgpp68L0xq3cREc.jpg", url: "https://mydramalist.com/749219-the-manipulated" },
    { id: "alchemy", image: "https://media.themoviedb.org/t/p/w300_and_h450_face/gvOZN1NlAoL8iz9ghpES1zWA3w3.jpg", url: "https://www.netflix.com/title/81517188" },
    { id: "watermelon", image: "https://media.themoviedb.org/t/p/w116_and_h174_face/bwTzW1wTgUxUOQruhT8DvinUYgR.jpg", url: "https://mydramalist.com/739603-sparkling-watermelon" },
    { id: "perfectCrown", image: "https://media.themoviedb.org/t/p/w300_and_h450_face/nNYwETsj4XxZ4tnouiYCPBQNO2L.jpg", url: "https://mydramalist.com/" },
    { id: "goblin", image: "https://media.themoviedb.org/t/p/w300_and_h450_face/sPkxHNw5BFvuCFGWw825TS7n6X3.jpg", url: "https://mydramalist.com/18452-goblin" }
];

const animeConfig = [
    { id: "onePiece", image: "https://cdn.myanimelist.net/images/anime/1810/139965.webp", url: "https://myanimelist.net/anime/21/One_Piece" },
    { id: "bleach", image: "https://cdn.myanimelist.net/images/anime/1908/135431.jpg", url: "https://myanimelist.net/anime/269/Bleach" },
    { id: "classroomElite", image: "https://cdn.myanimelist.net/images/anime/1176/153626.jpg", url: "https://myanimelist.net/anime/35507/Youkoso_Jitsuryoku_Shijou_Shugi_no_Kyoushitsu_e" },
    { id: "oregairu", image: "https://cdn.myanimelist.net/images/anime/1300/106253.jpg", url: "https://myanimelist.net/anime/14813/Yahari_Ore_no_Seishun_Love_Comedy_wa_Machigatteiru" },
    { id: "oshinoko", image: "https://cdn.myanimelist.net/images/anime/1979/153329.jpg", url: "https://myanimelist.net/anime/52034/Oshi_no_Ko" },
    { id: "fate", image: "https://cdn.myanimelist.net/images/anime/12/67333.jpg", url: "https://myanimelist.net/anime/356/Fate_stay_night" }
];

const HobbyFilm = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-3" style={{ color: 'var(--text-main)', opacity: 0.7 }}>
                    {t('hobbyFilm.titleKdrama', 'Top K-Dramas')}
                </h4>
                <div className="grid grid-cols-3 gap-3">
                    {kDramaConfig.map((item) => (
                        <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className="relative aspect-[2/3] rounded-xl border overflow-hidden group block cursor-pointer transition-transform hover:shadow-lg" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                            <ImageWithLoader src={item.image} alt={t(`hobbyFilm.items.${item.id}.title`)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-3 opacity-90 group-hover:opacity-100 transition-opacity">
                                <span className="text-[11px] sm:text-xs font-bold text-white line-clamp-2 leading-tight">{t(`hobbyFilm.items.${item.id}.title`)}</span>
                                <span className="text-[9px] text-[var(--accent)] font-medium mt-1 uppercase tracking-wider">{t(`hobbyFilm.items.${item.id}.release`)}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-3" style={{ color: 'var(--text-main)', opacity: 0.7 }}>
                    {t('hobbyFilm.titleAnime', 'Top Anime')}
                </h4>
                <div className="grid grid-cols-3 gap-3">
                    {animeConfig.map((item) => (
                        <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className="relative aspect-[2/3] rounded-xl border overflow-hidden group block cursor-pointer transition-transform hover:shadow-lg" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                            <ImageWithLoader src={item.image} alt={t(`hobbyFilm.items.${item.id}.title`)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-3 opacity-90 group-hover:opacity-100 transition-opacity">
                                <span className="text-[11px] sm:text-xs font-bold text-white line-clamp-2 leading-tight">{t(`hobbyFilm.items.${item.id}.title`)}</span>
                                <span className="text-[9px] text-[var(--accent)] font-medium mt-1 uppercase tracking-wider">{t(`hobbyFilm.items.${item.id}.release`)}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HobbyFilm;