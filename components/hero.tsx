export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance">SEVENBITLABS</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 text-balance leading-relaxed">
          We Design, Develop, and Deploy Tomorrow's Technology. From Concept to Commercialization.
        </p>
        <button className="px-8 py-4 bg-green-500 text-black font-bold text-lg rounded-lg hover:bg-green-400 transition transform hover:scale-105">
          Explore Our Services
        </button>
      </div>
    </section>
  )
}
