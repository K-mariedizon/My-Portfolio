// import { useState } from 'react';
// import profilePic from './assets/profile.jpg'
// import canvaLogo from './assets/Canva-logo.png'
// import figmaLogo from './assets/Figma-logo.svg'
// import javaGame from './assets/Java-game.png'
// import medGame from './assets/Med-game.png'
// import pos from './assets/pos.png'
// import caresync from './assets/caresync.png'

// export default function PortfolioWebsite() {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const projects = [
//     {
//   title: 'Desktop Game',
//   description:
//     'Built a “Room discovery” desktop game using Java. The game includes hidden items, math questions and riddles.',
//   tools: 'Java • WindowBuilder • Canva',
//   image: javaGame,
//   gallery: [
//     javaGame
//   ],
//   designLink: 'https://canva.link/zpvi6bu92mgtry6',
//   link: 'https://github.com/K-mariedizon/JavaGame',
// },
// {
//   title: 'Reviewer System for Medtech Students',
//   description:
//     'Developed a desktop application for medical technology students to review lectures and play educational games.',
//   tools: 'VB.NET • MS Access • Windows Forms • Canva',
//   image: medGame,
//   gallery: [
//     medGame
//   ],
//   designLink: 'https://canva.link/wmwbqfl9mhqtbof',
//   link: 'https://github.com/K-mariedizon/MedTech-Reviewer-System',
// },
// {
//   title: 'POS System',
//   description:
//     'A responsive dashboard interface designed for doctors to manage patient requests, schedules, and records efficiently.',
//   tools: 'VB.NET • MS Access • Figma',
//   image: pos,
//   gallery: [
//     pos
//   ],
//   designLink: 'https://www.figma.com/design/B4nooao6sXYSeBlh6bur47/.NET?node-id=0-1&t=gsB1nmKl2h3LR4qj-1',
//   link: 'https://github.com/K-mariedizon/POS-System',
// },
// {
//   title: 'Mobile Health Application System',
//   description:
//     'Built a front-end mobile application using Flutter to help users track vital health metrics and receive medication or appointment reminders.',
//   tools: 'Flutter • Dart • Figma',
//   image: caresync,
//   gallery: [
//     caresync
//   ],
//   designLink: 'https://www.figma.com/design/RMTynVQtDq40L63rDwNkXP/SYSAND?t=w3qO7Z8iWYamu6Nd-1',
//   link: 'https://github.com/K-mariedizon/Mobile-Health-Application',
// },
//   ];

//   const scrollToProjects = () => {
//     document.getElementById('projects').scrollIntoView({
//       behavior: 'smooth',
//     });
//   };

//   const openResume = () => {
//   window.open('/resume.pdf', '_blank');
//   };

//   const openLinkedIn = () => {
//     window.open('https://www.linkedin.com/in/kiana-marie-dizon', '_blank');
//   };


//   return (
//     <div className="min-h-screen bg-[#f7f7fb] text-gray-900 font-sans">
//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
//           <h1 className="text-2xl font-bold text-amber-900">KD</h1>

//           <div className="hidden md:flex gap-8 text-gray-600 font-medium">
//             <a href="#about" className="hover:text-amber-900 transition">
//               About
//             </a>
//             <a href="#skills" className="hover:text-amber-900 transition">
//               Skills
//             </a>
//             <a href="#projects" className="hover:text-amber-900 transition">
//               Projects
//             </a>
//             <a href="#contact" className="hover:text-amber-900 transition">
//               Contact
//             </a>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="px-8 md:px-20 pt-24 pb-24 bg-[#FBF8F4]">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
//           <div>
//            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
//              Developer • UI/UX Designer
//           </p>

//          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
//            I'm <span className="text-amber-900">Kiana Dizon</span>
//          </h1>

//          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
//            An aspiring software developer and UI/UX designer passionate about
//            building functional, user-friendly, and visually engaging digital
//            experiences across web, mobile, and desktop applications.
//          </p>
//             <div className="flex flex-wrap gap-4">
//               <button
//                 onClick={scrollToProjects}
//                 className="bg-amber-800 hover:bg-amber-800 transition text-white px-7 py-4 rounded-2xl shadow-xl"
//               >
//                 View Projects
//               </button>

