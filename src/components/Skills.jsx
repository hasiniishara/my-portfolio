import React from "react";

const skillCategories = [
  {
    title: "Programming & Tools",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "Kotlin", "Git", "GitHub Actions", "Jenkins", "Ansible", "Docker", "Linux", "macOS"],
  },
  {
    title: "Testing & Automation",
    skills: ["Selenium", "Appium", "Robot Framework", "SpecFlow", "Pytest", "JMeter", "REST Assured", "Postman"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (Basic)", "Docker", "Jenkins", "GitHub Actions", "Ansible", "CI/CD", "Infrastructure-as-Code"],
  },
  {
    title: "Testing Areas",
    skills: ["UI Testing", "API Testing", "Mobile Testing", "Embedded Systems", "Security Testing", "Performance Testing", "System Integration"],
  },
  {
    title: "Soft Skills",
    skills: ["Collaboration", "Debugging", "Communication", "Knowledge Sharing", "Continuous Learning", "Teamwork"],
  },
  {
    title: "AI Tools",
    skills: ["GitHub Copilot"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-5xl mx-auto px-6 py-12 scroll-mt-24"
    >
      <h2 className="text-3xl font-bold text-purple-700 mb-8 border-b-4 border-pink-400 inline-block pb-1">
        Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-gradient-to-tr from-purple-100 to-pink-100 shadow-md rounded-xl p-5 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-purple-800 mb-3">
              {category.title}
            </h3>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
