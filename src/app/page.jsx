 
 "use client"
import 'typeface-poppins';
import "./font.css";
import Headefordesktop from './component/Headfordesktop';
 
import Secend from './component/Secend';
 import Third from './component/Third'
import Skills from './component/Skills';
import Expe from './component/Expe';
import Projects from './component/Projects';

import s, { projects } from './data/projects'
import Contact from './component/Contact';
export default function Home() {
  

  return (
    <main className="" style={{ position: 'relative' }}>
        <Headefordesktop /> 
      <Secend/>
      <Third/>
      <Skills/> 
      <Expe/>

<div className='text-center font-bold mt-60 text-6xl mb-20 ' style={{color:'rgb(245, 101, 57)'}}> projects  </div>
      <div>
      <div className='flex items-center w-full gap-20 justify-center  xs:flex-col  xl:flex-row lg:flex-row md:flex-col x  sm:flex-col   xxl:flex-row pr:flex-row'>

      {projects.map( (props)=>{
      return   <Projects key={props.img} {...props} />
      })}
        </div>
    </div>
    <Contact/>
    </main>
  );
}
