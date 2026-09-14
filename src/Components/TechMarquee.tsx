import React from 'react';

const technologies = [
  "REACT.JS", "NEXT.JS", "TYPESCRIPT", "NODE.JS", 
  "POSTGRESQL", "PYTHON", "TAILWIND CSS", "SOLIDITY",
  "GO", "GRAPHQL", "DOCKER", "AWS", "SUPABASE", "REDIS"
];

const TechMarquee: React.FC = () => {
  return (
    <div className="bg-brand py-8 overflow-hidden border-y-4 border-black relative flex w-full">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="font-display text-5xl sm:text-6xl lg:text-7xl text-black uppercase mx-8 select-none tracking-tighter"
          >
            {tech} <span className="text-white opacity-50 mx-4 font-sans text-3xl">✦</span>
          </span>
        ))}
      </div>
      <div className="animate-marquee whitespace-nowrap flex items-center absolute top-8" aria-hidden="true">
        {technologies.map((tech, index) => (
          <span
            key={`dup-${index}`}
            className="font-display text-5xl sm:text-6xl lg:text-7xl text-black uppercase mx-8 select-none tracking-tighter"
          >
            {tech} <span className="text-white opacity-50 mx-4 font-sans text-3xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
