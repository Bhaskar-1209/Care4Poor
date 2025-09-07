import { useEffect, useRef, useState } from "react"

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    { name: "Education", color: "bg-lime-200", delay: "0s" },
    { name: "Medicine", color: "bg-gray-100", delay: "0.2s" },
    { name: "Community Sports Programs", color: "bg-yellow-300", delay: "0.4s" },
    { name: "Food", color: "bg-gray-100", delay: "0.6s" },
  ]

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className={`space-y-6 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">SERVICES</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              At Express4Change, we offer a range of dynamic services designed to amplify youth voices and drive
              meaningful impact. From skill-building workshops that focus on public speaking, storytelling, and creative
              expression, to powerful campaigns that tackle social issues through art and dialogue — we empower
              individuals to lead with their voice.
            </p>

            {/* Service image */}
            <div className="bg-gradient-to-br from-orange-400 to-yellow-400 rounded-3xl p-6 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/diverse-youth-collaboration.png"
                alt="Express4Change services"
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right content - Service tags */}
          <div className={`space-y-6 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="grid grid-cols-1 gap-4">
              {services.map((service, index) => (
                <div
                  key={service.name}
                  className={`${service.color} px-6 py-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up`}
                  style={{ animationDelay: service.delay }}
                >
                  <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