//               <button
//                 onClick={openResume}
//                 className="bg-white border border-gray-200 hover:border-amber-800 hover:text-amber-800 transition px-7 py-4 rounded-2xl shadow-sm"
//               >
//                 Download Resume
//               </button>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="absolute -top-0 -left-0 w-48 h-48 bg-amber-500 rounded-full blur-3xl opacity-60"></div>
//             <div className="absolute bottom-0 right-0 w-48 h-48 bg-amber-500 rounded-full blur-3xl opacity-60"></div>

//             <div className="relative p-5 bg-[#f5f1eb] rounded-[2.5rem] shadow-xl">

//               <img
//                 src={profilePic}
//                 alt="Kiana Dizon"
//                 className="rounded-[2rem] h-[550px] w-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About */}
//       <section id="about" className="px-8 md:px-20 py-20 bg-white">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-5xl font-bold mb-8">About Me</h2>

// <p className="text-lg text-gray-600 leading-relaxed">
//   I recently graduated with a degree in BS Applied Mathematics –
//   Information Technology Track. I enjoy combining programming,
//   problem-solving, and design to build functional and user-friendly
//   digital experiences. I have experience working with web, mobile,
//   desktop applications, databases, and UI/UX design.
// </p>
//         </div>

//         {/* Technologies & Tools */}
// <section className="px-8 md:px-20 py-20 bg-white">
//   <div className="max-w-6xl mx-auto">

//     <div className="text-center mb-14">
//       <p className="uppercase tracking-[0.3em] text-gray-500 mb-3">
//         TECHNOLOGIES & TOOLS
//       </p>

//       <h2 className="text-4xl font-bold text-stone-800">
//         What I Work With
//       </h2>
//     </div>

//     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

//       {/* Development */}
//       <div className="bg-[#FBF8F4] rounded-[2rem] p-7">
//         <h3 className="text-xl font-semibold text-amber-900 mb-4">
//           Development
//         </h3>

//         <p className="text-gray-600 leading-relaxed">
//           Java • VB.NET • Flutter • Dart • Python • JavaScript
//         </p>
//       </div>

//       {/* Web */}
//       <div className="bg-[#FBF8F4] rounded-[2rem] p-7">
//         <h3 className="text-xl font-semibold text-amber-900 mb-4">
//           Web
//         </h3>

//         <p className="text-gray-600 leading-relaxed">
//           HTML • CSS • PHP • JavaScript
//         </p>
//       </div>

//       {/* Database */}
//       <div className="bg-[#FBF8F4] rounded-[2rem] p-7">
//         <h3 className="text-xl font-semibold text-amber-900 mb-4">
//           Database
//         </h3>

//         <p className="text-gray-600 leading-relaxed">
//           Microsoft Access • SQL
//         </p>
//       </div>

//       {/* Design */}
//       <div className="bg-[#FBF8F4] rounded-[2rem] p-7">
//         <h3 className="text-xl font-semibold text-amber-900 mb-4">
//           Design
//         </h3>

//         <p className="text-gray-600 leading-relaxed">
//           Figma • Canva
//         </p>
//       </div>

//     </div>
//   </div>
// </section>

//       </section>

//       {/* Skills and Tools*/}
//       <section id="skills" className="px-8 md:px-20 py-24 bg-[#FBF8F4]">
//         <div className="grid md:grid-cols-4 gap-3">

//   <div className="bg-white rounded-[1.5rem] p-8 shadow-sm">
//     <h3 className="text-xl font-semibold mb-2">
//       Frontend Development
//     </h3>
//     <p className="text-stone-600 text-sm">
//       Building responsive and interactive web and application interfaces.
//     </p>
//   </div>

//   <div className="bg-white rounded-[1.5rem] p-8 shadow-sm">
//     <h3 className="text-xl font-semibold mb-2">
//       Backend & Database
//     </h3>
//     <p className="text-stone-600 text-sm">
//       Developing application logic and managing data and databases.
//     </p>
//   </div>

