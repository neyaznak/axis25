"use client";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-10 bg-[url('/contact.jpg')] bg-cover bg-center bg-fixed bg-no-repeat min-h-screen text-black dark:text-white transition-colors">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Heading */}
        <header>
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Get in touch with us
          </p>
        </header>

        {/* Working Hours */}
        <section className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Working Hours</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Monday - Saturday: 10:00 AM to 6:00 PM
          </p>
          <p className="text-gray-700 dark:text-gray-300">Sunday: Closed</p>
        </section>

        {/* CTA Buttons */}
        <section className="grid sm:grid-cols-2 gap-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/918929088285"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-md shadow-md transition duration-300 hover:scale-[1.02]"
          >
            <Image
              src="/whatsapp-icon.svg"
              alt="WhatsApp"
              width={24}
              height={24}
            />
            Chat on WhatsApp
          </a>

          {/* Call */}
          <a
            href="tel:+918929088285"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md shadow-md transition duration-300 hover:scale-[1.02]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 4.5L2.25 19.5L7.5 17.25L10.5 20.25L13.5 17.25L18.75 19.5V4.5L13.5 6.75L10.5 3.75L7.5 6.75L2.25 4.5Z"
              />
            </svg>
            Call Now
          </a>
        </section>

        {/* Location + Form (Side by side on md+) */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Location</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Map */}
            <div className="overflow-hidden rounded-md shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14609.051932472987!2d85.73646029368636!3d23.73799965885786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f467c78337ebb9%3A0xecea84f68c99416e!2sLalpania%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1753912832359!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 dark:bg-gray-800 shadow-md rounded-lg p-6 space-y-4">
              <h2 className="text-xl font-semibold">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block mb-1 text-sm font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-md bg-white dark:bg-gray-700 text-black dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-md bg-white dark:bg-gray-700 text-black dark:text-white"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-md bg-white dark:bg-gray-700 text-black dark:text-white"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
