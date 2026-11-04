import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [accOpen, setAccOpen] = useState(false);
  const navRef = useRef(null);

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => {
      if (navRef.current) navRef.current.classList.toggle('scrolled', window.scrollY > 20);
    };
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open ]);

  return (
    <>
      <header className="relative z-30 w-full p-3 sm:p-5 lg:p-6">
              <div ref={navRef} className="glass-nav max-w-6xl mx-auto rounded-full px-4 sm:px-6 h-16 flex items-center justify-between">
          
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 shrink-0">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-leaf-400 via-leaf-600 to-navy flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4.2"/><g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 2v2.4M12 19.6V22M22 12h-2.4M4.4 12H2M19 5l-1.7 1.7M6.7 17.3 5 19M19 19l-1.7-1.7M6.7 6.7 5 5"/></g></svg>
                  </span>
                  <span className="logo-text font-display font-bold text-base text-white leading-none">FEW <span className="logo-text-accent text-leaf-400">Solar</span></span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
                  <a href="#" className="nav-link px-3.5 py-2 rounded-full">Home</a>
                  <a href="#about" className="nav-link px-3.5 py-2 rounded-full">About Us</a>

                  <div className="has-dropdown relative">
                    <button className="nav-link px-3.5 py-2 rounded-full flex items-center gap-1">
                      Solutions
                      <svg className="w-3.5 h-3.5 nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="m6 9 6 6 6-6"/></svg>
                    </button>
                    <div className="mega absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[320px] z-50">
                      <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 overflow-hidden">
                        <a href="#solutions" className="mega-item flex items-center gap-3 px-3 py-2.5 rounded-xl">
                          <span className="mega-icon w-8 h-8 rounded-lg bg-leaf-50 text-leaf-600 flex items-center justify-center shrink-0">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M6 21V7l6-4 6 4v14M10 21v-5h4v5"/></svg>
                          </span>
                          <span className="text-sm font-semibold text-navy">Commercial Solar</span>
                        </a>
                        <a href="#solutions" className="mega-item flex items-center gap-3 px-3 py-2.5 rounded-xl">
                          <span className="mega-icon w-8 h-8 rounded-lg bg-leaf-50 text-leaf-600 flex items-center justify-center shrink-0">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 21h20M4 21V10l5 3V10l5 3V7l5 4v10M8 21v-4h3v4"/></svg>
                          </span>
                          <span className="text-sm font-semibold text-navy">Industrial Solar</span>
                        </a>
                        <a href="#solutions" className="mega-item flex items-center gap-3 px-3 py-2.5 rounded-xl">
                          <span className="mega-icon w-8 h-8 rounded-lg bg-leaf-50 text-leaf-600 flex items-center justify-center shrink-0">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3c2.5 3 4 5.6 4 8a4 4 0 1 1-8 0c0-2.4 1.5-5 4-8Z"/></svg>
                          </span>
                          <span className="text-sm font-semibold text-navy">Agricultural Solar</span>
                        </a>
                        <a href="#solutions" className="mega-item flex items-center gap-3 px-3 py-2.5 rounded-xl">
                          <span className="mega-icon w-8 h-8 rounded-lg bg-leaf-50 text-leaf-600 flex items-center justify-center shrink-0">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 11 9-8 9 8M5 10v10h14V10"/></svg>
                          </span>
                          <span className="text-sm font-semibold text-navy">Residential Solar</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <a href="#portfolio" className="nav-link px-3.5 py-2 rounded-full">Projects</a>
                  <a href="#why-choose" className="nav-link px-3.5 py-2 rounded-full">Why Us</a>
                  <a href="#testimonials" className="nav-link px-3.5 py-2 rounded-full">Reviews</a>
                  <a href="#packages" className="nav-link px-3.5 py-2 rounded-full">Packages</a>
                  <a href="#faq" className="nav-link px-3.5 py-2 rounded-full">FAQ</a>
                  <a href="#contact" className="nav-link px-3.5 py-2 rounded-full">Contact</a>
                </nav>

                {/* CTA & Mobile toggle */}
                <div className="flex items-center gap-2">
                  <a href="#contact" className="btn-cta hidden sm:inline-flex items-center gap-1.5 text-white text-sm font-semibold pl-5 pr-1.5 py-1.5 rounded-full">
                    Get Free Consultation
                    <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><path d="M13 6l6 6-6 6M5 12h14"/></svg>
                    </span>
                  </a>
                  <button onClick={openMenu} aria-label="Open menu" className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
                  </button>
                </div>
              </div>
            </header>
      <div onClick={closeMenu} className={`fixed inset-0 bg-navy/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}></div>
        <aside className={`fixed top-0 right-0 h-full w-[86%] max-w-sm bg-white z-[70] flex flex-col transition-transform duration-300 ${open ? "" : "translate-x-full"}`}>
          <div className="flex items-center justify-between px-5 h-20 border-b border-slate-100 shrink-0">
            <span className="font-display font-bold text-lg"><span className="text-navy">FEW</span> <span className="text-leaf-600">Solar</span></span>
            <button onClick={closeMenu} aria-label="Close menu" className="w-10 h-10 rounded-lg flex items-center justify-center text-navy hover:bg-navy/5 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6 6 18"/></svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-3 py-4 text-slate-700">
            <a onClick={closeMenu} href="#" className="block px-4 py-3.5 rounded-xl text-base font-medium hover:bg-leaf-50">Home</a>
            <a onClick={closeMenu} href="#about" className="block px-4 py-3.5 rounded-xl text-base font-medium hover:bg-leaf-50">About Us</a>

            <div className={`mobile-acc ${accOpen ? "open" : ""}`}>
              <button onClick={() => setAccOpen(!accOpen)} className="mobile-acc-toggle w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium hover:bg-leaf-50">
                Solutions
                <svg className="mobile-chevron w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <div className="mobile-acc-body pl-4">
                <a onClick={closeMenu} href="#solutions" className="block px-4 py-3 rounded-xl text-sm text-slate-600 hover:bg-leaf-50">Commercial Solar</a>
                <a onClick={closeMenu} href="#solutions" className="block px-4 py-3 rounded-xl text-sm text-slate-600 hover:bg-leaf-50">Industrial Solar</a>
                <a onClick={closeMenu} href="#solutions" className="block px-4 py-3 rounded-xl text-sm text-slate-600 hover:bg-leaf-50">Agricultural Solar</a>
                <a onClick={closeMenu} href="#solutions" className="block px-4 py-3 rounded-xl text-sm text-slate-600 hover:bg-leaf-50">Residential Solar</a>
              </div>
            </div>

            <a onClick={closeMenu} href="#portfolio" className="block px-4 py-3.5 rounded-xl text-base font-medium hover:bg-leaf-50">Projects</a>
            <a onClick={closeMenu} href="#why-choose" className="block px-4 py-3.5 rounded-xl text-base font-medium hover:bg-leaf-50">Why Us</a>
            <a onClick={closeMenu} href="#packages" className="block px-4 py-3.5 rounded-xl text-base font-medium hover:bg-leaf-50">Packages</a>
            <a onClick={closeMenu} href="#faq" className="block px-4 py-3.5 rounded-xl text-base font-medium hover:bg-leaf-50">FAQ</a>
            <a onClick={closeMenu} href="#testimonials" className="block px-4 py-3.5 rounded-xl text-base font-medium hover:bg-leaf-50">Reviews</a>
            <a onClick={closeMenu} href="#contact" className="block px-4 py-3.5 rounded-xl text-base font-medium hover:bg-leaf-50">Contact</a>
          </nav>

          <div className="p-5 border-t border-slate-100 shrink-0">
            <a onClick={closeMenu} href="#contact" className="btn-cta w-full flex items-center justify-center gap-2 text-white text-sm font-semibold px-5 py-3.5 rounded-full">
              Get Free Consultation
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </aside>
    </>
  );
}
