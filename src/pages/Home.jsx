// Create a component function called Home that returns a fragment block of html with a single h1
// The text of the h1 says 'Home'

import React from 'react';

const projects = [
  {
    title: 'JSQuiz',
    image: 'public/jsquizapp.png',
    deployedLink: 'https://dann9109.github.io/jsquiz/',
    githubLink: 'https://github.com/dann9109/jsquiz',
  },
  {
    title: 'Weather Dashboard App',
    image: 'public/weather.jpg',
    deployedLink: 'https://dann9109.github.io/weatherdashboard/',
    githubLink: 'https://github.com/dann9109/weatherdashboard',
  },
  {
    title: 'JSpassword Generator',
    image: 'public/passwordgenerator.png',
    deployedLink: 'https://example.com/project2',
    githubLink: 'https://github.com/dann9109/jspasswordgenerator',
  },
  {
    title: 'Flavor Hub',
    image: 'public/flavorhub.png',
    deployedLink: 'https://infinite-journey-57628-3f2779f996f7.herokuapp.com/',
    githubLink: 'https://github.com/magellanrose/Recipe_Book_Project',
  },
  // Add more projects as needed
];

const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <img src={image} alt={title} className="project-image" />
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