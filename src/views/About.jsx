import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import About from '../components/About';
import Footer from '../components/Footer';

const AboutPage = () => {
    const { i18n } = useTranslation();
    const isId = (i18n.language || 'en').startsWith('id');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="relative w-full min-h-screen flex flex-col justify-between">
            <div className="container mx-auto px-6 max-w-5xl pt-28 md:pt-36">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest opacity-60 hover:opacity-100 hover:text-[var(--accent)] transition-opacity duration-200"
                    style={{ color: 'var(--text-main)' }}
                >
                    <ArrowLeft size={14} />
                    <span>{isId ? 'Kembali ke Beranda' : 'Back to Home'}</span>
                </Link>
            </div>

            <About isStandalone={true} />

            <Footer />
        </main>
    );
};

export default AboutPage;
