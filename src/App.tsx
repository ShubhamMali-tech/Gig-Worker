import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import BrowseCategories from './components/BrowseCategories'
import FeaturedJobs from './components/FeaturedJobs'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <HowItWorks />
      <BrowseCategories />
      <FeaturedJobs />
    </div>
  )
}

export default App