//   <div className="bg-white rounded-[1.5rem] p-8 shadow-sm">
//     <h3 className="text-xl font-semibold mb-2">
//       Mobile Development
//     </h3>
//     <p className="text-stone-600 text-sm">
//       Developing mobile applications using Flutter and Dart.
//     </p>
//   </div>

//   <div className="bg-white rounded-[1.5rem] p-8 shadow-sm">
//     <h3 className="text-xl font-semibold mb-2">
//       UI/UX Design
//     </h3>
//     <p className="text-stone-600 text-sm">
//       Designing intuitive interfaces, wireframes, and prototypes.
//     </p>
//   </div>

// </div>
//       </section>

//       {/* Projects */}
//       <section id="projects" className="px-8 md:px-20 py-20 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold mb-4">Featured Projects</h2>
//             <p className="text-gray-500 text-lg">
//                A collection of projects showcasing my experience in development, design, and problem-solving.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {projects.map((project) => (
//               <div
//                 key={project.title}
//                 className="bg-[#fafafa] rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col h-full"
//               >
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="h-48 w-full object-cover"
//                 />

//                 <div className="p-5 flex flex-col flex-1">

//                   <h3 className="text-xl font-bold mb-2">
//                     {project.title}
//                   </h3>

//                   <p className="text-gray-600 leading-relaxed mb-4">
//                     {project.description}
//                   </p>

//                   {/* pushes everything below to bottom */}
//                   <div className="mt-auto">

//                     <p className="text-sm text-amber-800 font-medium mb-4">
//                       {project.tools}
//                     </p>

//                     <div className="flex gap-3">
//                       <a
//   href={project.designLink}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="flex-1 bg-amber-800 hover:bg-amber-900 text-white py-3 rounded-2xl transition text-center"
// >
//   View Design
// </a>

// <a
//   href={project.link}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="flex-1 border border-gray-200 hover:border-amber-700 hover:text-amber-900 py-3 rounded-2xl transition bg-white text-center"
// >
//   GitHub
// </a>
//                     </div>

//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact */}
//       <section id="contact" className="px-8 md:px-20 py-24 bg-[#FBF8F4]">
//         <div className="max-w-5xl mx-auto bg-amber-900 rounded-[3rem] p-14 text-center text-white shadow-2xl">
//           <h2 className="text-5xl font-bold mb-6">Let’s Work Together</h2>

//           <p className="text-amber-100 text-lg mb-10 max-w-2xl mx-auto">
//            I’m currently open to entry-level opportunities in software development, frontend development, backend development, mobile development, and UI/UX design.
//           </p>

//           <div className="flex flex-col md:flex-row gap-5 justify-center">
//               <a
//                 href="mailto:kianamariedizon@gmail.com"
//                 className="bg-white text-amber-800 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition inline-block"
//               >
//                 Send Email
//               </a>
           

//             <button
//               onClick={openLinkedIn}
//               className="border border-white/40 px-8 py-4 rounded-2xl hover:bg-white hover:text-amber-800 transition"
//             >
//               LinkedIn Profile
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Modal */}
//       {selectedProject && (
//         <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6">
//           <div className="bg-white rounded-[2rem] max-w-5xl w-full max-h-[90vh] overflow-y-auto p-8 relative">
//             <button
//               onClick={() => setSelectedProject(null)}
//               className="absolute top-6 right-6 text-3xl font-bold text-gray-500 hover:text-black"
//             >
//               ×
//             </button>

//             <h2 className="text-4xl font-bold mb-3">
//               {selectedProject.title}
//             </h2>

//             <p className="text-gray-600 mb-8 text-lg">
//               {selectedProject.description}
//             </p>

//             <div className="grid md:grid-cols-2 gap-6">
//               {selectedProject.gallery.map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt="Project UI"
//                   className="rounded-xl shadow-lg w-full h-80 object-cover"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import profilePic from './assets/profile.jpg'
import javaGame from './assets/Java-game.png'
import medGame from './assets/Med-game.png'
import pos from './assets/pos.png'
import caresync from './assets/caresync.png'

