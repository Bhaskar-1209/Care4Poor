"use client"

import { useEffect, useRef, useState } from "react"

export default function MentorsSection() {
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

  const mentors = [
    {
      name: "Dr. Anurag Shrivastava",
      role: "Mentor | Leadership & Communication Expert",
      image: "/placeholder-rk798.png",
      borderColor: "border-yellow-400",
      delay: "0s",
    },
    {
      name: "Ms. Priya Sharma",
      role: "Mentor | Youth Development & Public Speaking Coach",
      image: "/professional-woman-children.png",
      borderColor: "border-purple-400",
      delay: "0.2s",
    },
    {
      name: "Mr. Rajeev Mehta",
      role: "Mentor | Social Impact Strategist",
      image: "/young-man-headshot.png",
      borderColor: "border-pink-400",
      delay: "0.4s",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-purple-100 to-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">OUR MENTORS</h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
            Our mentors are the guiding force behind Express4Change — experienced professionals who bring insight,
            encouragement, and purpose to our mission. They nurture young voices, inspire confidence, and help turn
            ideas into impact. With their support, we grow not just as individuals, but as changemakers.
          </p>
        </div>

        {/* Mentor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className={`bg-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up ${mentor.borderColor} border-4`}
              style={{ animationDelay: mentor.delay }}
            >
              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={mentor.image || "/placeholder.svg"}
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-black">{mentor.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{mentor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
