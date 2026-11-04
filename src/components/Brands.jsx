export default function Brands() {
  return (
      <section className="relative py-20 bg-white overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-40"></div>
          </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex px-4 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-600 text-sm font-medium mb-3">
                Trusted Partners
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 font-display">
                Powered By Industry Leading Solar Brands
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                We partner with globally recognized Tier-1 manufacturers to deliver reliable, high-performance solar energy systems built for Pakistan.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
              {/* JA Solar */}
              <div className="flip-card" data-company="JA Solar">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="brand-icon">JA</div>
                    <span className="brand-label">Solar Panel</span>
                  </div>
                  <div className="flip-card-back">
                    <div className="company-logo">JA</div>
                    <span className="company-name">JA Solar</span>
                    <span className="company-tag">Tier-1 Manufacturer</span>
                  </div>
                </div>
              </div>

              {/* LONGi */}
              <div className="flip-card" data-company="LONGi">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="brand-icon">LG</div>
                    <span className="brand-label">Solar Module</span>
                  </div>
                  <div className="flip-card-back">
                    <div className="company-logo">LG</div>
                    <span className="company-name">LONGi</span>
                    <span className="company-tag">Global Leader</span>
                  </div>
                </div>
              </div>

              {/* Huawei */}
              <div className="flip-card" data-company="Huawei">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="brand-icon">HW</div>
                    <span className="brand-label">Inverter</span>
                  </div>
                  <div className="flip-card-back">
                    <div className="company-logo">HW</div>
                    <span className="company-name">Huawei</span>
                    <span className="company-tag">Smart Energy</span>
                  </div>
                </div>
              </div>

              {/* Canadian Solar */}
              <div className="flip-card" data-company="Canadian Solar">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="brand-icon">CS</div>
                    <span className="brand-label">Solar Panels</span>
                  </div>
                  <div className="flip-card-back">
                    <div className="company-logo">CS</div>
                    <span className="company-name">Canadian Solar</span>
                    <span className="company-tag">Global Tier-1</span>
                  </div>
                </div>
              </div>

              {/* Growatt */}
              <div className="flip-card" data-company="Growatt">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="brand-icon">GR</div>
                    <span className="brand-label">Inverter</span>
                  </div>
                  <div className="flip-card-back">
                    <div className="company-logo">GR</div>
                    <span className="company-name">Growatt</span>
                    <span className="company-tag">Hybrid Inverter</span>
                  </div>
                </div>
              </div>

              {/* Inverex */}
              <div className="flip-card" data-company="Inverex">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="brand-icon">IV</div>
                    <span className="brand-label">Inverter</span>
                  </div>
                  <div className="flip-card-back">
                    <div className="company-logo">IV</div>
                    <span className="company-name">Inverex</span>
                    <span className="company-tag">Pakistan's Brand</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}
