import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import BrowseCategories from './components/BrowseCategories'
import FeaturedJobs from './components/FeaturedJobs'
import Benefits from './components/Benefits'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <HowItWorks />
      <BrowseCategories />
      <FeaturedJobs />
      <Benefits />
    </div>
  )
}

export default App