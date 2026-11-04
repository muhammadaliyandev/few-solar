export default function Solutions() {
  const onFlip = (e) => {
    const card = e.target.closest('.flip-card');
    if (card && window.matchMedia('(hover: none)').matches) card.classList.toggle('flipped');
  };
  return (
    <section onClick={onFlip} id="solutions" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
      
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-semibold text-leaf-600 mb-6">
              <span className="h-2 w-2 rounded-full bg-leaf-500"></span>
              Featured Products
            </div>
            <h2 className="font-display text-4xl font-extrabold text-navy mb-6">
              Premium Solar Technology for
              <span className="text-leaf-600">Maximum Performance</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We provide industry-leading solar equipment sourced from globally trusted manufacturers, ensuring efficiency, reliability, and long-term energy savings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="brand-icon">☀️</div>
                  <span className="brand-label">Photovoltaic</span>
                </div>
                <div className="flip-card-back">
                  <div className="company-logo">☀️</div>
                  <span className="company-name">Solar Panels</span>
                  <span className="company-tag">High-Efficiency</span>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="brand-icon">⚡</div>
                  <span className="brand-label">Inversion</span>
                </div>
                <div className="flip-card-back">
                  <div className="company-logo">⚡</div>
                  <span className="company-name">Hybrid Inverters</span>
                  <span className="company-tag">Smart Energy</span>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="brand-icon">🔋</div>
                  <span className="brand-label">Storage</span>
                </div>
                <div className="flip-card-back">
                  <div className="company-logo">🔋</div>
                  <span className="company-name">Lithium Batteries</span>
                  <span className="company-tag">Long-Lasting</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
  );
}
