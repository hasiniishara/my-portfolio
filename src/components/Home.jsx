import React from "react";
import profileImg from "../images/profileImg.jpeg";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-white px-6 bg-gradient-to-b from-purple-900 via-pink-900 to-black"
    >
      <img
        src={profileImg}
        alt="Hasini Ishara"
        className="w-40 h-40 rounded-full border-4 border-pink-500 shadow-lg object-cover mb-6"
      />
      <h1 className="text-5xl font-extrabold mb-4">Hey, I’m Hasini Ishara</h1>
      <p className="max-w-2xl text-center text-lg mb-6">
        A passionate Test Automation Engineer with over 4 years of
        experience. I love building efficient automation frameworks and
        developing scalable web applications. I’m fascinated by cloud technologies, especially AWS,
        and enjoy integrating DevOps practices into testing pipelines to deliver
        quality software faster.
      </p>
      <div className="flex space-x-8 text-pink-400 text-xl font-semibold">
        <a
          href="https://github.com/hasiniishara"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/hasini-ishara-94329516b/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600 transition"
        >
          LinkedIn
        </a>
        <a href="mailto:hasinidevmini28@gmail.com" className="hover:text-pink-600 transition">
          Email
        </a>
      </div>
    </section>
  );
}

export default Home;
