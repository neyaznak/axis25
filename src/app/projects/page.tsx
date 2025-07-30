// src/app/projects/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-[url('/projects.jpg')] bg-cover bg-fixed bg-center bg-no-repeat min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>

      <section className="bg-white shadow-lg rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-semibold mb-2">Enzyme Tower, Hong Kong</h2>
        <p className="text-gray-700 mb-4">
          <strong>Client:</strong> Enzyme APD Ltd, Central District, Hong Kong.
        </p>
        <p className="text-gray-700 mb-4">
          A BIM Capstone Project to re-imagine a 21-storey mixed-use high-rise at a prime location in Hong Kong. 
          It includes office spaces, service apartments, sky gardens, and public areas for better ROI and urban integration.
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Plot Area: 203.7 sqm</li>
          <li>GFA Used: 1430.70 sqm</li>
          <li>FAR: 13.8</li>
          <li>Building Type: Mixed-use (Office + Service Apartments)</li>
          <li>Tools: Revit, AutoCAD, TwinMotion, Navisworks, Dynamo, Primavera</li>
        </ul>

        <Link 
          href="/portfolio.pdf" // Move your uploaded file to /public folder as portfolio.pdf
          target="_blank"
          className="inline-block mt-4 px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          View Full Portfolio (PDF)
        </Link>
      </section>
    </div>
  );
}
