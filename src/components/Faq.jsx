import { useState } from 'react';

const FAQS = [
  {
    q: 'How much does a solar system cost?',
    a: 'It depends on the system size. As a guide, our packages start around Rs 525,000 for a 3 kW system. Use our solar calculator above for an instant estimate based on your monthly bill, and request a free site survey for an exact quotation.',
  },
  {
    q: 'What is net metering and can I get it?',
    a: 'Net metering lets you sell your extra solar units back to the grid, and those units are adjusted in your monthly bill. Any grid-connected solar system can apply through their DISCO (LESCO, MEPCO, IESCO, etc.) — and we handle the complete application and paperwork for our customers.',
  },
  {
    q: 'Will my solar system work during load shedding?',
    a: 'Yes, if you choose a hybrid system with batteries. The hybrid inverter automatically switches to battery power during load shedding, so your essential loads keep running without interruption.',
  },
  {
    q: 'How much roof space do I need?',
    a: 'Roughly 31 sq.ft per panel. A 5 kW system with 9 panels needs around 280 sq.ft of shade-free roof space. Our team confirms the exact layout in the free site survey.',
  },
  {
    q: 'What maintenance does a solar system need?',
    a: 'Very little. Panels should be cleaned regularly (dust reduces generation), and the inverter and wiring should be inspected once or twice a year. That is all a well-installed system needs.',
  },
  {
    q: 'What warranty do I get?',
    a: 'Tier-1 panels typically carry up to 25 years of performance warranty, and hybrid inverters carry 5–10 years depending on the brand. Exact warranty terms are written clearly in your quotation before installation.',
  },
  {
    q: 'How long does installation take?',
    a: 'A standard residential installation is usually completed in 2–3 days after equipment delivery and approvals. Commercial and industrial projects are scheduled according to their size.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-sm font-semibold text-green-700 mb-6">
            ❓ Common Questions
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-navy mb-5">
            Frequently Asked <span className="text-leaf-600">Questions</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Everything people usually ask us before going solar. Still unsure? <a href="#contact" className="text-leaf-600 font-semibold">Ask us directly</a>.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className="glass-card rounded-[20px] bg-white/70 border border-white shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                >
                  <span className="font-display font-bold text-navy">{item.q}</span>
                  <span className={`text-leaf-600 text-xl font-bold transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>+</span>
                </button>
                {open && (
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed text-[15px]">{item.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
