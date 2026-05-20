function Home() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>
          We Build <span>Digital</span> Experiences
        </h1>

        <p>
          Modern solutions for businesses, startups,
          and enterprises with creative UI/UX and
          powerful development.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Get Started
          </button>

          <button className="secondary-btn">
            Learn More
          </button>
        </div>
      </div>

      <div className="hero-cards">
        <div className="floating-card">
          <h3>Web Development</h3>
          <p>
            Modern responsive websites with React.js
            and latest technologies.
          </p>
        </div>

        <div className="floating-card">
          <h3>UI/UX Design</h3>
          <p>
            Beautiful interfaces with clean and user
            friendly experiences.
          </p>
        </div>

        <div className="floating-card">
          <h3>SEO Optimization</h3>
          <p>
            Improve your online visibility and grow
            your business faster.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;