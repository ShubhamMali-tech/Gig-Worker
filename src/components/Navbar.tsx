import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <div className="navbar-brand">
  <span className="brand-symbol">G</span>
  <strong>GigWorker</strong>
</div>

      <div>
        <a href="#">Home</a>
        <a href="#">How It Works</a>
        <a href="#">Find Deliveries</a>
        <a href="#">Become a Rider</a>
        <a href="#">About Us</a>
      </div>
    </nav>
  )
}

export default Navbar