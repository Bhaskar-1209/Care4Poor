import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white text-white py-16 rounded-b-3xl shadow-lg">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">About Us</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            At <span className="font-semibold">DebateSChange</span>, we believe every child deserves a fair chance to thrive. 
            We’re committed to creating platforms that amplify youth voices and empower the next generation 
            of leaders through debates, discussions, and community-driven initiatives.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
            alt="Our Mission"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-white">Our Story</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              DebateSChange was founded with a simple yet powerful belief — that meaningful conversations 
              can ignite change. From grassroots campaigns to large-scale youth summits, 
              our journey has always been about creating inclusive spaces where every individual 
              feels heard, valued, and inspired to act.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#111] py-16 border-t border-[#F8E190]/30">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="p-8 border border-[#F8E190]/30 rounded-2xl hover:bg-[#222] transition">
            <h3 className="text-2xl font-bold text-[#F8E190]">Our Mission</h3>
            <p className="mt-3 text-gray-300">
              To empower youth through debates, training, and leadership opportunities that 
              inspire action, nurture critical thinking, and foster unity across diverse communities.
            </p>
          </div>
          <div className="p-8 border border-[#F8E190]/30 rounded-2xl hover:bg-[#222] transition">
            <h3 className="text-2xl font-bold text-[#F8E190]">Our Vision</h3>
            <p className="mt-3 text-gray-300">
              A world where young voices drive social transformation, and where 
              dialogue replaces division, creating a future built on empathy, 
              respect, and collective growth.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-[#F8E190]">Meet Our Team</h2>
        <p className="text-center text-gray-400 mt-2">The people behind DebateSChange</p>

        <div className="grid md:grid-cols-3 gap-10 mt-10">
          {[
            { name: "Aarav Mehta", role: "Founder & Visionary" },
            { name: "Riya Kapoor", role: "Programs Head" },
            { name: "Arjun Sharma", role: "Community Lead" },
          ].map((member, index) => (
            <div
              key={index}
              className="p-6 bg-[#111] rounded-2xl border border-[#F8E190]/30 text-center hover:bg-[#222] transition"
            >
              <div className="w-24 h-24 mx-auto rounded-full bg-[#F8E190]/20 flex items-center justify-center text-[#F8E190] text-3xl font-bold">
                {member.name[0]}
              </div>
              <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-[#F8E190] text-black py-16 rounded-t-3xl">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">
          <div>
            <h3 className="text-3xl font-bold">1000+</h3>
            <p className="mt-2">Meals Distributed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">1500+</h3>
            <p className="mt-2">Children Taught</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">₹200k+</h3>
            <p className="mt-2">Funds Raised</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">400+</h3>
            <p className="mt-2">Delegates Engaged</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
