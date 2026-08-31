import {
  UserRoundCheck,
  ClipboardCheck,
  Navigation,
  WalletCards,
} from 'lucide-react'

import './HowItWorks.css'

function HowItWorks() {
  return (
    <section className="how-it-works">

      <div className="how-it-works-header">
        <h2>
          How GigWorker <span>works</span>
        </h2>

        <p>
          Delivering food is simple and rewarding. Discover how you
          can start turning your free time into extra income today.
        </p>
      </div>

      <div className="how-it-works-content">

        <div className="how-it-works-image">
          <img
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=85"
            alt="Gig worker delivering"
          />
        </div>

        <div className="steps">

          <div className="step">
            <div className="step-icon">
              <UserRoundCheck size={24} strokeWidth={1.8} />
            </div>

            <div className="step-content">
              <h3>Sign up and get approved</h3>
              <p>
                Create an account, submit your vehicle details, and pass a
                quick background check. You'll be ready to ride in no time.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-icon">
              <ClipboardCheck size={24} strokeWidth={1.8} />
            </div>

            <div className="step-content">
              <h3>Accept local orders</h3>
              <p>
                Turn on the app whenever you want to work. You'll receive
                delivery requests from nearby restaurants and cafes.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-icon">
              <Navigation size={24} strokeWidth={1.8} />
            </div>

            <div className="step-content">
              <h3>Pick up and deliver</h3>
              <p>
                Follow the app's navigation to the restaurant, pick up the
                hot food, and deliver it to the hungry customer.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-icon">
              <WalletCards size={24} strokeWidth={1.8} />
            </div>

            <div className="step-content">
              <h3>Earn and track</h3>
              <p>
                Get paid for every delivery. Keep 100% of your tips and track
                your daily, weekly, and monthly earnings right in the app.
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default HowItWorks