import { useState } from 'react';
import profilePic from './assets/profile.jpg'
import canvaLogo from './assets/Canva-logo.png'
import figmaLogo from './assets/Figma-logo.svg'
import javaGame from './assets/Java-game.png'
import medGame from './assets/Med-game.png'
import pos from './assets/pos.png'
import caresync from './assets/caresync.png'

export default function PortfolioWebsite() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Desktop Game',
      description:
        'Built a “Room discovery” desktop game using Java. The game includes hidden items, math questions and riddles.',
      tools: 'Java • Canva • UI Design',
      image: javaGame,
      gallery: [
        javaGame
      ],
      link: 'https://canva.link/zpvi6bu92mgtry6',
    },
    {
      title: 'Reviewer System for Medtech Students',
      description:
        'Developed a desktop application for medical technology students to review lectures and play educational games.',
      tools: 'VB.Net • Canva • UI Design',
      image: medGame,
      gallery: [
        medGame
      ],
      link: 'https://canva.link/wmwbqfl9mhqtbof',
    },
    {
      title: 'POS System',
      description:
        'A responsive dashboard interface designed for doctors to manage patient requests, schedules, and records efficiently.',
      tools: 'VB.Net • Figma • Canva',
      image: pos,
      gallery: [
        pos
      ],
      link: 'https://www.figma.com/design/B4nooao6sXYSeBlh6bur47/.NET?node-id=0-1&t=gsB1nmKl2h3LR4qj-1',
    },
    {
      title: 'Mobile Health Application System',
      description:
        'Built a front-end mobile application using Flutter to help users track vital health metrics and receive medication or appointment reminders.',
      tools: 'Flutter • Figma • Canva',
      image: caresync,
      gallery: [
        caresync
      ],
      link: 'https://www.figma.com/design/RMTynVQtDq40L63rDwNkXP/SYSAND?t=w3qO7Z8iWYamu6Nd-1',
    },
  ];

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({
      behavior: 'smooth',
    });
  };

  const openResume = () => {
  window.open('/resume.pdf', '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/kiana-marie-dizon', '_blank');
  };


  return (
    <div className="min-h-screen bg-[#f7f7fb] text-gray-900 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-amber-900">Kiana.</h1>

          <div className="hidden md:flex gap-8 text-gray-600 font-medium">
            <a href="#about" className="hover:text-amber-900 transition">
              About
            </a>
            <a href="#skills" className="hover:text-amber-900 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-amber-900 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-amber-900 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 md:px-20 pt-24 pb-24 bg-[#f8f4ef]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
              UI/UX Designer Portfolio
            </p>

            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
              I'm Kiana Marie <span className="text-amber-900"> Dizon </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
              an aspiring UI/UX designer passionate about creating
              clean, modern, and user-friendly interfaces for mobile and web
              applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToProjects}
                className="bg-amber-800 hover:bg-amber-800 transition text-white px-7 py-4 rounded-2xl shadow-xl"
              >
                View Projects
              </button>

              <button
                onClick={openResume}
                className="bg-white border border-gray-200 hover:border-amber-800 hover:text-amber-800 transition px-7 py-4 rounded-2xl shadow-sm"
              >
                Download Resume
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-0 -left-0 w-48 h-48 bg-amber-500 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-amber-500 rounded-full blur-3xl opacity-60"></div>

            <div className="relative bg-white rounded-[2rem] p-6 shadow-2xl border border-gray-100">
              <img
                src={profilePic}
                alt="Profile"
                className="rounded-[1.5rem] h-[550px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 md:px-20 py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">About Me</h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            I recently graduated with a degree in BS Applied Mathematics –
            Information Technology Track. My passion for UI/UX design comes
            from combining creativity and problem-solving to create meaningful
            digital experiences.
          </p>
        </div>

        <div className="mt-8 text-center">

            <p className="uppercase tracking-[0.3em] text-black-500 mb-8">
              TOOLS I WORK WITH
            </p>

            <div className="flex justify-center items-center gap-16">

              <div>
                <img
                  src={figmaLogo}
                  alt="Figma"
                  className="w-14 h-14 mx-auto mb-3"
                />
                <p className="font-medium">Figma</p>
              </div>

              <div>
                <img
                  src={canvaLogo}
                  alt="Canva"
                  className="w-14 h-14 mx-auto mb-3"
                />
                <p className="font-medium">Canva</p>
              </div>

            </div>
          </div>

      </section>

      {/* Skills and Tools*/}
      <section id="skills" className="px-8 md:px-20 py-24 bg-[#f8f4ef]">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-stone-800 mb-4">
              My Skills
            </h2>
            <p className="text-stone-600 text-lg">
               Key skills I use to create intuitive, visually engaging, and user-centered digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-3">

            <div className="bg-white rounded-[1.5rem] p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">UI Design</h3>
              <p className="text-stone-600 text-sm">
                Creating visually appealing and consistent interfaces.
              </p>
            </div>

            <div className="bg-white rounded-[1.5rem] p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wireframing</h3>
              <p className="text-stone-600 text-sm">
                Structuring layouts before high-fidelity design.
              </p>
            </div>

            <div className="bg-white rounded-[1.5rem] p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">User Research</h3>
              <p className="text-stone-600 text-sm">
                Understanding user behavior and pain points.
              </p>
            </div>

            <div className="bg-white rounded-[1.5rem] p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Prototyping</h3>
              <p className="text-stone-600 text-sm">
                Building interactive experiences before development.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 md:px-20 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-500 text-lg">
              Click a project to explore the UI designs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-[#fafafa] rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col h-full"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-5 flex flex-col flex-1">

                  <h3 className="text-xl font-bold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* pushes everything below to bottom */}
                  <div className="mt-auto">

                    <p className="text-sm text-amber-800 font-medium mb-4">
                      {project.tools}
                    </p>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 bg-amber-800 hover:bg-amber-900 text-white py-3 rounded-2xl transition"
                      >
                        View Design
                      </button>

                      <button
                        onClick={() => window.open(project.link, '_blank')}
                        className="flex-1 border border-gray-200 hover:border-amber-700 hover:text-amber-900 py-3 rounded-2xl transition bg-white"
                      >
                        Open Link
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 md:px-20 py-24 bg-[#f8f4ef]">
        <div className="max-w-5xl mx-auto bg-amber-900 rounded-[3rem] p-14 text-center text-white shadow-2xl">
          <h2 className="text-5xl font-bold mb-6">Let’s Work Together</h2>

          <p className="text-amber-100 text-lg mb-10 max-w-2xl mx-auto">
            I’m currently looking for UI/UX entry-level opportunities.
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center">
              <a
                href="mailto:kianamariedizon@gmail.com"
                className="bg-white text-amber-800 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition inline-block"
              >
                Send Email
              </a>
           

            <button
              onClick={openLinkedIn}
              className="border border-white/40 px-8 py-4 rounded-2xl hover:bg-white hover:text-amber-800 transition"
            >
              LinkedIn Profile
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-[2rem] max-w-5xl w-full max-h-[90vh] overflow-y-auto p-8 relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-3xl font-bold text-gray-500 hover:text-black"
            >
              ×
            </button>

            <h2 className="text-4xl font-bold mb-3">
              {selectedProject.title}
            </h2>

            <p className="text-gray-600 mb-8 text-lg">
              {selectedProject.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {selectedProject.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Project UI"
                  className="rounded-xl shadow-lg w-full h-80 object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
