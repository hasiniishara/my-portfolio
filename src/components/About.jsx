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

      <p className="text-gray-300 text-lg mb-4 leading-relaxed">
        Hey there! I’m <strong>Hasini Ishara</strong> — an ISTQB-certified <strong>QA Engineer</strong> with a knack for making complex software simpler and safer through automation.
      </p>

      <p className="text-gray-300 text-lg mb-4 leading-relaxed">
        With over 5 years of experience in <strong>web, mobile, and embedded systems</strong>, I’ve worked in industries like HR tech, insurance, eCommerce, and industrial automation — always aiming to ensure high-quality software delivery.
      </p>

      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
        I specialize in:
      </p>

      <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
        <li>Designing scalable automation frameworks using <strong>Python, JavaScript Selenium, and Robot Framework</strong></li>
        <li>Integrating automated tests into <strong>CI/CD pipelines</strong> using GitHub Actions, GitLab CI, and Jenkins</li>
        <li>Testing both frontend and backend systems with <strong>API automation and functional test suites</strong></li>
        <li>Running tests across cloud environments, especially <strong>AWS</strong></li>
        <li>Collaborating closely with <strong>Agile and DevOps teams</strong> to ensure faster releases and fewer bugs</li>
      </ul>

      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
        What drives me? <strong>Solving tough problems</strong> with smart automation so development teams can focus on building amazing products — without bugs holding them back.
      </p>

      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
        I'm not just an automation enthusiast — I'm also a hands-on <strong>Software Tester</strong> who believes in combining <strong>manual insight with automated precision</strong> for complete test coverage.
      </p>

      <p className="text-gray-300 text-lg mb-6 italic leading-relaxed">
        Outside of work, I enjoy playing sports, learning languages, and diving deep into music — because a balanced life sparks creativity and focus.
      </p>

      <p className="text-gray-300 text-lg leading-relaxed">
        💬 Ready to build something great together? Let’s connect!
      </p>
    </section>
  );
}

export default About;