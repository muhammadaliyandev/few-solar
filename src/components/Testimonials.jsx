export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
        <div className="container">
      
          <div className="section-header">
            <span className="section-badge">Reviews</span>
            <h2 className="section-title font-display">Trusted Across the Country</h2>
            <p className="section-description">
              Hear what our clients have to say about their shift to solar energy and their experience with the FEW Solar team.
            </p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote-icon">★★★★★</div>
              <p>
                FEW Solar delivered a professional installation from start to finish. Our electricity bill has reduced by almost 85%, and net metering credits are flowing in smoothly.
              </p>
              <div className="client-info">
                <h4 className="font-display">Muhammad Ali</h4>
                <span>Residential Customer, Islamabad</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon">★★★★★</div>
              <p>
                The team provided excellent engineering design and execution support. Our commercial net-metered system has already generated substantial operational savings.
              </p>
              <div className="client-info">
                <h4 className="font-display">Zahid Mahmood</h4>
                <span>Business Owner, Faisalabad</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon">★★★★★</div>
              <p>
                Exceptional service, robust mounting structure quality, and reliable customer service. We highly recommend FEW Solar for any agricultural tube well upgrades.
              </p>
              <div className="client-info">
                <h4 className="font-display">Chaudhary Bashir</h4>
                <span>Farm Owner, Sahiwal</span>
              </div>
            </div>
          </div>

          <div className="stats-row">
            <div className="stat-box">
              <h3 className="font-display">1,200+</h3>
              <p className="text-sm font-semibold">Projects Completed</p>
            </div>
            <div className="stat-box">
              <h3 className="font-display">98%</h3>
              <p className="text-sm font-semibold">Client Satisfaction</p>
            </div>
            <div className="stat-box">
              <h3 className="font-display">120MW+</h3>
              <p className="text-sm font-semibold">Solar Installed</p>
            </div>
            <div className="stat-box">
              <h3 className="font-display">24/7</h3>
              <p className="text-sm font-semibold">Smart Monitoring</p>
            </div>
          </div>

        </div>
      </section>
  );
}
