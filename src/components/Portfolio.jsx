export default function Portfolio() {
  const projects = [
    { title: "Portfolio Website", description: "React + Tailwind portfolio.", link: "#" },
    { title: "Todo App", description: "Task manager with local storage.", link: "#" },
    { title: "Weather App", description: "Weather using OpenWeather API.", link: "#" },
  ];

  return (
    <section className="p-6 sm:p-10 text-center">
      <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <div key={i} className="bg-[#1e293b] p-6 rounded-xl hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
            <p className="text-gray-400 mb-3">{proj.description}</p>
            <a href={proj.link} className="text-pink-400 underline" target="_blank">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
