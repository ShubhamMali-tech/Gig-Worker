import './Benefits.css'

function Benefits() {
  return (
    <section className="benefits">
      <div className="benefits-header">
        <h2>
          Why ride with <span>GigWorker?</span>
        </h2>

        <p>
          More flexibility, reliable earnings, and the freedom to work
          on your own terms.
        </p>
      </div>

      <div className="benefits-grid">

        <article className="benefit-card">
          <div className="benefit-icon">
            💰
          </div>

          <h3>Earn on your terms</h3>

          <p>
            Choose when you ride and how much you want to work.
          </p>
        </article>

        <article className="benefit-card">
          <div className="benefit-icon">
            🕐
          </div>

          <h3>Flexible schedule</h3>

          <p>
            Work around your life with delivery shifts that fit your schedule.
          </p>
        </article>

        <article className="benefit-card">
          <div className="benefit-icon">
            📍
          </div>

          <h3>Stay close to home</h3>

          <p>
            Find delivery routes in your local area and spend less time commuting.
          </p>
        </article>

      </div>
    </section>
  )
}

export default Benefits