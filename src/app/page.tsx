import { FaHome, FaBuilding, FaTree } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-[url('/home.jpg')] bg-cover bg-center bg-fixed bg-no-repeat px-4 py-12 text-gray-800">
      <div className="bg-white/70 p-8 rounded-xl">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-blue-700 mb-4">
            Welcome to Axis25
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Designing Dreams into Reality – We build thoughtful, sustainable,
            and inspiring spaces.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Residential Design */}
            <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaHome className="text-4xl text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Residential Design</h3>
              <p>
                Beautiful and functional homes tailored to your lifestyle and
                taste.
              </p>
            </div>

            {/* Commercial Spaces */}
            <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaBuilding className="text-4xl text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Commercial Spaces</h3>
              <p>
                Modern, efficient, and brand-focused workspaces that inspire
                teams.
              </p>
            </div>

            {/* Landscape Planning */}
            <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaTree className="text-4xl text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Landscape Planning</h3>
              <p>
                Green, relaxing outdoor designs that blend with architectural
                vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
