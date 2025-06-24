export default function Hero() {
  return (
    <section className="py-16 px-4 md:px-20 bg-[#0f172a]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Image */}
        <div className="w-full md:w-[40%] flex justify-center md:justify-start">
          <img
            src="/your-photo.jpg"
            alt="Riya Bansal"
            className="rounded-full w-56 sm:w-64 md:w-80 lg:w-96 h-auto object-cover border-4 border-purple-500 max-w-full"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-4 leading-tight">
            FRONTEND <br /> DEVELOPER
          </h2>
          <p className="text-base sm:text-lg text-gray-400 mb-6 px-2 sm:px-6 md:px-0">
            I'm a passionate React Frontend Developer focused on building responsive, user-friendly interfaces with modern tools like React, Tailwind CSS, and JavaScript.
          </p>

          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            <a
              href="https://linkedin.com/in/riiyaabansal"
              target="_blank"
              className="bg-blue-600 px-4 py-2 text-sm sm:text-base rounded hover:bg-blue-700 text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Riiyaa936828"
              target="_blank"
              className="bg-gray-800 px-4 py-2 text-sm sm:text-base rounded hover:bg-gray-900 text-white"
            >
              GitHub
            </a>
            <a
              href="/resume.pdf"
              className="bg-green-600 px-4 py-2 text-sm sm:text-base rounded hover:bg-green-700 text-white"
              download
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
