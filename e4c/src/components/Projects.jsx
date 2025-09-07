import React, { useEffect, useRef, useState } from "react";

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      image: "/happy-children-music.png",
      delay: "0s",
    },
    {
      image: "/crafting-hands-closeup.png",
      delay: "0.2s",
    },
    {
      image: "/children-community-gathering.png",
      delay: "0.4s",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      delay: "0.6s",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      delay: "0.8s",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      delay: "1s",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="tournaments"
      className="py-20 bg-[#aec6cf]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            PROJECTS
          </h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
            At Express4Change, our projects are designed to turn creative
            expression into meaningful impact. From awareness campaigns and
            community art installations to open mic events and digital
            storytelling drives, each project reflects the voices, values, and
            visions of young changemakers. We focus on real issues — like mental
            health, equality, education, and the environment — using music, art,
            words, and action to spark dialogue and inspire change. Every
            project is a step toward a more expressive, inclusive, and empowered
            society.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up`}
              style={{ animationDelay: project.delay }}
            >
              <div className="aspect-square bg-white p-4">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`Express4Change project ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <p className="text-sm font-medium">Project {index + 1}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
