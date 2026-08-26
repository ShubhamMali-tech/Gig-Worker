import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Deliver food.
          <br />
          <span>Earn simply.</span>
        </h1>

        <p className="hero-description">
          Hit the road, deliver meals to hungry customers, and earn on your
          own schedule. Join the fast-growing fleet of local riders.
        </p>

        <div className="hero-buttons">
          <button className="primary-button">
            Start Delivering
          </button>

          <button className="secondary-button">
            How It Works
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero