import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

    const [form, setForm] = useState({ name: '', email: '', course: '' });
    const [entries, setEntries] = useState([]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (form.name && form.email && form.course) {
        setEntries((prev) => [...prev, form]);
        setForm({ name: '', email: '', course: '' });
      }
    };

    return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
        <form
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl mb-8 border border-blue-200"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">Course Registration</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-blue-700 font-medium mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 text-gray-900"
                required
              />
            </div>
            <div>
              <label className="block text-blue-700 font-medium mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 text-gray-900"
                required
              />
            </div>
            <div>
              <label className="block text-blue-700 font-medium mb-2" htmlFor="course">Course</label>
              <input
                type="text"
                id="course"
                name="course"
                value={form.course}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 text-gray-900"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded font-bold text-lg shadow hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>

        <div className="w-full max-w-3xl">
          <h3 className="text-xl font-bold mb-4 text-blue-700 text-center">Submitted Entries</h3>
          <table className="min-w-full bg-white rounded-lg shadow-md border border-blue-200 overflow-hidden">
            <thead className="bg-blue-100">
              <tr>
                <th className="py-3 px-6 border-b text-left text-blue-700 font-semibold">Name</th>
                <th className="py-3 px-6 border-b text-left text-blue-700 font-semibold">Email</th>
                <th className="py-3 px-6 border-b text-left text-blue-700 font-semibold">Course</th>
              </tr>
            </thead>
            <tbody>
              {entries.length === 0 ? (
                <tr>
                  <td colSpan={3} className="py-6 px-6 text-center text-gray-500">No entries yet.</td>
                </tr>
              ) : (
                entries.map((entry, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-blue-50"}>
                    <td className="py-3 px-6 border-b text-gray-900">{entry.name}</td>
                    <td className="py-3 px-6 border-b text-gray-900">{entry.email}</td>
                    <td className="py-3 px-6 border-b text-gray-900">{entry.course}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
}

  export default App;
