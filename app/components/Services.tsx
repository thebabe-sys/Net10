'use client'

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Air Freight',
      description: 'Fast international shipping by air',
      icon: '/air-freight.avif',
      delivery: '2-5 days'
    },
    {
      id: 2,
      title: 'Sea Freight',
      description: 'Cost-effective ocean shipping',
      icon: '/sea-freight.avif',
      delivery: '10-30 days'
    },
    {
      id: 3,
      title: 'Ground Freight',
      description: 'Domestic and regional transport',
      icon: '/ground-freight.webp',
      delivery: '3-7 days'
    },
    {
      id: 4,
      title: 'Express Courier',
      description: 'Same-day local delivery',
      icon: '/air-express.avif',
      delivery: 'Same-day'
    }
  ]

  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.icon} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="delivery-time">Delivery: {service.delivery}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
