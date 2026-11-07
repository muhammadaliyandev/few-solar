import { useState } from 'react';
import { submitLead } from '../lib/api';

export default function Contact() {
  const [showToast, setShowToast] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setSending(true);
    setError('');
    try {
      await submitLead({ ...data, source: 'contact' });
      setShowToast(true);
      form.reset();
      setTimeout(() => setShowToast(false), 4000);
    } catch {
      setError('Request could not be sent right now. Please call or WhatsApp us instead.');
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section id="contact" className="contact-section">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
        
              <div>
                <span className="inline-flex px-4 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-600 text-sm font-medium mb-3">
                  Get In Touch
                </span>
                <h2 className="text-4xl font-extrabold text-navy font-display mb-6">
                  Ready to Start Your<br /><span className="text-leaf-600">Solar Journey?</span>
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Fill out the form to request a free site audit, customized design proposal, and financial quotation. Our certified engineers are ready to guide you.
                </p>
          
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <span className="w-12 h-12 rounded-xl bg-leaf-50 flex items-center justify-center text-leaf-600 shrink-0">📞</span>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase">Call Us</p>
                      <p className="text-navy font-semibold">+92 (042) 111-339-765</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-12 h-12 rounded-xl bg-leaf-50 flex items-center justify-center text-leaf-600 shrink-0">✉️</span>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase">Email Us</p>
                      <p className="text-navy font-semibold">info@fewsolar.pk</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-12 h-12 rounded-xl bg-leaf-50 flex items-center justify-center text-leaf-600 shrink-0">📍</span>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase">Office Location</p>
                      <p className="text-navy font-semibold">Phase 5 DHA, Lahore, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-card p-8 md:p-10 rounded-[32px] shadow-lg">
                <h3 className="text-2xl font-bold font-display text-navy mb-6">Request a Quote</h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5" htmlFor="name">Name</label>
                      <input required className="w-full bg-white border border-slate-200 focus:border-leaf-500 focus:ring-1 focus:ring-leaf-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors" type="text" id="name" name="name" placeholder="Muhammad Ali" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5" htmlFor="phone">Phone</label>
                      <input required className="w-full bg-white border border-slate-200 focus:border-leaf-500 focus:ring-1 focus:ring-leaf-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors" type="tel" id="phone" name="phone" placeholder="03001234567" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5" htmlFor="email">Email</label>
                    <input required className="w-full bg-white border border-slate-200 focus:border-leaf-500 focus:ring-1 focus:ring-leaf-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors" type="email" id="email" name="email" placeholder="ali@example.com" />
                  </div>
                  <div className="mb-6">
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5" htmlFor="message">Message</label>
                    <textarea required rows="4" className="w-full bg-white border border-slate-200 focus:border-leaf-500 focus:ring-1 focus:ring-leaf-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none" id="message" name="message" placeholder="Details about your house rooftop, monthly bill, or location..."></textarea>
                  </div>
                  {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                  <button type="submit" disabled={sending} className="btn-cta w-full text-white font-bold py-3.5 px-6 rounded-full text-sm disabled:opacity-60">
                    {sending ? 'Sending...' : 'Submit Request'}
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>
      <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 bg-navy text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-[100] transition-all duration-300 ${showToast ? "show opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-4"}`}>
          <span className="w-6 h-6 rounded-full bg-leaf-500 text-white flex items-center justify-center text-xs">✓</span>
          <div className="text-sm font-medium">Thank you! Your quote request has been sent.</div>
      </div>
    </>
  );
}
