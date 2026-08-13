import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useConfigStore = create(
    persist(
        (set) => ({
            theme: 'dark',
            lang: 'en',
            setTheme: (newTheme) => {
                document.documentElement.setAttribute('data-theme', newTheme);
                set({ theme: newTheme });
            },
            setLang: (newLang) => set({ lang: newLang }),
        }),
        {
            name: 'user-config',
        }
    )
);