function Home() {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-4">Welcome to My React Router Demo</h1>
      <p className="text-lg text-gray-700 mb-6">
        This is my Vite-React project. In which I have used Tailwind CSS for styling, Router-DOM for developing routes, components and Pages
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-100 p-4 rounded-lg shadow text-center">
          <h2 className="font-bold text-blue-700 mb-2">Fast Navigation</h2>
          <p className="text-gray-600">Switch between pages instantly using React Router.</p>
        </div>
        <div className="bg-purple-100 p-4 rounded-lg shadow text-center">
          <h2 className="font-bold text-purple-700 mb-2">Modern Styling</h2>
          <p className="text-gray-600">Tailwind CSS makes your UI look fresh and responsive.</p>
        </div>
        <div className="bg-pink-100 p-4 rounded-lg shadow text-center">
          <h2 className="font-bold text-pink-700 mb-2">Easy Structure</h2>
          <p className="text-gray-600">Organized code with separate components and pages.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;