function About() {
  return (
    <div className="max-w-xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-extrabold text-purple-700 mb-4">About This Project</h1>
      <p className="text-gray-700 mb-6">
        This demo showcases how to use React Router for client-side navigation in a React app, styled with Tailwind CSS for a modern look and feel.
      </p>
      <h2 className="text-xl font-bold text-purple-600 mb-2">This project is designed by - </h2>
      <ul className="space-y-3">
        <li className="flex items-center gap-3">
          <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full font-semibold">Name</span>
          <span className="text-gray-600">Payal Singh</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full font-semibold">UID</span>
          <span className="text-gray-600">23BCS13626</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="bg-pink-200 text-pink-800 px-3 py-1 rounded-full font-semibold">Section</span>
          <span className="text-gray-600">23BCS_KRG_1A</span>
        </li>
      </ul>
    </div>
  );
}

export default About;