export default function PortfolioWebsite() {

  const projects = [
    {
      title: 'CareSync',
      category: 'Mobile Application',
      description:
        'A mobile health management application designed to help users organize health records, medications, observations, and reminders.',
      tools: 'Flutter • Dart • Figma',
      image: caresync,
      designLink:
        'https://www.figma.com/design/RMTynVQtDq40L63rDwNkXP/SYSAND?t=w3qO7Z8iWYamu6Nd-1',
      link: 'https://github.com/K-mariedizon/Mobile-Health-Application',
    },
    {
      title: 'Laundry POS System',
      category: 'Desktop Application',
      description:
        'A desktop point-of-sale system designed to manage laundry transactions, customer information, and records.',
      tools: 'VB.NET • MS Access • Figma',
      image: pos,
      designLink:
        'https://www.figma.com/design/B4nooao6sXYSeBlh6bur47/.NET?node-id=0-1&t=gsB1nmKl2h3LR4qj-1',
      link: 'https://github.com/K-mariedizon/POS-System',
    },
    {
      title: 'Medtech Reviewer System',
      category: 'Desktop Application',
      description:
        'An interactive reviewer system developed for Medical Technology students with questions, educational activities, and database-driven content.',
      tools: 'VB.NET • MS Access • Windows Forms',
      image: medGame,
      designLink: 'https://canva.link/wmwbqfl9mhqtbof',
      link: 'https://github.com/K-mariedizon/MedTech-Reviewer-System',
    },
    {
      title: 'Room Discovery Game',
      category: 'Desktop Game',
      description:
        'An interactive Java game where players explore a room, discover hidden objects, and solve mathematical questions and riddles.',
      tools: 'Java • WindowBuilder • Java Swing',
      image: javaGame,
      designLink: 'https://canva.link/zpvi6bu92mgtry6',
      link: 'https://github.com/K-mariedizon/JavaGame',
    },
  ]

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({
      behavior: 'smooth',
    })
  }

  const openResume = () => {
    window.open('/resume.pdf', '_blank')
  }

  const openLinkedIn = () => {
    window.open(
      'https://www.linkedin.com/in/kiana-marie-dizon',
      '_blank'
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-stone-900 font-sans">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#F8F6F2]/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">

          <a
            href="#home"
            className="text-xl font-bold tracking-tight text-amber-900"
          >
            KD.
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-stone-600">
            <a
              href="#about"
              className="hover:text-amber-900 transition"
            >
              About
            </a>

            <a
              href="#skills"
              className="hover:text-amber-900 transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="hover:text-amber-900 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-amber-900 transition"
            >
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center border border-stone-300 px-5 py-2.5 rounded-full text-sm hover:bg-amber-900 hover:text-white hover:border-amber-900 transition"
          >
            Let's Talk
          </a>

        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section
        id="home"
        className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

          {/* Text */}
          <div>

            <p className="text-sm tracking-[0.25em] uppercase text-stone-500 mb-6">
              Developer • UI/UX Designer
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.04em] leading-[0.95] mb-8">
              Building ideas
              <br />
              <span className="text-amber-900">
                into experiences.
              </span>
            </h1>

            <p className="max-w-xl text-lg md:text-xl text-stone-600 leading-relaxed mb-10">
              Hi, I'm Kiana Dizon — an aspiring software developer
              and UI/UX designer passionate about creating functional,
              user-friendly, and visually engaging digital experiences.
            </p>

            <div className="flex flex-wrap gap-4">

              <button
                onClick={scrollToProjects}
                className="group bg-amber-900 text-white px-7 py-4 rounded-full hover:bg-amber-950 transition inline-flex items-center gap-3"
              >
                View My Work
                <span className="group-hover:translate-x-1 transition">
                  →
                </span>
              </button>

              <button
                onClick={openResume}
                className="px-7 py-4 rounded-full border border-stone-300 hover:border-amber-900 hover:text-amber-900 transition"
              >
                View Resume
              </button>

            </div>

          </div>


          {/* Profile Image */}
          <div className="relative">

            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#E8D8C4] rounded-full -z-10" />

            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#E8D8C4] rounded-full -z-10" />

            <div className="bg-[#EDE7DF] p-4 md:p-5 rounded-[2rem]">

              <img
                src={profilePic}
                alt="Kiana Dizon"
                className="w-full h-[500px] md:h-[600px] object-cover rounded-[1.5rem]"
              />

            </div>

          </div>

        </div>
      </section>


      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="px-6 md:px-12 py-24 md:py-32 bg-white border-y border-stone-100"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-stone-400 mb-4">
              About Me
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              A mix of creativity,
              <br />
              logic & technology.
            </h2>
          </div>

          <div>
            <p className="text-lg text-stone-600 leading-relaxed mb-6">
              I recently graduated with a degree in BS Applied Mathematics –
              Information Technology Track. I enjoy combining programming,
              problem-solving, and design to build functional and
              user-friendly digital experiences.
            </p>

            <p className="text-lg text-stone-600 leading-relaxed">
              My experience includes web and mobile development,
              desktop applications, databases, and UI/UX design.
              I'm open to exploring different entry-level opportunities
              where I can continue learning and contribute to meaningful
              projects.
            </p>
          </div>

        </div>
      </section>


      {/* ================= TECHNOLOGIES ================= */}
      <section className="px-6 md:px-12 py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto">

          <div className="mb-14">
            <p className="text-sm uppercase tracking-[0.25em] text-stone-400 mb-4">
              Technologies & Tools
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              What I work with.
            </h2>
          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-stone-300">

            <div className="py-8 pr-8 border-b sm:border-r lg:border-b-0 border-stone-300">
              <p className="text-sm text-stone-400 mb-4">
                01
              </p>

              <h3 className="text-xl font-semibold mb-4">
                Development
              </h3>

              <p className="text-stone-600 leading-relaxed">
                Java • VB.NET • Flutter • Dart • Python • JavaScript
              </p>
            </div>


            <div className="py-8 lg:px-8 sm:pl-8 border-b lg:border-b-0 lg:border-r border-stone-300">
              <p className="text-sm text-stone-400 mb-4">
                02
              </p>

              <h3 className="text-xl font-semibold mb-4">
                Web
              </h3>

              <p className="text-stone-600 leading-relaxed">
                HTML • CSS • PHP • React • JavaScript
              </p>
            </div>


            <div className="py-8 pr-8 sm:pr-8 lg:px-8 border-b sm:border-b-0 sm:border-r lg:border-r border-stone-300">
              <p className="text-sm text-stone-400 mb-4">
                03
              </p>

              <h3 className="text-xl font-semibold mb-4">
                Database
              </h3>

              <p className="text-stone-600 leading-relaxed">
                Microsoft Access • SQL
              </p>
            </div>


            <div className="py-8 lg:pl-8 sm:pl-8">
              <p className="text-sm text-stone-400 mb-4">
                04
              </p>

              <h3 className="text-xl font-semibold mb-4">
                Design
              </h3>

              <p className="text-stone-600 leading-relaxed">
                Figma • Canva
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= SKILLS ================= */}
      <section
        id="skills"
        className="px-6 md:px-12 py-24 md:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto">

          <div className="mb-14">
            <p className="text-sm uppercase tracking-[0.25em] text-stone-400 mb-4">
              Capabilities
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              What I can do.
            </h2>
          </div>


          <div className="grid md:grid-cols-2 border-t border-stone-200">

            <div className="py-10 md:pr-12 md:border-r border-stone-200 border-b">
              <span className="text-sm text-stone-400">
                01
              </span>

              <h3 className="text-2xl font-semibold mt-3 mb-3">
                Frontend Development
              </h3>

              <p className="text-stone-600 leading-relaxed">
                Building responsive and interactive interfaces
                for web and application experiences.
              </p>
            </div>


            <div className="py-10 md:pl-12 border-b border-stone-200">
              <span className="text-sm text-stone-400">
                02
              </span>

              <h3 className="text-2xl font-semibold mt-3 mb-3">
                Backend & Database
              </h3>

              <p className="text-stone-600 leading-relaxed">
                Developing application logic and working with
                databases and structured data.
              </p>
            </div>


            <div className="py-10 md:pr-12 md:border-r border-stone-200 border-b md:border-b-0">
              <span className="text-sm text-stone-400">
                03
              </span>

              <h3 className="text-2xl font-semibold mt-3 mb-3">
                Mobile Development
              </h3>

              <p className="text-stone-600 leading-relaxed">
                Developing mobile applications using Flutter
                and Dart with a focus on usability.
              </p>
            </div>


            <div className="py-10 md:pl-12">
              <span className="text-sm text-stone-400">
                04
              </span>

              <h3 className="text-2xl font-semibold mt-3 mb-3">
                UI/UX Design
              </h3>

              <p className="text-stone-600 leading-relaxed">
                Designing intuitive interfaces, layouts,
                wireframes, and prototypes.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= PROJECTS ================= */}
      {/* Projects */}
