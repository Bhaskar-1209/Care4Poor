import React from "react";
// import Navigation from "./components/Navigation";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-400 via-yellow-400 to-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 animate-fade-in">
              About Express4Change
            </h1>
            <p className="text-xl md:text-2xl text-black/80 mb-8 animate-slide-up">
              Empowering young voices to create meaningful change in the world
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-left">
                <h2 className="text-4xl font-bold text-black mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Express4Change is a youth-led platform that empowers individuals to voice their ideas, concerns, and
                  visions for a better world. We believe that real change begins with honest expression — whether
                  through writing, art, public speaking, or digital activism.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  We aim to break the silence around pressing social, environmental, and personal issues by encouraging
                  expression as the first step toward impact. Through workshops, campaigns, and community-driven
                  initiatives, Express4Change nurtures awareness, creativity, and leadership — because the power to
                  change starts with the courage to express.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                  Join Our Mission
                </button>
              </div>
              <div className="animate-slide-right">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 shadow-lg">
                  <img
                    src="/images/about-section.png"
                    alt="Team collaboration"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-black mb-12 animate-fade-in">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold text-white">E</span>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Expression</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  We believe every voice matters and deserves to be heard. Expression is the foundation of change.
                </p>
              </div>
              <div
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold text-white">E</span>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Empowerment</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  We empower individuals with tools, skills, and confidence to turn their ideas into impactful action.
                </p>
              </div>
              <div
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold text-white">C</span>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Community</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  We build inclusive communities where diverse perspectives come together to create positive change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-black mb-6 animate-fade-in">Our Story</h2>
            <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up">
              Founded by passionate young changemakers, Express4Change emerged from the belief that creativity and
              expression are powerful catalysts for social transformation. We started as a small group of individuals
              who wanted to amplify youth voices and have grown into a platform that reaches communities across the
              globe.
            </p>
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-2xl p-8 animate-scale-in">
              <h3 className="text-2xl font-bold mb-4">
                {"In a world full of noise, let your truth be the change."}
              </h3>
              <p className="text-lg opacity-90">- Express4Change Motto</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
