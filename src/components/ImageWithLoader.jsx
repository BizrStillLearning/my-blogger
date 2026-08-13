import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

const ImageWithLoader = ({ src, alt, className }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="relative w-full h-full min-h-[150px] bg-white/5 flex items-center justify-center">
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="w-6 h-6 animate-spin opacity-50" style={{ color: 'var(--text-main)' }} />
                </div>
            )}
            <img
                src={src}
                alt={alt}
                className={`transition-opacity duration-500 ${className} ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                onLoad={() => setIsLoading(false)}
            />
        </div>
    );
};

export default ImageWithLoader;