import React from 'react'
import SkillCard from './SkillCard';

const skillItem = [
    {
      imgSrc: '/images/react.svg',
      label: 'React.Js',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/nextjs-icon.svg',
      label: 'Next.Js',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/html5.png',
      label: 'HTML5',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/typescript.svg',
      label: 'TypeScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'CSS Framework'
    },
    {
      imgSrc: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
      label: 'Bootstrap',
      desc: 'CSS Framework'
    },
    {
      imgSrc: '/images/material-ui.svg',
      label: 'Material UI',
      desc: 'CSS Framework'
    },
    {
      imgSrc: '/images/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: '/images/adobe-xd.svg',
      label: 'Adobe XD',
      desc: 'Design tool'
    },
    {
      imgSrc: '/images/webflow.svg',
      label: 'Webflow',
      desc: 'Design tool'
    },
    {
      imgSrc: '/images/vs-code.svg',
      label: 'VS Code',
      desc: 'IDE'
    },
    {
      imgSrc: '/images/git.svg',
      label: 'Git',
      desc: 'Version Control'
    },
    {
      imgSrc: '/images/github.svg',
      label: 'GitHub',
      desc: 'Version Control'
    },
    {
      imgSrc: '/images/postman.svg',
      label: 'Postman',
      desc: 'API Testing Tool'
    },
    {
      imgSrc: '/images/swagger.svg',
      label: 'Swagger',
      desc: 'API Testing Tool'
    },
    {
      imgSrc: '/images/vercel.svg',
      label: 'Vercel',
      desc: 'Web Hosting'
    },
];

const Skills = () => {
    return (
      <section id="skills" className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">
                Essential Tools I use
            </h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {skillItem.map(({ imgSrc, label, desc }, key) => (                  
                    <SkillCard
                      key={key}
                      imgSrc={imgSrc}
                      label={label}
                      desc={desc}
                      classes={"reveal-up"}
                    />
                  ))
                  
                }
            </div>

        </div>
      </section>
    );
};
  

export default Skills