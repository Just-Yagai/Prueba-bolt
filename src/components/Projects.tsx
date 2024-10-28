export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with React and Node.js",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
      tags: ["TypeScript", "Socket.io", "Express"]
    },
    {
      title: "Portfolio Website",
      description: "Modern and responsive portfolio template",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      tags: ["React", "Tailwind CSS", "Vite"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}