import React from "react"
// import Navigation from "./components/navigation" // adjust path as per your project
// import { Textarea } from "./components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navigation /> */}

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-400 via-yellow-400 to-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-black/80 mb-8 animate-slide-up">
              In a world full of noise, let your truth be the change.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-slide-left">
                <h2 className="text-3xl font-bold text-black mb-8">Get In Touch</h2>
              <form className="space-y-6">
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
    <input
      placeholder="Your full name"
      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
    />
  </div>

  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
    <input
      type="email"
      placeholder="your.email@example.com"
      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
    />
  </div>

  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone (Optional)</label>
    <input
      type="tel"
      placeholder="+1 (555) 123-4567"
      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
    />
  </div>

  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
    <select className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent">
      <option value="">Select a subject</option>
      <option value="general">General Inquiry</option>
      <option value="membership">Membership Questions</option>
      <option value="workshops">Workshop Information</option>
      <option value="partnerships">Partnership Opportunities</option>
      <option value="media">Media & Press</option>
      <option value="support">Technical Support</option>
    </select>
  </div>

  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
    <textarea
      placeholder="Tell us how we can help you..."
      className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
    />
  </div>

  <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold w-full rounded-lg">
    Send Message
  </button>
</form>

              </div>

              {/* Contact Details */}
              <div className="animate-slide-right">
                <h2 className="text-3xl font-bold text-black mb-8">Contact Information</h2>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white text-xl">📧</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Email</h3>
                      <p className="text-gray-700">express4change@gmail.com</p>
                      <p className="text-sm text-gray-500 mt-1">We typically respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white text-xl">📱</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Phone</h3>
                      <p className="text-gray-700">+91 7838295296</p>
                      <p className="text-sm text-gray-500 mt-1">Available Monday-Friday, 9 AM - 6 PM IST</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white text-xl">🌐</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Social Media</h3>
                      <div className="space-y-2">
                        <p className="text-gray-700">Follow us for updates and inspiration</p>
                        <div className="flex space-x-4">
                          <a href="#" className="text-orange-500 hover:text-orange-600 font-semibold">
                            Instagram
                          </a>
                          <a href="#" className="text-orange-500 hover:text-orange-600 font-semibold">
                            Twitter
                          </a>
                          <a href="#" className="text-orange-500 hover:text-orange-600 font-semibold">
                            LinkedIn
                          </a>
                          <a href="#" className="text-orange-500 hover:text-orange-600 font-semibold">
                            YouTube
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Office</h3>
                      <p className="text-gray-700">Virtual Headquarters</p>
                      <p className="text-sm text-gray-500 mt-1">We operate globally with local community centers</p>
                    </div>
                  </div>
                </div>

                {/* QR Code Section */}
                {/* <div className="mt-12 p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl">
                  <h3 className="text-xl font-bold text-black mb-4 text-center">Quick Connect</h3>
                  <div className="flex items-center justify-center space-x-6">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-black rounded-lg flex items-center justify-center mb-2">
                        <span className="text-white text-xs">QR Code</span>
                      </div>
                      <p className="text-sm text-gray-600">Scan to connect</p>
                    </div>
                    <div className="text-center">
                      <button className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-full">
                        Donate
                      </button>
                      <p className="text-sm text-gray-600 mt-2">Support our mission</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-black mb-12 animate-fade-in">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up">
                <h3 className="text-xl font-bold text-black mb-3">
                  How can I get involved with Express4Change?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  You can start by joining our community as a free member, participating in our workshops,
                  or applying for our mentorship programs. Visit our Join Us page to explore different membership options.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-xl font-bold text-black mb-3">Do you offer virtual programs?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes! Many of our workshops, mentorship sessions, and community events are available virtually,
                  making them accessible to participants worldwide.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-xl font-bold text-black mb-3">What age groups do you work with?</h3>
                <p className="text-gray-700 leading-relaxed">
                  While we focus primarily on youth and young adults (ages 13-30), we welcome participants of all ages
                  who are passionate about creative expression and social change.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <h3 className="text-xl font-bold text-black mb-3">How can organizations partner with Express4Change?</h3>
                <p className="text-gray-700 leading-relaxed">
                  We're always looking for partnerships with schools, community organizations, and businesses that share our mission. 
                  Contact us to discuss collaboration opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-16 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-black mb-6 animate-fade-in">Ready to Express Your Change?</h2>
            <p className="text-xl text-black/80 mb-8 animate-slide-up">
              Join our community of changemakers and start making a difference today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <button className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg font-semibold">
                Join Our Community
              </button>
              <button className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg font-semibold">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}
