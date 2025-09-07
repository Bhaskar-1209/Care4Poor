

export default function TournamentsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navigation /> */}

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-400 via-yellow-400 to-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 animate-fade-in">Tournaments & Events</h1>
            <p className="text-xl md:text-2xl text-black mb-8 animate-slide-up">
              Compete, collaborate, and showcase your talents on a global stage
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Tournaments */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-black mb-12 animate-fade-in">Upcoming Tournaments</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl">🎤</span>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">Public Speaking Championship</h3>
                  <p className="text-gray-700 mb-6">Express your ideas and inspire change through powerful speeches</p>
                  <div className="text-sm text-gray-600 mb-4">
                    <p>📅 March 15-17, 2024</p>
                    <p>📍 Virtual & In-Person</p>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white w-full">Register Now</button>
                </div>
              </div>

              <div
                className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">Creative Arts Festival</h3>
                  <p className="text-gray-700 mb-6">Showcase your artistic talents in various creative mediums</p>
                  <div className="text-sm text-gray-600 mb-4">
                    <p>📅 April 20-22, 2024</p>
                    <p>📍 Community Centers</p>
                  </div>
                  <button className="bg-purple-500 hover:bg-purple-600 text-white w-full">Register Now</button>
                </div>
              </div>

              <div
                className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl">✍️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">Storytelling Competition</h3>
                  <p className="text-gray-700 mb-6">Share your stories and connect with audiences worldwide</p>
                  <div className="text-sm text-gray-600 mb-4">
                    <p>📅 May 10-12, 2024</p>
                    <p>📍 Online Platform</p>
                  </div>
                  <button className="bg-green-500 hover:bg-green-600 text-white w-full">Register Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Categories */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-black mb-12 animate-fade-in">Tournament Categories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-left">
                <h3 className="text-2xl font-bold text-black mb-6">Individual Competitions</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Solo Public Speaking</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Poetry Recitation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Creative Writing</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Digital Art Creation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Music Performance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-right">
                <h3 className="text-2xl font-bold text-black mb-6">Team Competitions</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Group Debates</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Collaborative Art Projects</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Community Impact Campaigns</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Theater Performances</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Social Media Challenges</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Winners */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-black mb-12 animate-fade-in">
              Past Winners & Highlights
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-slide-up">
                <div className="w-24 h-24 bg-gradient-to-br from-gold-400 to-yellow-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Sarah Chen</h3>
                <p className="text-gray-600 mb-2">2023 Public Speaking Champion</p>
                <p className="text-sm text-gray-500">{"Inspiring speech on climate action"}</p>
              </div>

              <div className="text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <div className="w-24 h-24 bg-gradient-to-br from-silver-400 to-gray-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">🥈</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Marcus Johnson</h3>
                <p className="text-gray-600 mb-2">2023 Creative Arts Winner</p>
                <p className="text-sm text-gray-500">{"Powerful mural on social justice"}</p>
              </div>

              <div className="text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="w-24 h-24 bg-gradient-to-br from-bronze-400 to-orange-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">🥉</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Team Unity</h3>
                <p className="text-gray-600 mb-2">2023 Community Impact Award</p>
                <p className="text-sm text-gray-500">{"Mental health awareness campaign"}</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Registration CTA */}
      {/* <section className="py-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in">Ready to Compete?</h2>
            <p className="text-xl text-white/90 mb-8 animate-slide-up">
              Join thousands of young changemakers in our upcoming tournaments and showcase your talents to the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <button className="bg-white text-purple-500 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                View All Tournaments
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-500 px-8 py-3 text-lg font-semibold">
                Registration Guide
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}
