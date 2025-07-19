import React from "react";

const experiences = [
  {
    company: "Brahma Advice Technology | Australia, Perth",
    role: "Test Engineer",
    duration: "01/2025 - Present",
    domain: "SaaS, Finance, Insurance, Wealth Management",
    description:
      "Designed Python UI/API automation integrated with CI/CD pipelines, led test strategies, and collaborated with developers to maintain high product quality.",
  },
  {
    company: "Konecranes Finland Oy | Finland, Hyvinkää",
    role: "Test Automation Engineer",
    duration: "03/2024 - 12/2024",
    domain: "Embedded Systems, Industrial Automation",
    description:
      "Built automation for crane control systems using Robot Framework, performed testing in live factory environments, and ensured performance and integration quality.",
  },
  {
    company: "OrangeHRM | Sri Lanka, Colombo",
    role: "Quality Assurance Engineer",
    duration: "04/2021 - 02/2024",
    domain: "HR Systems, SaaS Web Applications",
    description:
      "Developed scalable web automation suites for HR systems, supported mobile testing, and implemented API and security testing pipelines.",
  },
  {
    company: "TELUS Digital | Finland, Tampere",
    role: "Linguistics Analyst",
    duration: "10/2023 - 12/2023",
    domain: "Linguistics, AI/NLP",
    description:
      "Supported AI projects by tagging and labeling datasets for NLP tasks such as part-of-speech and sentiment analysis.",
  },
  {
    company: "Effective Solutions Pvt Ltd | Sri Lanka, Colombo",
    role: "Trainee Associate QA Engineer",
    duration: "10/2020 - 04/2021",
    domain: "E-Commerce, Web Testing",
    description:
      "Executed UI and backend tests, improved release quality, and promoted automation-first practices during Agile sprints.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative max-w-4xl mx-auto px-6 mb-20 scroll-mt-24"
    >
      <h2 className="text-3xl font-bold text-purple-700 mb-10 border-b-4 border-pink-400 inline-block pb-2">
        Experience
      </h2>

      <div className="relative pl-10">
        {/* Vertical timeline line */}
        <div className="absolute top-0 left-5 w-1 bg-pink-400 h-full"></div>

        {experiences.map((exp, idx) => (
          <div key={idx} className="mb-12 last:mb-0 relative group">
            {/* Circle on timeline */}
            <span className="absolute -left-7 top-3 w-5 h-5 bg-pink-600 rounded-full border-2 border-white transition-transform group-hover:scale-110"></span>

            {/* Content box */}
            <div className="bg-pink-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-pink-700">{exp.company}</h3>
              <p className="text-purple-500 italic text-sm mb-1">
                {exp.role} | {exp.duration}
              </p>
              <p className="text-pink-600 font-semibold mb-2">{exp.domain}</p>
              <p className="text-gray-700 leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
