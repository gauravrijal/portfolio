const projects = [
  {
    name: 'Home Server',
    category: 'Linux · Networking · Web Hosting — TechXpo 2024 People\'s Choice Award',
    image: '/project-home-server.jpg',
  },
  {
    name: 'Live ULM Parking',
    category: 'Hackathon Project — Hawkathon 2024',
    image: '/project-parking.jpg',
  },
  {
    name: 'Business Blog Website',
    category: 'HTML · CSS · JavaScript · Responsive Design',
    image: '/project-blog.jpg',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div data-animate data-delay="0" className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]"></span>
            <span className="text-[13px] font-medium text-[#666] tracking-wide">
              My Projects
            </span>
          </div>
          <h2 className="font-display text-[32px] md:text-[48px] text-[#1A1A1A] leading-[1.15] max-w-[600px] mx-auto">
            The projects that turn ideas into reality
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center max-w-[1140px] mx-auto" data-animate data-stagger="0.15">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 w-full max-w-[540px] last:md:col-span-2 last:md:justify-self-center"
              data-animate-child
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-medium text-[#1A1A1A]">
                  {project.name}
                </h3>
                <p className="text-xs text-[#666] mt-1 leading-relaxed">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
