// src/components/TechStack.jsx
import React from 'react';

const stacks = [
  {
    name: 'MERN Stack',
    tools: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    color: 'from-green-400 via-blue-500 to-yellow-500',
  },
  {
    name: 'Frontend',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    color: 'from-pink-500 via-purple-500 to-indigo-500',
  },
  {
    name: 'Backend',
    tools: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
    color: 'from-orange-400 via-red-500 to-pink-500',
  },
];

const TechStack = () => {
  return (
    <section id="techstack" className="px-6 py-20 bg-[#121212] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-orange-500 font-semibold mb-2">How I Build</p>
        <h2 className="text-4xl font-bold mb-6">
          My <span className="text-orange-500">Tech Stacks</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          These are the tech stacks I use in most of my projects.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {stacks.map((stack, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl bg-gradient-to-r ${stack.color} text-black shadow-lg`}
            >
              <h3 className="text-xl font-bold mb-2">{stack.name}</h3>
              <ul className="list-disc list-inside text-sm">
                {stack.tools.map((tool, idx) => (
                  <li key={idx}>{tool}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
