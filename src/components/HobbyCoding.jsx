import React from 'react';
import { useTranslation } from 'react-i18next';
import ImageWithLoader from './ImageWithLoader';

const HobbyCoding = () => {
    const { t } = useTranslation();
    const GITHUB_USERNAME = "BizrStillLearning";

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: 'var(--text-main)', opacity: 0.7 }}>
                    {t('hobbyCoding.activityStats', 'Activity & Stats')}
                </h4>
                <div className="flex flex-col gap-4">

                    <div className="w-full flex justify-center rounded-2xl overflow-hidden border p-4" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                        <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="w-full flex justify-center hover:opacity-80 transition-opacity">
                            <ImageWithLoader
                                src={`https://my-github-stats-umber-three.vercel.app/api/card/${GITHUB_USERNAME}?theme=synthwave`}
                                alt={`${GITHUB_USERNAME}'s GitHub Stats`}
                                className="w-full max-w-[495px] h-auto object-cover rounded-lg"
                            />
                        </a>
                    </div>

                    <div className="w-full rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                        <ImageWithLoader src={`https://my-streak-stats-api.vercel.app/?user=${GITHUB_USERNAME}&hide_border=true&background=0a0a0a&labels=ffffff&dates=d4d4d4&ring=ffffff&currStreakNum=ffffff&sideNums=ffffff&sideLabels=d4d4d4&v=101`} alt="Streak Stats" className="w-full h-auto object-cover" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="w-full rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                            <ImageWithLoader src={`https://github-readme-stats-chi-one-75.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&hide_border=true&bg_color=0a0a0a&title_color=ffffff&text_color=d4d4d4&langs_count=10&v=101`} alt="Top Languages" className="w-full h-auto object-cover" />
                        </div>

                        <div className="w-full rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                            <ImageWithLoader src={`https://github-readme-stats-chi-one-75.vercel.app/api/wakatime?username=${GITHUB_USERNAME}&layout=compact&range=last_7_days&langs_count=10&custom_title=WakaTime%20(Last%207%20Days)&hide_border=true&bg_color=0a0a0a&title_color=ffffff&text_color=d4d4d4&v=101`} alt="Wakatime Stats" className="w-full h-auto object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HobbyCoding;