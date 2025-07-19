import React from "react";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 max-w-4xl mx-auto text-white bg-gradient-to-b from-black via-purple-900 to-pink-900 rounded-3xl shadow-lg"
    >
      <h2 className="text-4xl font-extrabold mb-8 text-pink-400 border-b-4 border-pink-600 inline-block pb-2">
        About Me
      </h2>

      <p className="text-gray-300 text-lg mb-4">
        Hey there! I’m Hasini Ishara — an ISTQB-certified QA Engineer with a knack for making complex software simpler and safer through automation.
      </p>

      <p className="text-gray-300 text-lg mb-6">
        With over 4 years in the field, I’ve worked across web, mobile, and embedded systems, specializing in:
      </p>

      <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
        <li>Designing and maintaining automation frameworks using Python, Robot Framework, and Selenium</li>
        <li>Integrating tests into CI/CD pipelines with GitHub Actions, GitLab CI, and Jenkins</li>
        <li>Collaborating with Agile teams to boost software quality and speed up delivery</li>
        <li>Working with cloud platforms like AWS to streamline testing in the cloud</li>
      </ul>

      <p className="text-gray-300 text-lg mb-6">
        What drives me? Solving tough problems with smart automation, so teams can focus on building amazing products — without bugs holding them back.
      </p>

      <p className="text-gray-300 text-lg mb-6 italic">
        Outside work, I’m all about staying active through sports, picking up new languages, and diving deep into music — because a balanced life sparks creativity.
      </p>

      <p className="text-gray-300 text-lg">
        Ready to build something great together? Let’s connect!
      </p>
    </section>
  );
}

export default About;
