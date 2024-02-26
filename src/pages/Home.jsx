// Create a component function called Home that returns a fragment block of html with a single h1
// The text of the h1 says 'Home'

import React from 'react';

const projects = [
  {
    title: 'JSQuiz',
    image: '/jsquizapp.png',
    deployedLink: 'https://dann9109.github.io/jsquiz/',
    githubLink: 'https://github.com/dann9109/jsquiz',
  },
  {
    title: 'Weather Dashboard App',
    image: '/weather.jpg',
    deployedLink: 'https://dann9109.github.io/weatherdashboard/',
    githubLink: 'https://github.com/dann9109/weatherdashboard',
  },
  {
    title: 'JSpassword Generator',
    image: '/passwordgenerator.png',
    deployedLink: 'https://example.com/project2',
    githubLink: 'https://github.com/dann9109/jspasswordgenerator',
  },
  {
    title: 'Flavor Hub',
    image: '/flavorhub.png',
    deployedLink: 'https://infinite-journey-57628-3f2779f996f7.herokuapp.com/',
    githubLink: 'https://github.com/magellanrose/Recipe_Book_Project',
  },
  // Add more projects as needed
];

const Project = ({ title, image, deployedLink, githubLink }) => {
  const navigateToLink = (url) => {
    window.location.href = url; // This changes the current window location to the new URL
  };

  return (
    <div className="project-card">
      <h2>{title}</h2>
      <img src={image} alt={title} className="project-image" />
      <p>
        <button href={deployedLink} className="resume-btn" onClick={() => navigateToLink(deployedLink)}>Deployed Link</button>
      </p>
      <p>
        <button href={githubLink} className="resume-btn" onClick={() => navigateToLink(githubLink)}>GitHub Repository</button>
      </p>
    </div>
  );
};

function Home() {
  return (
    <div>
      <h1 className="text-center">Portfolio</h1>
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