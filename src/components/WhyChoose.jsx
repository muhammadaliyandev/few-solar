export default function WhyChoose() {
  return (
    <section id="why-choose" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
      
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-sm font-semibold text-leaf-600 mb-6">
              <span className="h-2 w-2 rounded-full bg-leaf-500"></span>
              Why Choose FEW Solar
            </div>
            <h2 className="font-display text-4xl font-extrabold text-navy mb-6">
              More Than Solar Installation —
              <span className="text-leaf-600">A Long-Term Energy Partner</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We combine engineering expertise, premium technology, and dedicated customer support to deliver solar solutions that maximize performance, reliability, and return on investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="feature-card group hover:-translate-y-2 transition-all duration-300 bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-leaf-400 to-leaf-600 flex items-center justify-center mb-6 text-white text-2xl shadow-md">⚡</div>
              <h3 className="font-display text-xl font-bold mb-3 text-navy">Engineering Excellence</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Every project is carefully engineered to ensure maximum energy production, efficiency, and long-term reliability.</p>
            </div>
            <div className="feature-card group hover:-translate-y-2 transition-all duration-300 bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-leaf-400 to-leaf-600 flex items-center justify-center mb-6 text-white text-2xl shadow-md">🛡️</div>
              <h3 className="font-display text-xl font-bold mb-3 text-navy">Premium Components</h3>
              <p className="text-slate-600 text-sm leading-relaxed">We utilize trusted Tier-1 solar panels, inverters, and battery backups from globally recognized manufacturers.</p>
            </div>
            <div className="feature-card group hover:-translate-y-2 transition-all duration-300 bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-leaf-400 to-leaf-600 flex items-center justify-center mb-6 text-white text-2xl shadow-md">🔧</div>
              <h3 className="font-display text-xl font-bold mb-3 text-navy">End-to-End Service</h3>
              <p className="text-slate-600 text-sm leading-relaxed">From consultation and system design to net metering approvals, installation, and monitoring — we manage everything.</p>
            </div>
            <div className="feature-card group hover:-translate-y-2 transition-all duration-300 bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-leaf-400 to-leaf-600 flex items-center justify-center mb-6 text-white text-2xl shadow-md">📈</div>
              <h3 className="font-display text-xl font-bold mb-3 text-navy">Maximum Savings</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Our systems are optimized to reduce monthly electricity costs, increase independence, and deliver strong financial returns.</p>
            </div>
          </div>

        </div>
      </section>
  );
}
