import React from 'react';

interface SyncFyreLogoProps {
  className?: string;
  height?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'white';
  asset?: 'default' | 'footer';
  shellClassName?: string;
  imageClassName?: string;
}

const sizeClasses = {
  sm: 'h-8 sm:h-10',
  md: 'h-12 sm:h-16',
  lg: 'h-16 sm:h-20 md:h-24',
  xl: 'h-24 sm:h-32 md:h-40',
};

const LOGO_URL = new URL('../../assets/syncfyre-logo.png', import.meta.url).href;
const FOOTER_LOGO_URL = new URL('../../assets/syncfyre-footer-logo.png', import.meta.url).href;

export const SyncFyreLogo: React.FC<SyncFyreLogoProps> = ({
  className = '',
  height,
  size = 'lg',
  variant = 'default',
  asset = 'default',
  shellClassName = '',
  imageClassName = '',
}) => {
  const selectedHeight = height || sizeClasses[size];
  const baseShellClassName = variant === 'white'
    ? 'bg-white/95 ring-1 ring-white/80 shadow-[0_18px_45px_rgba(15,23,42,0.28)]'
    : 'bg-transparent';
  const logoUrl = asset === 'footer' ? FOOTER_LOGO_URL : LOGO_URL;

  return (
    <div className={`inline-flex items-center justify-center rounded-2xl p-2 sm:p-3 ${baseShellClassName} ${shellClassName}`}>
      <img
        src={logoUrl}
        alt="SyncFyre"
        className={`object-contain max-w-full transition-all duration-300 ${selectedHeight} ${className} ${imageClassName}`}
      />
    </div>
  );
};