<section id="projects" className="py-24 px-6 md:px-12 lg:px-20 bg-[#F8FAFC]">
  <div className="max-w-7xl mx-auto">

    {/* Section Header */}
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
      <div>
        <p className="text-sm tracking-[0.3em] uppercase text-blue-600 mb-4">
          Selected Work
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-slate-900">
          Featured Projects
        </h2>
      </div>

      <p className="max-w-md text-slate-600 leading-relaxed">
        A collection of projects showcasing my experience across
        development, design, databases, and problem-solving.
      </p>
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      {projects.map((project, index) => (
        <article
          key={project.title}
          className="group border border-slate-200 bg-white rounded-2xl overflow-hidden
                     transition-all duration-300 hover:border-blue-300
                     hover:shadow-xl hover:shadow-slate-200/50"
        >

          {/* Project Image */}
          <div className="p-4 md:p-5">
            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[280px] md:h-[330px] object-cover
                           transition-transform duration-500
                           group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="mx-5 border-t border-slate-200"></div>

          {/* Project Information */}
          <div className="p-6 md:p-7">

            {/* Category + Number */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-blue-600">
                {index === 0
                  ? "Desktop Application"
                  : index === 1
                  ? "Desktop Application"
                  : index === 2
                  ? "Desktop Application"
                  : "Mobile Application"}
              </span>

              <span className="text-sm text-slate-400 font-mono">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-slate-600 leading-relaxed mb-5 max-w-xl">
              {project.description}
            </p>

            {/* Tools */}
            <div className="flex flex-wrap gap-2 mb-7">
              {project.tools.split(" • ").map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 text-xs font-medium
                             text-slate-600 bg-slate-100
                             border border-slate-200 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Bottom Divider */}
            <div className="border-t border-slate-200 pt-5 flex items-center justify-between">

              <a
                href={project.designLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-900
                           hover:text-blue-600 transition-colors"
              >
                View Design
                <span className="ml-2">↗</span>
              </a>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-500
                           hover:text-slate-900 transition-colors"
              >
                GitHub
                <span className="ml-2">↗</span>
              </a>

            </div>
          </div>
        </article>
      ))}

    </div>
  </div>
</section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="px-6 md:px-12 py-24 md:py-32 bg-amber-900 text-white"
      >
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-sm uppercase tracking-[0.25em] text-amber-200 mb-5">
            Get in touch
          </p>

          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8">
            Let's build something
            <br />
            meaningful.
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-amber-100 leading-relaxed mb-10">
            I'm currently open to entry-level opportunities in software
            development, frontend development, backend development,
            mobile development, and UI/UX design.
          </p>


          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="mailto:kianamariedizon@gmail.com"
              className="bg-white text-amber-900 px-7 py-4 rounded-full font-medium hover:scale-105 transition"
            >
              Send Email
            </a>

            <button
              onClick={openLinkedIn}
              className="border border-amber-200/40 px-7 py-4 rounded-full hover:bg-white hover:text-amber-900 transition"
            >
              LinkedIn ↗
            </button>

          </div>

        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-amber-900 text-amber-100 px-6 md:px-12 pb-8">

        <div className="max-w-7xl mx-auto border-t border-amber-700/50 pt-8 flex flex-col md:flex-row justify-between gap-4 text-sm">

          <p>
            © 2026 Kiana Dizon
          </p>

          <p>
            Developer • UI/UX Designer
          </p>

        </div>

      </footer>

    </div>
  )
}