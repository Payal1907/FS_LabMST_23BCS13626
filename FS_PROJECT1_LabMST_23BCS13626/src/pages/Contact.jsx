function Contact() {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-extrabold text-pink-700 mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-6">
        I'd love to hear from you! Fill out the form below or reach me directly at <a href="payalworkcu@gmail.com" className="text-pink-600 underline">payalworkcu@gmail.com</a>.
      </p>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-600 font-semibold mb-1">Name</label>
          <input type="text" className="w-full border border-pink-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-gray-600 font-semibold mb-1">Email</label>
          <input type="email" className="w-full border border-pink-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-gray-600 font-semibold mb-1">Message</label>
          <textarea className="w-full border border-pink-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400" rows={4} placeholder="Your message"></textarea>
        </div>
        <button type="submit" className="bg-pink-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-pink-800 transition">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;