import { useState } from 'react';
import { submitLead } from '../lib/api';

const SETTINGS = {
  electricityRate: 65,
  productionPerKW: 150,
  panelSize: 585,
  roofAreaPerPanel: 31,
  pricePerKW: 175000,
};

export default function Calculator() {
  const [bill, setBill] = useState('');
  const [units, setUnits] = useState('');
  const [city, setCity] = useState('Lahore');
  const [result, setResult] = useState(null);
  const [quoteName, setQuoteName] = useState('');
  const [quotePhone, setQuotePhone] = useState('');
  const [quoteState, setQuoteState] = useState('idle');

  const requestQuote = async () => {
    if (quoteName.trim().length < 2 || quotePhone.replace(/\D/g, '').length < 7) {
      setQuoteState('invalid');
      return;
    }
    setQuoteState('sending');
    try {
      await submitLead({
        name: quoteName.trim(),
        phone: quotePhone.trim(),
        city,
        monthlyBill: parseFloat(bill) || null,
        source: 'calculator',
        message: `Calculator estimate — System: ${result.systemSize}, Panels: ${result.panelCount}, Roof: ${result.roofArea}, Est. cost: ${result.cost}, Monthly saving: ${result.saving}`,
      });
      setQuoteState('sent');
    } catch {
      setQuoteState('error');
    }
  };

  const calculate = () => {
    let u = parseFloat(units);
    const b = parseFloat(bill);
    if ((!u || u <= 0) && b > 0) u = b / SETTINGS.electricityRate;
    if (!u || u <= 0) {
      alert('Please enter either your monthly bill or monthly units.');
      return;
    }
    const systemKW = Math.ceil((u / SETTINGS.productionPerKW) * 10) / 10;
    const panels = Math.ceil((systemKW * 1000) / SETTINGS.panelSize);
    const roofArea = panels * SETTINGS.roofAreaPerPanel;
    const generation = Math.round(systemKW * SETTINGS.productionPerKW);
    const savings = Math.round(generation * SETTINGS.electricityRate);
    const cost = Math.round(systemKW * SETTINGS.pricePerKW);
    setResult({
      systemSize: systemKW + ' kW',
      panelCount: panels + ' Panels',
      roofArea: roofArea + ' sq.ft',
      generation: generation + ' Units',
      saving: 'Rs ' + savings.toLocaleString(),
      cost: 'Rs ' + cost.toLocaleString(),
    });
  };

  return (
      <section id="solar-calculator" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">

      <div className="max-w-7xl mx-auto">

          {/* Heading */}

          <div className="text-center max-w-3xl mx-auto mb-16">

              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-sm font-semibold text-green-700 mb-6">

                  ☀ Instant Solar Estimate

              </span>

              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-navy mb-5">

                  Calculate Your Perfect

                  <span className="text-leaf-600">

                      Solar System

                  </span>

              </h2>

              <p className="text-slate-600 text-lg leading-relaxed">

                  Enter your monthly electricity bill or consumed units and instantly discover the ideal solar system for your property.

              </p>

          </div>



          {/* Main Grid */}

          <div className="grid lg:grid-cols-2 gap-10 items-start">



              {/* LEFT CARD */}

              <div className="glass-card rounded-[30px] p-8 bg-white/70 border border-white shadow-xl">

                  <h3 className="font-display text-2xl font-bold text-navy mb-8">

                      Enter Your Details

                  </h3>



                  {/* Bill */}

                  <div className="mb-6">

                      <label className="block text-sm font-semibold text-slate-700 mb-2">

                          Monthly Electricity Bill (PKR)

                      </label>

                      <input

                          value={bill} onChange={(e) => setBill(e.target.value)}

                          type="number"

                          placeholder="25000"

                          className="calc-input"

                       />

                  </div>



                  <div className="flex items-center gap-4 my-6">

                      <div className="h-px bg-slate-200 flex-1"></div>

                      <span className="text-sm text-slate-400 font-medium">

                          OR

                      </span>

                      <div className="h-px bg-slate-200 flex-1"></div>

                  </div>



                  {/* Units */}

                  <div className="mb-6">

                      <label className="block text-sm font-semibold text-slate-700 mb-2">

                          Monthly Units Consumed (kWh)

                      </label>

                      <input

                          value={units} onChange={(e) => setUnits(e.target.value)}

                          type="number"

                          placeholder="600"

                          className="calc-input"

                       />

                  </div>



                  {/* City */}

                  <div className="mb-8">

                      <label className="block text-sm font-semibold text-slate-700 mb-2">

                          City

                      </label>

                      <select

                          value={city} onChange={(e) => setCity(e.target.value)}

                          className="calc-input"

                      >

                          <option>Lahore</option>

                          <option>Karachi</option>

                          <option>Islamabad</option>

                          <option>Rawalpindi</option>

                          <option>Multan</option>

                          <option>Faisalabad</option>

                          <option>Peshawar</option>

                          <option>Quetta</option>

                          <option>Sialkot</option>

                          <option>Gujranwala</option>

                      </select>

                  </div>



                  <button

                      onClick={calculate}

                      className="btn-cta w-full py-4 rounded-full text-white font-semibold text-lg"

                  >

                      Calculate My Solar System

                  </button>

              </div>



              {/* RESULT CARD */}

              <div className="glass-card rounded-[30px] p-8 bg-white/70 border border-white shadow-xl">

                  <div className="flex items-center gap-3 mb-8">

                      <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-2xl">

                          ⚡

                      </div>

                      <div>

                          <h3 className="font-display text-2xl font-bold text-navy">

                              Estimated Results

                          </h3>

                          <p className="text-slate-500 text-sm">

                              Based on your electricity usage

                          </p>

                      </div>

                  </div>



                  {/* Empty State */}

                  {!result && (
                  <div>

                      <div className="text-center py-16">

                          <div className="text-6xl mb-6">

                              ☀

                          </div>

                          <h4 className="font-display text-2xl font-bold text-navy mb-4">

                              Ready to Calculate

                          </h4>

                          <p className="text-slate-500 leading-relaxed">

                              Enter your electricity bill or units on the left.

                              We'll instantly recommend the perfect solar system.

                          </p>

                      </div>

                  </div>
                  )}

                  {/* Result */}

                  {result && (
                  <div>



                      <div className="grid grid-cols-2 gap-5">



                          <div className="result-card">

                              <small>Recommended System</small>

                              <h2>{result.systemSize}</h2>

                          </div>



                          <div className="result-card">

                              <small>Solar Panels</small>

                              <h2>{result.panelCount}</h2>

                          </div>



                          <div className="result-card">

                              <small>Roof Area</small>

                              <h2>{result.roofArea}</h2>

                          </div>



                          <div className="result-card">

                              <small>Monthly Generation</small>

                              <h2>{result.generation}</h2>

                          </div>



                          <div className="result-card">

                              <small>Monthly Savings</small>

                              <h2>{result.saving}</h2>

                          </div>



                          <div className="result-card">

                              <small>Estimated Cost</small>

                              <h2>{result.cost}</h2>

                          </div>



                      </div>



                      <div className="mt-8">
                          <p className="text-sm font-semibold text-navy mb-3">Get this quote — book a free site survey:</p>
                          <div className="flex flex-col sm:flex-row gap-3">
                              <input value={quoteName} onChange={(e) => setQuoteName(e.target.value)} placeholder="Your name" className="flex-1 bg-white border border-slate-200 focus:border-leaf-500 focus:ring-1 focus:ring-leaf-500 rounded-full px-4 py-3 text-sm outline-none" />
                              <input value={quotePhone} onChange={(e) => setQuotePhone(e.target.value)} placeholder="Phone / WhatsApp" className="flex-1 bg-white border border-slate-200 focus:border-leaf-500 focus:ring-1 focus:ring-leaf-500 rounded-full px-4 py-3 text-sm outline-none" />
                          </div>
                          <button onClick={requestQuote} disabled={quoteState === 'sending'} className="btn-cta mt-3 w-full flex justify-center items-center rounded-full py-4 text-white font-semibold disabled:opacity-60">
                              {quoteState === 'sending' ? 'Sending...' : 'Request This Quote'}
                          </button>
                          {quoteState === 'sent' && <p className="text-green-600 text-sm mt-3">Request received! Our team will call you shortly.</p>}
                          {quoteState === 'invalid' && <p className="text-red-500 text-sm mt-3">Please enter your name and a valid phone number.</p>}
                          {quoteState === 'error' && <p className="text-red-500 text-sm mt-3">Could not send right now — please use the contact form below.</p>}
                      </div>

                  </div>
                  )}

              </div>



          </div>

      </div>

      </section>
  );
}
