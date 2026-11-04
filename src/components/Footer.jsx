export default function Footer() {
  return (
    <footer className="site-footer">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        
            <div className="col-span-2 md:col-span-1">
              <a href="#" className="flex items-center gap-2 mb-4">
                <span className="w-8 h-8 rounded-full bg-leaf-500 flex items-center justify-center text-white text-sm">☀️</span>
                <span className="font-display font-bold text-white text-lg">FEW Solar</span>
              </a>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Powering Pakistan through smart, grid-connected solar solutions. Partner with the best in the industry.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-display">Navigation</h4>
              <ul className="flex flex-col gap-2.5 text-sm">
                <li><a href="#" className="footer-link">Home</a></li>
                <li><a href="#about" className="footer-link">About Us</a></li>
                <li><a href="#solutions" className="footer-link">Featured Products</a></li>
                <li><a href="#portfolio" className="footer-link">Projects</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-display">Solutions</h4>
              <ul className="flex flex-col gap-2.5 text-sm">
                <li><a href="#solutions" className="footer-link">Residential Solar</a></li>
                <li><a href="#solutions" className="footer-link">Commercial Solar</a></li>
                <li><a href="#solutions" className="footer-link">Agricultural Solar</a></li>
                <li><a href="#solutions" className="footer-link">Net Metering</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-display">Contact Info</h4>
              <ul className="flex flex-col gap-3 text-sm text-slate-400">
                <li> Lahore: DHA Phase 5</li>
                <li> Phone: +92 (042) 111-339-765</li>
                <li> Email: info@fewsolar.pk</li>
              </ul>
            </div>

          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <p>&copy; 2026 FEW Solar Private Limited. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
  );
}
