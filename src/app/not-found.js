import Link from 'next/link';
import BackgroundSparkles from '@/components/ui/BackgroundSparkles';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-ink-black px-4 text-center relative overflow-hidden">
      <BackgroundSparkles count={60} />
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(201,169,97,0.05),transparent_60%)] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-serif italic font-normal text-gradient-gold-high-contrast leading-none mb-2">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white mb-6">
          Page Not Found
        </h2>
        
        <p className="text-warm-grey/80 max-w-md mx-auto mb-10 text-sm sm:text-base font-light leading-relaxed">
          The page you are looking for does not exist, has been moved, or is temporarily unavailable.
        </p>

        <Link 
          href="/"
          className="group relative inline-flex items-center justify-center bg-brand-gold text-ink-black px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-[0.2em] overflow-hidden transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
        >
          {/* White specular glare sweep on hover */}
          <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none"></span>
          <span className="relative z-10 flex items-center gap-2">
            Return to Homepage
          </span>
        </Link>
      </div>
    </div>
  );
}
