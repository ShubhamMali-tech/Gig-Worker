import './HowItWorks.css'

function HowItWorks() {
  return (
    <section className="how-it-works">
      <p className="section-label">HOW IT WORKS</p>

      <h2>Start earning in three simple steps.</h2>

      <p className="section-description">
        Find opportunities, complete the work, and get paid.
      </p>

      <div className="steps">
        <div className="step">
          <span className="step-number">01</span>
          <h3>Find a Delivery</h3>
          <p>
            Browse available delivery opportunities that match your location.
          </p>
        </div>

        <div className="step">
          <span className="step-number">02</span>
          <h3>Accept the Work</h3>
          <p>
            Choose a delivery that works for you and accept the opportunity.
          </p>
        </div>

        <div className="step">
          <span className="step-number">03</span>
          <h3>Earn Money</h3>
          <p>
            Complete the delivery and earn money for your work.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks