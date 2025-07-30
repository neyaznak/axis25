import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-[url('/about.jpg')] bg-cover bg-fixed bg-center bg-no-repeat px-4 py-8 text-gray-800">
      <div className="max-w-4xl mx-auto text-center bg-white/70 backdrop-blur-md p-6 rounded-xl">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">About Axis25</h1>
        <p className="text-lg mb-6">
          Axis25 is founded by a passionate architect committed to creating
          innovative, sustainable, and people-focused spaces. Every design
          reflects purpose, elegance, and efficiency.
        </p>

        <div className="bg-white shadow-xl rounded-xl p-6 mt-8">
          <div className="flex justify-center">
            <Image
              src="/founder.jpg"
              alt="Md Nawaz Alam Khan"
              width={128}
              height={128}
              className="rounded-full mb-4 border-4 border-blue-500 shadow-md object-cover"
            />
          </div>

          <h2 className="text-2xl font-semibold mb-2">Founder</h2>
          <p className="mb-4">
            Md Nawaz Alam Khan (Architect, Designer, and Visionary)
          </p>

          <a
            href="https://www.linkedin.com/in/alamnawazkhan/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View LinkedIn Profile
          </a>
        </div>
      </div>
    </main>
  );
}
