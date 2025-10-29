import { Code2, Cloud, Lightbulb } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Solutions",
      description:
        "Design, develop, and maintain bespoke software applications, web platforms, and mobile apps for individuals and businesses.",
    },
    {
      icon: Cloud,
      title: "Modern IT Services",
      description:
        "Expert services in cloud computing, artificial intelligence, data analytics, and full-stack web development.",
    },
    {
      icon: Lightbulb,
      title: "Technology & Innovation",
      description:
        "Consultancy and R&D for digital transformation. We specialize in FinTech, EdTech, and HealthTech sectors.",
    },
  ]

  return (
    <section id="services" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center text-balance">What We Do</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-gray-900/50 border border-green-500/20 rounded-2xl p-8 hover:border-green-500/50 transition group"
              >
                <div className="mb-6 inline-block p-4 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition">
                  <Icon className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-500">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
