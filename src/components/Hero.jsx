import Header from './Header';

export default function Hero() {
  return (
    <div className="p-3 sm:p-5 lg:p-6">
      <section className="relative w-full min-h-[94vh] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl flex flex-col justify-between">
      
            {/* Background Image */}
            <img
              id="heroImage"
              src="/images/hero-solar-farm.jpg"
              alt="Aerial view of FEW Solar's solar farm installation"
              className="absolute inset-0 w-full h-full object-cover"
             />

            {/* ============ GLASS NAVBAR ============ */}
            <Header />
      

            {/* ============ HERO CONTENT ============ */}
           {/* ============ HERO CONTENT ============ */}
      <div className="relative z-20 w-full px-5 sm:px-10 lg:px-14 pb-8 sm:pb-12 lg:pb-16 pt-40">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 max-w-6xl mx-auto">
    
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Heading with Glass Effect - EXACT SAME AS 1200+ CARD */}
            <h1 className="glass-heading opacity-0 animate-fadeUp d1 font-display font-semibold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.15] tracking-tight">
              Harness the<br />Power of the Sun
            </h1>
            <p className="opacity-0 animate-fadeUp d2 text-white/85 text-sm sm:text-base mt-4 max-w-md leading-relaxed">
              Eco-friendly, cost-effective, and reliable solar systems for your home and business — engineered for Pakistan, backed by industry leading warranties.
            </p>
            <a href="#contact" className="opacity-0 animate-fadeUp d3 btn-cta inline-flex items-center gap-2 text-white text-sm font-semibold pl-6 pr-2 py-2 rounded-full mt-6">
              Get Started Now
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><path d="M13 6l6 6-6 6M5 12h14"/></svg>
              </span>
            </a>
          </div>

          {/* Right Floating Stats */}
          <div className="opacity-0 animate-fadeUp d4 flex flex-col gap-3 shrink-0 mt-4 lg:mt-0">
            <div className="flex gap-3">
              <div className="glass-card animate-floatY rounded-2xl px-5 py-4 text-white min-w-[128px]">
                <p className="font-display font-extrabold text-2xl leading-none">1,200+</p>
                <p className="text-xs text-white/70 mt-1.5 leading-snug">Solar Sites<br />Installed</p>
              </div>
              <div className="glass-card animate-floatY rounded-2xl px-5 py-4 text-white min-w-[128px]" style={{ animationDelay: '.9s' }}>
                <p className="font-display font-extrabold text-2xl leading-none">120 MW+</p>
                <p className="text-xs text-white/70 mt-1.5 leading-snug">Clean Energy<br />Generated</p>
              </div>
            </div>
            <div className="glass-pill rounded-full pl-2 pr-4 py-2 flex items-center gap-3 self-start sm:self-auto">
              <div className="flex -space-x-2.5">
                <span className="avatar w-7 h-7 rounded-full bg-gradient-to-br from-amber-300 to-amber-500"></span>
                <span className="avatar w-7 h-7 rounded-full bg-gradient-to-br from-slate-400 to-slate-600"></span>
                <span className="avatar w-7 h-7 rounded-full bg-gradient-to-br from-leaf-400 to-leaf-600"></span>
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-amber-400">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8l-6.2 3.3 1.2-6.9-5-4.9 6.9-1L12 2Z"/></svg>
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8l-6.2 3.3 1.2-6.9-5-4.9 6.9-1L12 2Z"/></svg>
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8l-6.2 3.3 1.2-6.9-5-4.9 6.9-1L12 2Z"/></svg>
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8l-6.2 3.3 1.2-6.9-5-4.9 6.9-1L12 2Z"/></svg>
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8l-6.2 3.3 1.2-6.9-5-4.9 6.9-1L12 2Z"/></svg>
                </div>
                <p className="text-xs text-white font-medium mt-0.5">Pakistan's Premium Choice</p>
              </div>
            </div>
          </div>
        </div>
      </div>
          </section>
    </div>
  );
}
