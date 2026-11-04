const STEPS = [
  {
    title: 'Application',
    text: 'We prepare and submit your net metering application to your DISCO (LESCO, MEPCO, IESCO, FESCO and others) with all required documents.',
  },
  {
    title: 'Technical Inspection',
    text: 'The DISCO team inspects your solar installation to verify it meets safety and quality standards.',
  },
  {
    title: 'Generation Licence',
    text: 'AEDB issues your generation licence, officially allowing you to export electricity to the national grid.',
  },
  {
    title: 'Bi-Directional Meter',
    text: 'A bi-directional (green) meter is installed that records both the units you consume and the units you export.',
  },
  {
    title: 'Start Saving More',
    text: 'Exported units are adjusted against your monthly bill — many of our customers bring their bills close to zero.',
  },
];

export default function NetMetering() {
  return (
    <section id="net-metering" className="py-24 px-6 bg-navy">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm font-semibold text-leaf-400 mb-6">
            🔄 Net Metering
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-5">
            Sell Your Extra <span className="text-leaf-400">Electricity</span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            With net metering, the extra units your system produces go back to the grid and are credited in your bill. We handle the complete paperwork for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {STEPS.map((step, i) => (
            <div key={step.title} className="rounded-[24px] bg-white/5 border border-white/10 p-6">
              <div className="w-11 h-11 rounded-full bg-leaf-600 text-white font-display font-bold flex items-center justify-center mb-4">
                {i + 1}
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
