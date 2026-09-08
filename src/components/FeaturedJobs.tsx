import { Bookmark } from 'lucide-react'
import './FeaturedJobs.css'

const JOBS = [
  {
    id: 1,
    title: 'Lunch Hour Rider',
    salary: '₹18,000/month',
    type: 'Peak Hours',
    image:
      'https://images.unsplash.com/photo-1695654390723-479197a8c4a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBmb29kJTIwZGVsaXZlcnklMjB1bmlmb3JtfGVufDF8fHx8MTc3ODY1OTI4NXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Weekend Pizza Courier',
    salary: 'Flexible shifts',
    type: 'Part-time',
    image:
      'https://images.unsplash.com/photo-1572195577046-2f25894c06fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwcGl6emF8ZW58MXx8fHwxNzc4NjU5MjgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Full-Time Food Delivery',
    salary: '₹25,000+/month',
    type: 'Full-time',
    image:
      'https://images.unsplash.com/photo-1526367790999-0150786686a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGZvb2QlMjBkZWxpdmVyeXxlbnwxfHx8fDE3Nzg2NTkyODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
]

function FeaturedJobs() {
  return (
    <section className="featured-jobs">
      <div className="featured-jobs-header">
        <h2>Fresh delivery routes near you</h2>

        <div className="job-cards">
          {JOBS.map((job) => (
  <article className="job-card" key={job.id}>
    <button
      className="job-bookmark"
      aria-label={`Bookmark ${job.title}`}
    >
      <Bookmark size={18} strokeWidth={1.8} />
    </button>

    <div className="job-card-image">
      <img src={job.image} alt={job.title} />
    </div>

    <div className="job-card-content">
      <span className="job-badge">{job.type}</span>

      <h3>{job.title}</h3>

      <strong>{job.salary}</strong>

      <button>Apply to Ride</button>
    </div>
  </article>
))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedJobs