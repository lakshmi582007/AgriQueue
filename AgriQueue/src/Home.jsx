import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          🌾 AgriQueue
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="login-btn">Login</button>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="tagline">SMART AGRICULTURAL PROCUREMENT</p>

          <h1>
            Skip the Queue.
            <br />
            <span>Sell Smarter.</span>
          </h1>

          <p className="hero-text">
            AgriQueue helps farmers manage crop procurement,
            check availability, get tokens, and track their queue
            easily from one platform.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Get Started →
            </button>

            <button className="secondary-btn">
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-card">
          <div className="crop-icon">🌾</div>
          <h3>Smart Procurement</h3>
          <p>
            Manage your crop selling process with less waiting
            and more transparency.
          </p>

          <div className="queue-box">
            <div>
              <small>Current Queue</small>
              <strong>24 Farmers</strong>
            </div>

            <div>
              <small>Estimated Wait</small>
              <strong>45 mins</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="how-it-works">
        <div className="section-heading">
          <p>HOW IT WORKS</p>
          <h2>Simple. Smart. Farmer-Friendly.</h2>
        </div>

        <div className="feature-container">

          <div className="feature-card">
            <div className="feature-number">01</div>
            <div className="feature-icon">👨‍🌾</div>
            <h3>Register</h3>
            <p>
              Create your farmer account and provide your basic details.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-number">02</div>
            <div className="feature-icon">🌱</div>
            <h3>Add Crop Details</h3>
            <p>
              Enter your crop details, quantity and other information.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-number">03</div>
            <div className="feature-icon">📍</div>
            <h3>Choose Centre</h3>
            <p>
              Find a suitable procurement centre based on availability.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-number">04</div>
            <div className="feature-icon">🎟️</div>
            <h3>Get Your Token</h3>
            <p>
              Receive your token and track your position in the queue.
            </p>
          </div>

        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div>
          <p className="section-label">WHY AGRIQUEUE?</p>
          <h2>Making agricultural procurement easier.</h2>
        </div>

        <p>
          AgriQueue connects farmers with procurement centres through
          a simple digital platform. Farmers can reduce unnecessary
          waiting time, view availability and stay updated about
          their procurement status.
        </p>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="logo">🌾 AgriQueue</div>
        <p>Smart Procurement. Better Farming.</p>
      </footer>

    </div>
  );
}

export default Home;