export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
      
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-semibold text-leaf-600 mb-6">
              <span className="h-2 w-2 rounded-full bg-leaf-500"></span>
              About FEW Solar
            </div>
            <h2 className="font-display text-4xl font-extrabold text-navy leading-tight mb-6">
              Powering a Sustainable Future Through
              <span className="text-leaf-600">Smart Solar Innovation</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              FEW Solar delivers reliable, efficient, and future-ready solar energy solutions for residential, commercial, and industrial clients across Pakistan.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="glass-card bg-white/70 rounded-[32px] p-8 md:p-10 shadow-lg border border-white">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 text-navy">
                Trusted Solar Experts Delivering Real Results
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                With years of industry experience and a commitment to engineering excellence, FEW Solar has become a trusted partner for organizations and homeowners seeking long-term energy independence.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                From consultation and system design to installation, net metering assistance, and ongoing support, our team manages every stage of your solar journey with precision and transparency.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/50 rounded-2xl p-4 border border-slate-100">
                  <div className="text-leaf-600 font-semibold mb-1">✓ Premium Components</div>
                  <p className="text-xs text-slate-600">Tier-1 equipment from globally recognized manufacturers.</p>
                </div>
                <div className="bg-white/50 rounded-2xl p-4 border border-slate-100">
                  <div className="text-leaf-600 font-semibold mb-1">✓ Certified Engineers</div>
                  <p className="text-xs text-slate-600">Professional installation and technical expertise.</p>
                </div>
                <div className="bg-white/50 rounded-2xl p-4 border border-slate-100">
                  <div className="text-leaf-600 font-semibold mb-1">✓ End-to-End Service</div>
                  <p className="text-xs text-slate-600">Consultation, approvals, installation, and maintenance.</p>
                </div>
                <div className="bg-white/50 rounded-2xl p-4 border border-slate-100">
                  <div className="text-leaf-600 font-semibold mb-1">✓ Maximum Savings</div>
                  <p className="text-xs text-slate-600">Optimized systems designed for long-term performance.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card bg-white/70 rounded-[36px] overflow-hidden h-[520px] shadow-xl border border-white flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-24 h-24 rounded-3xl bg-leaf-50 flex items-center justify-center mx-auto mb-5 text-leaf-600 border border-leaf-100">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-lg mb-2 text-navy font-display">Powering Pakistan</h4>
                  <p className="text-slate-500 text-sm max-w-sm">
                    FEW Solar is dedicated to optimizing custom engineered commercial, agricultural, and residential solar systems across the nation.
                  </p>
                </div>
              </div>

              <div className="absolute -left-5 top-8 glass-card rounded-2xl p-4 shadow-xl bg-white/90">
                <div className="text-2xl font-extrabold text-leaf-600 font-display">20+</div>
                <div className="text-xs text-slate-600">Years Team Experience</div>
              </div>
              <div className="absolute -right-5 top-28 glass-card rounded-2xl p-4 shadow-xl bg-white/90">
                <div className="text-2xl font-extrabold text-leaf-600 font-display">100%</div>
                <div className="text-xs text-slate-600">Net Metering Success</div>
              </div>
              <div className="absolute -left-3 bottom-20 glass-card rounded-2xl p-4 shadow-xl bg-white/90">
                <div className="text-2xl font-extrabold text-leaf-600 font-display">25 Years</div>
                <div className="text-xs text-slate-600">Linear Warranty</div>
              </div>
            </div>
          </div>

        </div>
      </section>
  );
}
