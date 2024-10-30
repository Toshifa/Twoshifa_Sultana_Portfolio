// import { ReactLenis, useLenis } from 'lenis/react'
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from '@gsap/react';

// /** Resigter gsap plugins **/

// gsap.registerPlugin(useGSAP, ScrollTrigger);


import React from 'react'
import ExperienceCard from './ExperienceCard';

const experience = [
  {
    content: '"Develop and maintain dynamic, responsive web applications using Next.js, React.js, HTML5, CSS3, Tailwind CSS, and Bootstrap. Utilize TypeScript and JavaScript to create robust user interfaces, ensuring high performance and seamless user experiences. Collaborate with cross-functional teams to deliver high-quality code and adopt best practices in web development.',
    name: 'Unified Mentor',
    imgSrc: '/images/unified1.jpg',
    company: 'Web Developer Intern',
    year: 'Oct 2024 - Present',
    skills: 'SKILLS :  Next.js · React.js · HTML5 · CSS3 · Tailwind CSS · Bootstrap (Framework) · TypeScript · JavaScript'
  },
  {
    content: 'Led the development of a scalable educational platform using React and TypeScript, achieving a 25% reduction in load time. Implemented dynamic, reusable UI components with Material-UI and Tailwind CSS, improving design consistency across platforms. Conducted code reviews and optimized application performance, leading to a 15% reduction in bug reports.',
    name: 'Moaisus Global Solutions',
    imgSrc: '/images/moaisus_logo.jpeg',
    company: 'Frontend Developer Intern',
    year: 'Feb 2024 - September 2024',
    skills: 'SKILLS : Material-UI · Tailwind CSS · React.js · Next.js · HTML5 · CSS3 · Bootstrap · TypeScript · JavaScript · Figma · Adobe XD'
  },
  {
    content: 'Worked with cross-functional teams to design and develop web applications using the MERN stack. Created responsive user interfaces with React.js and built scalable APIs with Node.js, Express.js, and MongoDB.  Engaged in the full software development lifecycle, including planning, testing, deployment, and code reviews.',
    name: 'Edureka',
    imgSrc: '/images/edureka.jpg',
    company: 'Fullstack Web Developer Intern',
    year: 'Oct 2023 - March 2024',
    skills: 'SKILLS : Bootstrap (Framework) · CSS 3 · React.js · JavaScript · Node.js · MongoDB · HTML5 · Redux.js · GitHub · Express.js'
  },
  // {
  //   content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
  //   name: 'Noah Williams',
  //   imgSrc: '/images/people-4.jpg',
  //   company: 'BrightWeb'
  // },
  // {
  //   content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
  //   name: 'Ava Thompson',
  //   imgSrc: '/images/people-5.jpg',
  //   company: 'TechMosaic'
  // },
  // {
  //   content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
  //   name: 'Jonathan',
  //   imgSrc: '/images/people-6.jpg',
  //   company: 'Skyline Digital'
  // }
];

const Experience = () => {

  // useGSAP(()=> {
  //   gsap.to('.scrub-slide', {
  //     scrollTrigger: {
  //       trigger: ".scrub-slide",
  //       start: "-200% 80%",
  //       end: "400% 80%",
  //       scrub: true,
  //     },
  //     x: '-1000'
  //   })
  // });

  return (
    <section
      id="experience"
      className="section overflow-hidden"
    >
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          Work experience as a software developer
        </h2>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {experience.map(({content, name, imgSrc, company, year,skills}, key)=> (
            <ExperienceCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
              year={year}
              skills={skills}
            />
          ))}    
        </div>
      </div>
    </section>
  )
}

export default Experience