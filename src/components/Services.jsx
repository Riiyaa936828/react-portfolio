export default function Services() {
  const services = [
    {
      title: "Website Development",
      description: "Custom, fast, and responsive websites for your business or portfolio.",
      icon: "💻",
    },
    {
      title: "Responsive Design",
      description: "Pixel-perfect layouts that adapt to all screen sizes seamlessly.",
      icon: "📱",
    },
    {
      title: "UI/UX Design",
      description: "Clean, intuitive interfaces designed with user experience in mind.",
      icon: "🎨",
    },
    {
      title: "Performance Optimization",
      description: "Improve speed, SEO, and accessibility of your web application.",
      icon: "⚡",
    },
  ];

  return (
    <section className="p-6 sm:p-10 text-center">
      <h2 className="text-3xl sm:text-4xl font-semibold text-pink-400 mb-8">My Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <div key={i} className="bg-[#1e293b] p-6 rounded-xl shadow-sm hover:shadow-lg transition">
            <div className="text-4xl mb-3">{service.icon}</div>
            <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
            <p className="text-sm text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
