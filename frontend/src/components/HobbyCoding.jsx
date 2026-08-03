import React, { useState, useEffect } from 'react';
import { Code2 } from "lucide-react";
import { useTranslation } from 'react-i18next';
import ImageWithLoader from './ImageWithLoader';

const HobbyCoding = () => {
    const { t } = useTranslation();
    const [latestRepos, setLatestRepos] = useState([]);
    const [isLoadingRepos, setIsLoadingRepos] = useState(true);

    const GITHUB_USERNAME = "BizrStillLearning";

    useEffect(() => {
        const fetchLatestRepos = async () => {
            try {
                setIsLoadingRepos(true);
                const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=5`);

                if (res.ok) {
                    const data = await res.json();
                    const filteredRepos = data.filter(repo => !repo.fork).slice(0, 2);
                    setLatestRepos(filteredRepos);
                }
            } catch (error) {
                console.error('Error fetching data from GitHub:', error.message);
            } finally {
                setIsLoadingRepos(false);
            }
        };

        fetchLatestRepos();
    }, []);

    return (
        <div className="flex flex-col gap-8">

            <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: 'var(--text-main)', opacity: 0.7 }}>
                    {t('hobbyCoding.activityStats', 'Activity & Stats')}
                </h4>
                <div className="flex flex-col gap-4">
                    <div className="w-full rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                        <ImageWithLoader src={`https://github-readme-stats-chi-one-75.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&hide_border=true&bg_color=0a0a0a&title_color=ffffff&text_color=d4d4d4&icon_color=ffffff&v=101`} alt="Overall Stats" className="w-full h-auto object-cover" />
                    </div>
                    <div className="w-full rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                        <ImageWithLoader src={`https://my-streak-stats-api.vercel.app/?user=${GITHUB_USERNAME}&hide_border=true&background=0a0a0a&labels=ffffff&dates=d4d4d4&ring=ffffff&currStreakNum=ffffff&sideNums=ffffff&sideLabels=d4d4d4&v=101`} alt="Streak Stats" className="w-full h-auto object-cover" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="w-full rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                            <ImageWithLoader src={`https://github-readme-stats-chi-one-75.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&hide_border=true&bg_color=0a0a0a&title_color=ffffff&text_color=d4d4d4&langs_count=10&v=101`} alt="Top Languages" className="w-full h-auto object-cover" />
                        </div>
                        <div className="w-full rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                            <ImageWithLoader src={`https://github-readme-stats-chi-one-75.vercel.app/api/wakatime?username=${GITHUB_USERNAME}&layout=compact&range=last_7_days&custom_title=WakaTime%20(Last%207%20Days)&hide_border=true&bg_color=0a0a0a&title_color=ffffff&text_color=d4d4d4&v=101`} alt="Wakatime Stats" className="w-full h-auto object-cover" />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: 'var(--text-main)', opacity: 0.7 }}>
                    {t('hobbyCoding.latestUpdates', 'Latest Repositories')}
                </h4>

                {isLoadingRepos ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="w-full h-[120px] rounded-2xl bg-white/5 animate-pulse border border-white/10"></div>
                        <div className="w-full h-[120px] rounded-2xl bg-white/5 animate-pulse border border-white/10"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {latestRepos.map((repo) => (
                            <div key={repo.id} className="w-full rounded-2xl overflow-hidden border transition-all duration-300 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]" style={{ borderColor: 'rgba(var(--text-main-rgb), 0.1)', backgroundColor: '#0a0a0a' }}>
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                                    <ImageWithLoader
                                        src={`https://github-readme-stats-chi-one-75.vercel.app/api/pin/?username=${GITHUB_USERNAME}&repo=${repo.name}&hide_border=true&bg_color=0a0a0a&title_color=ffffff&text_color=d4d4d4&icon_color=ffffff`}
                                        alt={repo.name}
                                        className="w-full h-auto object-cover"
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default HobbyCoding;