import React from 'react';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  size?: 'full' | 'medium' | 'small';
  align?: 'center' | 'left';
  variant?: 'dark' | 'light';
}

const sizeClasses = {
  full: 'min-h-[540px] md:min-h-[540px]',
  medium: 'min-h-[300px] md:min-h-[400px]',
  small: 'min-h-[250px] md:min-h-[300px]',
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink = '#',
  backgroundImage,
  size = 'full',
  align = 'center',
  variant = 'dark',
}) => {
  const isDark = variant === 'dark';
  const textColor = isDark ? 'text-white' : 'text-black';
  const overlayBg = isDark ? 'bg-black/35' : 'bg-white/40';
  const ctaBase = isDark
    ? 'bg-white text-black hover:bg-black hover:text-white'
    : 'bg-black text-white hover:bg-gray-800';

  return (
    <section className={`relative w-full overflow-hidden flex items-center justify-center ${isDark ? 'bg-gray-100' : 'bg-white'} ${sizeClasses[size]}`}>
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[6000ms] ease-out group-hover:scale-[1.03]"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      {backgroundImage && <div className={`absolute inset-0 ${overlayBg}`} />}
      <div className={`relative z-10 w-full max-w-[1280px] mx-auto px-5 py-10 md:py-15 max-w-[700px] ${align === 'left' ? 'text-left mr-auto' : 'text-center'}`}>
        {subtitle && (
          <p className={`text-xs font-medium tracking-[0.15em] uppercase mb-3 ${textColor} opacity-85`}>
            {subtitle}
          </p>
        )}
        <h2 className={`text-3xl md:text-[2.75rem] font-bold leading-tight ${textColor} mb-4 tracking-tight`}>
          {title}
        </h2>
        {description && (
          <p className={`text-base leading-relaxed ${textColor} opacity-85 mb-7`}>
            {description}
          </p>
        )}
        {ctaText && (
          <Link
            href={ctaLink}
            className={`inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold tracking-wide uppercase rounded transition-all duration-250 ${ctaBase}`}
          >
            {ctaText}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
