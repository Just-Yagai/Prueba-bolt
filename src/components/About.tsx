export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
              alt="Working on laptop"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="mt-10 lg:mt-0">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-600 mb-6">
              I'm a passionate Full Stack Developer with 5 years of experience building web applications.
              I specialize in React, Node.js, and modern web technologies.
            </p>
            <p className="text-gray-600 mb-6">
              My journey in tech started when I built my first website at 15. Since then,
              I've worked with startups and established companies to create innovative solutions.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-bold text-2xl text-purple-600">50+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-2xl text-blue-600">5+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}