export default function Skills() {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Figma"] },
    { category: "Soft Skills", items: ["Communication", "Leadership", "Problem Solving", "Agile"] }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillSet, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-purple-600">{skillSet.category}</h3>
              <ul className="space-y-2">
                {skillSet.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-gray-600">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}