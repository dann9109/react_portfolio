// Create a component function called Home that returns a fragment block of html with a single h1
// The text of the h1 says 'Home'

import React from 'react';

const projects = [
  {
    title: 'Project 1',
    image: 'project1.png',
    deployedLink: 'https://example.com/project1',
    githubLink: 'https://github.com/example/project1',
  },
  {
    title: 'Project 2',
    image: 'project2.png',
    deployedLink: 'https://example.com/project2',
    githubLink: 'https://github.com/example/project2',
  },
  {
    title: 'Project 3',
    image: 'project2.png',
    deployedLink: 'https://example.com/project2',
    githubLink: 'https://github.com/example/project2',
  },
  {
    title: 'Project 4',
    image: 'project2.png',
    deployedLink: 'https://example.com/project2',
    githubLink: 'https://github.com/example/project2',
  },
  // Add more projects as needed
];

const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>
        <a href={deployedLink}>Deployed Link</a>
      </p>
      <p>
        <a href={githubLink}>GitHub Repository</a>
      </p>
    </div>
  );
};

function Home() {
  return (
    <div>
      <h1 className="text-center">Home</h1>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          image={project.image}
          deployedLink={project.deployedLink}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
}

export default Home
// module.exports = Home