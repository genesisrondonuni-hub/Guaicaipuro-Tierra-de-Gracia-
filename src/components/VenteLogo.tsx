interface VenteLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'colored';
  subtitle?: string;
  showBadge?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function VenteLogo({ 
  className = "", 
  variant = 'colored',
  subtitle = "GUAICAIPURO",
  showBadge = true,
  size = 'md'
}: VenteLogoProps) {
  const isDark = variant === 'dark' || variant === 'light';

  const heightClasses = {
    sm: 'h-7',
    md: 'h-9 sm:h-10',
    lg: 'h-12 sm:h-14',
    xl: 'h-16 sm:h-20'
  }[size];

  const badgeSizes = {
    sm: 'w-7 h-7 text-[10px]',
    md: 'w-9 h-9 text-[12px]',
    lg: 'w-11 h-11 text-[14px]',
    xl: 'w-14 h-14 text-[16px]'
  }[size];

  // Official Vente logo with 100% solid fill in #00DED1 (--color-primary)
  const logoSrc = "/assets/aistudio/vente-logo-solid-00ded1.png";

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`} style={{ fontFamily: 'var(--font-family)' }}>
      {/* V+G circular seal in #00DED1 and #1DA5D2 */}
      {showBadge && (
        <div className="relative flex-shrink-0">
          <div 
            className={`${badgeSizes} rounded-full flex items-center justify-center text-white font-bold shadow-sm border-2 border-white`}
            style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)' }}
          >
            <span className="tracking-tighter italic">V+G</span>
          </div>
        </div>
      )}

      {/* Official Vente Wordmark & Subtitle */}
      <div className="flex flex-col justify-center leading-none">
        <img
          src={logoSrc}
          alt="Vente Venezuela"
          className={`${heightClasses} w-auto object-contain transition-all`}
          loading="eager"
        />
        
        {subtitle && (
          <div className="flex items-center gap-1.5 mt-1 pl-0.5">
            <span 
              className="text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{ color: isDark ? '#FFFFFF' : 'var(--color-heading)' }}
            >
              VENEZUELA
            </span>
            <span style={{ color: 'var(--color-border)', fontSize: '10px' }}>•</span>
            <span 
              className="text-[10px] font-bold uppercase tracking-widest"
              style={{ color: 'var(--color-secondary)' }}
            >
              {subtitle}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
