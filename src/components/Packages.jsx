const PACKAGES = [
  {
    name: '3 kW System',
    tag: 'Small Homes',
    price: 'Rs 525,000',
    popular: false,
    points: ['6 x 585W Tier-1 solar panels', '3 kW hybrid inverter', 'Approx. 450 units / month generation', 'Approx. Rs 29,250 / month savings', 'Net metering ready', 'Complete installation & mounting structure'],
  },
  {
    name: '5 kW System',
    tag: 'Most Popular',
    price: 'Rs 875,000',
    popular: true,
    points: ['9 x 585W Tier-1 solar panels', '5 kW hybrid inverter', 'Approx. 750 units / month generation', 'Approx. Rs 48,750 / month savings', 'Net metering ready', 'Complete installation & mounting structure'],
  },
  {
    name: '10 kW System',
    tag: 'Large Homes & Offices',
    price: 'Rs 1,750,000',
    popular: false,
    points: ['18 x 585W Tier-1 solar panels', '10 kW hybrid inverter', 'Approx. 1,500 units / month generation', 'Approx. Rs 97,500 / month savings', 'Net metering ready', 'Complete installation & mounting structure'],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-sm font-semibold text-green-700 mb-6">
            💰 Solar Packages
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-navy mb-5">
            Simple, Honest <span className="text-leaf-600">Pricing</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Estimated package prices for our most installed systems. Your final quotation is confirmed after a free site survey — no hidden charges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`glass-card rounded-[30px] p-8 bg-white/70 border shadow-xl flex flex-col ${
                pkg.popular ? 'border-leaf-500 ring-2 ring-leaf-500/40 relative' : 'border-white'
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-leaf-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  MOST POPULAR
                </span>
              )}
              <p className="text-sm font-semibold text-leaf-600 mb-2">{pkg.tag}</p>
              <h3 className="font-display text-2xl font-bold text-navy mb-3">{pkg.name}</h3>
              <p className="font-display text-4xl font-extrabold text-navy mb-1">{pkg.price}</p>
              <p className="text-slate-400 text-sm mb-8">estimated, incl. installation</p>
              <ul className="space-y-3 text-slate-600 text-sm flex-1">
                {pkg.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="text-leaf-600 font-bold">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-cta mt-8 flex justify-center items-center rounded-full py-3.5 text-white font-semibold">
                Get This Package
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-10">
          Prices are estimates based on standard installations and may vary with roof type, cable length and battery options.
        </p>
      </div>
    </section>
  );
}
