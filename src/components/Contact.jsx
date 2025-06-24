export default function Contact() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-semibold text-green-400 mb-6">Contact Me</h2>
      <form  action="https://formspree.io/f/xldnpvvw"  // 🔁 Replace with your actual Formspree form ID
        method="POST" className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 rounded bg-[#1e293b] text-white" />
        <input type="email" placeholder="Your Email" className="w-full p-2 rounded bg-[#1e293b] text-white" />
        <textarea rows="4" placeholder="Your Message" className="w-full p-2 rounded bg-[#1e293b] text-white"></textarea>
        <button type="submit" className="px-6 py-2 bg-green-600 rounded hover:bg-green-700">Send</button>
      </form>
    </div>
  );
}
