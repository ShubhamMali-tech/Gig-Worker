import './BrowseCategories.css'

function BrowseCategories() {
  return (
    <section className="browse-categories">
      <div className="browse-categories-header">
        <h2>Choose what you deliver</h2>

        <p>
          Pick the delivery orders that suit your vehicle and schedule.
        </p>
      </div>

      <div className="delivery-categories">

        <article className="delivery-card">
          <div className="delivery-card-image">
            <img
              src="https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&w=900&q=85"
              alt="Restaurant delivery"
            />
          </div>

          <div className="delivery-card-content">
            <h3>Restaurant Delivery</h3>

            <p>
              Deliver hot meals from local favorites.
            </p>

            <button>Find Orders</button>
          </div>
        </article>

        <article className="delivery-card">
          <div className="delivery-card-image">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85"
              alt="Grocery orders"
            />
          </div>

          <div className="delivery-card-content">
            <h3>Grocery Orders</h3>

            <p>
              Shop and drop fresh produce and daily needs.
            </p>

            <button>Find Orders</button>
          </div>
        </article>

        <article className="delivery-card">
          <div className="delivery-card-image">
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=85"
              alt="Café and bakery delivery"
            />
          </div>

          <div className="delivery-card-content">
            <h3>Café & Bakery Run</h3>

            <p>
              Quick dashes for morning coffee and treats.
            </p>

            <button>Find Orders</button>
          </div>
        </article>

      </div>
    </section>
  )
}

export default BrowseCategories