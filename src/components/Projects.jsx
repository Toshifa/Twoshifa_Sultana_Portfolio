import React from 'react'
import  ProjectCard  from './ProjectCard';

const projects = [
    {
      imgSrc: '/images/Netflix.png',
      title: 'Netflix Clone app',
      tags: ['HTML', 'CSS3', 'Bootstrap'],
      projectLink: 'https://netflix-assignment-3.vercel.app/'
    },
    {
      imgSrc: '/images/project-3.png',
      title: 'EzyMetrics',
      tags: ['React JS', 'TypeScript','Tailwind CSS', 'Figma', 'Chart JS'],
      projectLink: 'https://ezymetrics-dashboard-eta.vercel.app/'
    },
    {
      imgSrc: '/images/project-4.png',
      title: 'E-schooling website',
      tags: ['React JS', 'JavaScript', 'Tailwind CSS' ],
      projectLink: 'https://echooling-website.vercel.app/'
    },
    {
      imgSrc: '/images/project-2.png',
      title: 'Disney Movie App',
      tags: ['React JS', 'TypeScript','Tailwind CSS', 'React Query' ],
      projectLink: 'https://disney-movie-app.vercel.app/'
    },
    {
      imgSrc: '/images/project-5.png',
      title: 'Recipe App',
      tags: ['HTML', 'CSS3', 'Bootstrap'],
      projectLink: 'https://recipe-app-h81e.vercel.app/'
    },
    {
      imgSrc: '/images/project-6.jpg',
      title: 'Binance Market Data',
      tags: ['React JS', 'TypeScript','Chart JS', 'Tailwind CSS', 'WebSocket API' ],
      projectLink: 'https://binance-market-data-lovat.vercel.app/'
    },
  ];

const Projects = () => {
  return (
    <section
        id="projects"
        className="section"
        >
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
            My portfolio highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {projects.map(({ imgSrc, title, tags, projectLink }, key) => (
                <ProjectCard
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                key={key}
                classes="reveal-up"
                />
            ))}
            </div>
        </div>
</section>

  )
}

export default Projects