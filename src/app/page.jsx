"use client"
 
import 'typeface-poppins';
import "./font.css";
import Headefordesktop from './component/Headfordesktop';
import Headforphone from './component/Headforphone';
import { useEffect, useState } from 'react';
import Secend from './component/Secend';
 import Third from './component/Third'
import Skills from './component/Skills';
import Expe from './component/Expe';
import Projects from './component/Projects';

import s, { projects } from './data/projects'
import Contact from './component/Contact';
export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <=920);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="" style={{ position: 'relative' }}>
      {isMobile ? <Headforphone /> : <Headefordesktop />}
      <Secend/>
      <Third/>
      <Skills/> 
      <Expe/>

<div className='text-center font-bold mt-60 text-6xl mb-20 ' style={{color:'rgb(245, 101, 57)'}}> projects  </div>
      <div>
  <div className='flex items-center w-full gap-20   justify-center xl:flex-row lg:flex-row md:flex-col sm:flex-col overflow-hidden    xs:flex-col'>

      {projects.map( (props)=>{
      return   <Projects key={props.img} {...props} />
      })}
        </div>
    </div>
    <Contact/>
    </main>
  );
}
