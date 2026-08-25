import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-label">GIG WORKER PLATFORM</p>

        <h1>
          Find Work.
          <br />
          Earn More.
        </h1>

        <p className="hero-description">
          Connect with opportunities built for gig workers.
          Find flexible work and take control of your earnings.
        </p>

        <div className="hero-buttons">
          <button className="primary-button">Find Work</button>

          <button className="secondary-button">
            Become a Worker
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero