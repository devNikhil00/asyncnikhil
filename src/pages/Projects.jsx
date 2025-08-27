// src/components/Projects.jsx
import React from 'react';
import '../components/Projects.css'; // Import custom styles

const projects = [
  {
    title: 'Student Management System',
    desc: 'Manage student data with add, update, delete features using MERN stack.',
    icon: '🎓',
    link: '#',
  },
  {
    title: 'ClipSavior Downloader',
    desc: 'Download YouTube videos and Instagram reels with Node.js backend.',
    icon: '📥',
    link: '#',
  },
  {
    title: 'Notes App',
    desc: 'Create, edit and delete notes with a beautiful UI and MongoDB backend.',
    icon: '📝',
    link: '#',
  },
  {
    title: 'Rock Paper Scissors',
    desc: 'A fun game with score tracking built using HTML, CSS, JS.',
    icon: '✊✋✌️',
    link: '#',
  },
  {
    title: 'Music Player',
    desc: 'A stylish music player with playlist support and audio visualization.',
    icon: '🎵',
    link: '#',
  },
  {
    title: 'Web3 Aggregator',
    desc: 'Showcase dApps, wallets and NFTs using React and Web3.js.',
    icon: '🌐',
    link: '#',
  },
  {
    title: 'Social Media App',
    desc: 'Full-featured auth, post, comment, like system using MERN stack.',
    icon: '💬',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-20 bg-gradient-to-br from-black via-[#0a0f1c] to-[#0f0f0f] text-white relative  ">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <p className="text-sm text-orange-500 font-semibold mb-2">My Work</p>
        <h2 className="text-4xl font-bold mb-6">
          Highlighted <span className="text-orange-500">Projects</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Some projects that reflect my skills in full-stack development with React, Node.js, MongoDB, and more.
        </p>

        {/* Scrollable cards container with fading edges */}
        <div className="relative overflow-hidden">
          <div
            className="overflow-x-auto flex gap-6 px-2 py-1 scroll-smooth hide-scrollbar fade-edges"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="min-w-[300px] max-w-sm bg-transparent p-6 rounded-2xl shadow-lg bg-shadow-md hover:shadow-[0_0_10px_#1e90ff80] transition-shadow duration-500 border border-[#1e90ff30] hover:border-[#1e9aff  flex-shrink-0"
              >
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.desc}</p>
                <a
                  href={project.link}
                  className="text-orange-500 hover:underline font-medium"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
