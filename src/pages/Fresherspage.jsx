import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 animate-gradient-xy"></div>
        
        {/* Animated Particles Effect */}
        <div className="absolute inset-0">
          <div className="absolute w-4 h-4 bg-white rounded-full top-1/4 left-1/4 animate-float opacity-20"></div>
          <div className="absolute w-6 h-6 bg-white rounded-full top-3/4 left-1/3 animate-float-delayed opacity-20"></div>
          <div className="absolute w-3 h-3 bg-white rounded-full top-1/2 right-1/4 animate-float opacity-20"></div>
          <div className="absolute w-5 h-5 bg-white rounded-full bottom-1/4 right-1/3 animate-float-delayed opacity-20"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
            CSE Freshers Party 2025
          </h1>
          <p className="text-2xl md:text-3xl mb-10 font-light">
            Where New Beginnings Meet Endless Possibilities
          </p>
          <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold overflow-hidden bg-white text-purple-600 rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
            <span className="relative group-hover:text-white">RSVP Now</span>
          </button>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Event Highlights
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: "music", title: "Live Music", desc: "Groove to the beats of our amazing performers", gradient: "from-purple-400 to-pink-500" },
            { icon: "utensils", title: "Gourmet Food", desc: "Savor delicious meals and refreshments", gradient: "from-pink-500 to-red-500" },
            { icon: "trophy", title: "Fun Games", desc: "Exciting games and amazing prizes to be won", gradient: "from-yellow-400 to-orange-500" },
            { icon: "camera", title: "Photo Booth", desc: "Capture memories with your new friends", gradient: "from-green-400 to-blue-500" }
          ].map((item, index) => (
            <div key={index} className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 border border-gray-700 hover:border-purple-500">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-br ${item.gradient}`}>
                  <i className={`fas fa-${item.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">{item.title}</h3>
                <p className="text-gray-400 text-center">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
        <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Event Timeline
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { time: "11:00 AM", event: "Welcome Reception", color: "purple" },
            { time: "12:30 PM", event: "Opening Ceremony", color: "pink" },
            { time: "1:00 PM", event: "Ice Breaking Sessions", color: "blue" },
            { time: "2:30 PM", event: "Lunch & Entertainment", color: "green" },
            { time: "4:00 PM", event: "Closing Ceremony", color: "yellow" }
          ].map((item, index) => (
            <div key={index} className="group">
              <div className="flex bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transform hover:scale-102 transition-all duration-300">
                <div className={`w-32 font-bold text-${item.color}-400`}>{item.time}</div>
                <div className="flex-1 text-gray-300 group-hover:text-white transition-colors duration-300">{item.event}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-gray-900 to-pink-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Join The Celebration
          </h2>
          <div className="mb-12 space-y-6 backdrop-blur-lg bg-white/10 p-8 rounded-2xl">
            <h3 className="text-3xl font-semibold mb-6">Event Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl bg-white/5 backdrop-blur-lg">
                <p className="font-bold text-purple-400 mb-2">Date</p>
                <p className="text-lg">April 12, 2025</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 backdrop-blur-lg">
                <p className="font-bold text-pink-400 mb-2">Time</p>
                <p className="text-lg">11:00 AM onwards</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 backdrop-blur-lg">
                <p className="font-bold text-blue-400 mb-2">Venue</p>
                <p className="text-lg">Hotel Pradeep Star Inn</p>
              </div>
            </div>
          </div>
          <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
            <span className="relative">Register Now</span>
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg hover:shadow-xl transition-all duration-300">
              <i className="fas fa-envelope text-3xl text-purple-400 mb-4"></i>
              <p className="text-lg">
                <span className="block text-gray-400 mb-2">Email us at</span>
                <span className="font-bold text-white">freshers@college.edu</span>
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg hover:shadow-xl transition-all duration-300">
              <i className="fas fa-phone text-3xl text-pink-400 mb-4"></i>
              <p className="text-lg">
                <span className="block text-gray-400 mb-2">Call us at</span>
                <span className="font-bold text-white">+1 234 567 8900</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 px-4 text-center">
        <p className="text-gray-400">&copy; 2024 CSE Freshers Party. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;