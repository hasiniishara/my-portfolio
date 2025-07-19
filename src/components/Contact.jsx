import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto px-6 py-12 scroll-mt-24"
    >
      <h2 className="text-3xl font-bold text-purple-700 mb-8 border-b-4 border-pink-400 inline-block pb-1">
        Contact
      </h2>

      <div className="bg-gradient-to-tr from-black via-purple-950 to-pink-900 text-white p-6 rounded-xl shadow-md space-y-6">
        <p className="text-lg leading-relaxed">
          Interested in working together or have a question? Feel free to reach out! I'm always open to new opportunities, collaborations, or just a friendly chat about tech and testing.
        </p>

        <div className="space-y-3 text-sm sm:text-base">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-pink-400" />
            <a
              href="mailto:hasinidevmini28@gmail.com"
              className="hover:underline"
            >
              hasinidevmini28@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <FaPhone className="text-pink-400" />
            <span>+358 41 723 7126</span>
          </div>

          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-pink-400" />
            <span>Hyvinkää, Finland</span>
          </div>
        </div>

        {/* Optional Contact Form (uncomment to use) */}
        {/*
        <form className="space-y-4 mt-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded bg-white text-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded bg-white text-black"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-2 rounded bg-white text-black"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-pink-600 hover:bg-pink-700 rounded text-white transition"
          >
            Send Message
          </button>
        </form>
        */}
      </div>
    </section>
  );
}
