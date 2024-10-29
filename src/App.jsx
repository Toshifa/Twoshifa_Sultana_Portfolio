import { ReactLenis, useLenis } from 'lenis/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/** Resigter gsap plugins **/

gsap.registerPlugin(useGSAP, ScrollTrigger);

import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Experience from './components/Experience';

const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Skills',
    link: '#skills'
  },
  {
    label: 'Experience',
    href: '#experience'
  },
  {
    label: 'Projects',
    href: '#projects'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://www.github.com/codewithsadee-org'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/codewithsadee'
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/codewithsadee_'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/codewithsadee'
  },
  {
    label: 'CodePen',
    href: 'https://codepen.io/codewithsadee'
  }
];

const App = () => {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach((element)=> {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    });
  });

  return (
    <ReactLenis root>
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
      </main>

      <Footer/>
    </ReactLenis>
  )
}

export default App
