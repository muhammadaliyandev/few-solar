import { useRef, useState } from 'react';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const gridRef = useRef(null);

  const scroll = (direction) => {
    if (gridRef.current) {
      gridRef.current.scrollBy({ left: direction === 'prev' ? -380 : 380, behavior: 'smooth' });
    }
  };

  return (
      <section id="portfolio" className="portfolio-section">
          <div className="container">
      
            <div className="portfolio-header">
              <span className="portfolio-badge">Featured Installations</span>
              <h2 className="portfolio-title font-display">Powering Pakistan Through Proven Solar Excellence</h2>
              <p className="portfolio-description">
                Explore our portfolio of commercial, residential, agricultural, and industrial solar installations delivering clean energy and massive savings.
              </p>
            </div>

            <div className="portfolio-filters">
              <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All Projects</button>
              <button className={filter === 'residential' ? 'active' : ''} onClick={() => setFilter('residential')}>Residential</button>
              <button className={filter === 'commercial' ? 'active' : ''} onClick={() => setFilter('commercial')}>Commercial</button>
              <button className={filter === 'agricultural' ? 'active' : ''} onClick={() => setFilter('agricultural')}>Agricultural</button>
              <button className={filter === 'industrial' ? 'active' : ''} onClick={() => setFilter('industrial')}>Industrial</button>
            </div>

            <div className="carousel-container">
              <button className="carousel-btn carousel-prev" onClick={() => scroll('prev')}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
        
              <div className="portfolio-grid" ref={gridRef}>
                <div className={`project-card ${filter !== 'all' && filter !== 'residential' ? 'hidden' : ''}`} data-category="residential">
                  <div className="project-image">
                    <img src="/images/project-1.png" alt="Residential Solar Installation" />
                  </div>
                  <div className="project-content">
                    <span className="project-category">Residential</span>
                    <h3 className="font-display font-bold">15kW Rooftop Solar System</h3>
                    <p>Complete rooftop solar installation designed to maximize net metering benefits and reduce grid reliance in Lahore.</p>
                  </div>
                </div>

                <div className={`project-card ${filter !== 'all' && filter !== 'commercial' ? 'hidden' : ''}`} data-category="commercial">
                  <div className="project-image">
                    <img src="/images/hero-solar-farm.jpg" alt="Commercial Solar Installation" />
                  </div>
                  <div className="project-content">
                    <span className="project-category">Commercial</span>
                    <h3 className="font-display font-bold">120kW Textile Office Project</h3>
                    <p>High-performance commercial net-metered system helping decrease overhead operational costs in Faisalabad.</p>
                  </div>
                </div>

                <div className={`project-card ${filter !== 'all' && filter !== 'industrial' ? 'hidden' : ''}`} data-category="industrial">
                  <div className="project-image">
                    <img src="/images/hero-solar-farm.jpg" alt="Industrial Solar Project" />
                  </div>
                  <div className="project-content">
                    <span className="project-category">Industrial</span>
                    <h3 className="font-display font-bold">1.2MW Manufacturing Plant</h3>
                    <p>Large-scale clean energy plant optimized for heavy industrial machinery support in Karachi industrial zone.</p>
                  </div>
                </div>

                <div className={`project-card ${filter !== 'all' && filter !== 'agricultural' ? 'hidden' : ''}`} data-category="agricultural">
                  <div className="project-image">
                    <img src="/images/hero-solar-farm.jpg" alt="Solar Tube Well System" />
                  </div>
                  <div className="project-content">
                    <span className="project-category">Agricultural</span>
                    <h3 className="font-display font-bold">45kW Solar Tube Well</h3>
                    <p>High discharge agricultural solar-powered water pumping system for eco-friendly farming in Multan.</p>
                  </div>
                </div>
              </div>
        
              <button className="carousel-btn carousel-next" onClick={() => scroll('next')}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>

          </div>
        </section>
  );
}
