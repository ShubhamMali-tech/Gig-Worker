import './FeaturedJobs.css'

function FeaturedJobs() {
  return (
    <section className="featured-jobs">
      <div className="featured-jobs-header">
        <div>
          <h2>Fresh delivery routes near you</h2>

          <p>
            Find flexible delivery shifts that fit your schedule.
          </p>
        </div>
      </div>

      <div className="job-cards">

        <article className="job-card">
          <div className="job-card-image">
            <img
              src="https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=900&q=85"
              alt="Lunch Hour Rider"
            />
          </div>

          <div className="job-card-content">
            <span className="job-badge">Part Time</span>

            <h3>Lunch Hour Rider</h3>

            <p>Deliver during the busy lunch hours.</p>

            <strong>₹500 - ₹800 / shift</strong>

            <button>Apply to Ride</button>
          </div>
        </article>

        <article className="job-card">
          <div className="job-card-image">
            <img
              src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=900&q=85"
              alt="Weekend Pizza Courier"
            />
          </div>

          <div className="job-card-content">
            <span className="job-badge">Weekend</span>

            <h3>Weekend Pizza Courier</h3>

            <p>Pick up and deliver fresh pizzas locally.</p>

            <strong>₹700 - ₹1,000 / shift</strong>

            <button>Apply to Ride</button>
          </div>
        </article>

        <article className="job-card">
          <div className="job-card-image">
            <img
              src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=900&q=85"
              alt="Full-Time Food Delivery"
            />
          </div>

          <div className="job-card-content">
            <span className="job-badge">Full Time</span>

            <h3>Full-Time Food Delivery</h3>

            <p>Ride full-time and maximize your earnings.</p>

            <strong>₹20,000 - ₹30,000 / month</strong>

            <button>Apply to Ride</button>
          </div>
        </article>

      </div>
    </section>
  )
}

export default FeaturedJobs