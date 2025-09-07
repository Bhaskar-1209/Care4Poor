import React, { useEffect, useRef, useState } from "react";

export default function WhatWeDoSection() {
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

  const activities = [
    {
      title: "Creative Doodling",
      description:
        "Doodling is a spontaneous and playful form of self-expression that turns simple lines into powerful stories. At Express4Change, we use doodling to unlock creativity, reduce stress, and encourage free-flowing thought. Whether it's in the margins of a notebook or on a blank canvas, doodling gives every individual the freedom to express without rules — where imagination leads, and judgment fades.",
      image: "/black-and-white-doodle-patterns.png",
      delay: "0s",
    },
    {
      title: "Crochet basics",
      description:
        "Crochet is more than just looping yarn — it's a calming, creative process that brings focus, patience, and joy. At Express4Change, our crochet sessions introduce the basics in a fun, beginner-friendly way, helping individuals stitch their stress away and create something beautiful with their own hands. Every loop is a small act of mindfulness, turning threads into art and expression into connection.",
      image: "/crocheting-hands-closeup.png",
      delay: "0.3s",
    },
    {
      title: "Ceramic Making",
      description:
        "Ceramic making is a powerful form of self-expression where creativity takes shape in your hands. At Express4Change, we use this art to help individuals slow down, connect with themselves, and transform raw clay into meaningful forms. It's not just about creating pottery — it's about building patience, focus, and confidence while turning imagination into something real and lasting.",
      image: "/pottery-hands-clay.png",
      delay: "0.6s",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="initiatives"
      className="py-20 bg-[#4c7766]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            WHAT WE DO
          </h2>
          <p className="text-black text-lg max-w-4xl mx-auto leading-relaxed">
            At Express4Change, we celebrate expression in every form — from
            powerful poetry and soulful music to bold dance, vibrant art, and
            thoughtful craft. We create platforms where creativity becomes a
            voice for change, and talent becomes a tool for transformation.
            Through workshops, performances, and campaigns, we empower young
            minds to speak up, move hearts, and shape a better world — one beat,
            brushstroke, or step at a time.
          </p>
        </div>

      <div className="space-y-16">
  {activities.map((activity, index) => (
    <div
      key={activity.title}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        isVisible ? "animate-slide-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: activity.delay }}
    >
      {/* Image */}
      <div
        className={`relative group ${
          index % 2 === 1 ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="bg-white rounded-3xl p-4 shadow-xl transform group-hover:scale-105 transition-transform duration-300">
          <img
            src={activity.image || "/placeholder.svg"}
            alt={activity.title}
            className="w-full h-64 object-cover rounded-2xl"
          />
        </div>
        {/* Decorative border */}
        <div className="absolute inset-0 rounded-3xl border-4 border-purple-300 transform rotate-3 -z-10 group-hover:rotate-6 transition-transform duration-300"></div>
      </div>

      {/* Text */}
      <div
        className={`space-y-6 ${
          index % 2 === 1 ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <h3 className="text-3xl font-bold text-black">{activity.title}</h3>
        <p className="text-black text-lg leading-relaxed">
          {activity.description}
        </p>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
