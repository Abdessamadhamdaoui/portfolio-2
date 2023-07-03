import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import 'typeface-poppins';
import Link from 'next/link';
export default function Headfordesktop() {
  return (
    <div>
         <div className='fpage w-screen gap-80 xl:h-screen lg:h-screen md:h-screen sm:h-screen xs:h-screen pr:h-[1200px] flex'>
          
 
         <div className="w-2/6 h-full" style={{ backgroundColor: 'rgb(245, 101, 57)' }}> 

       <h1 style={{fontFamily: 'Pacifico, cursive'  }} className="text-black p-9 font-serif text-2xl">hamdaoui</h1>
       <div className="  h-20 w-full  mt-[700px] flex gap-9 ml-10 "> 
    
      <a href='https://github.com/Abdessamadhamdaoui'><FontAwesomeIcon icon={faGithub} className='h-9 hover:h-12 ' /></a> 
    
     <a href='https://twitter.com/metararity?t=RZGXgq0KTkAiUs2nZvA-7A&s=09'> <FontAwesomeIcon icon={faTwitter} className='h-9 hover:h-12 ' /></a> 
       </div>
 
          </div>
           <div className=' text-white  mt-80   w-4/6 h-screen '>
           <div className='h-20 pr:w-[300px] w-[400px]      xl:mr-10 '>
                 <h2 className='text-xl font-semibold  '>web developer</h2>
                 <h1 className='text-4xl font-bold mt-4'>Hamdaoui</h1>
                 <p className='mt-4 font-light text-gray-300 text-2xl '> Hello, I'm Abdessamad Hamdaoui, a talented Full Stack Developer with a strong passion for creating innovative web applications. Based in Morocco, Africa, I have honed my skills in frontend and backend development, making me proficient in delivering end-to-end solutions..</p>
                 <div className='flex mt-6 gap-12'>
                   <button className='h-16 w-40 border-2 text-orange-600 border-orange-600 rounded-full hover:bg-orange-600 text-xl hover:text-white transition duration-2000 '> <a download href="/abdessamads_Resume_5_230702_003121.pdf">download cv </a>     </button>
                   <button className='bg-orange-600 text-black h-16 w-40 rounded-full hover:bg-transparent hover:border-2 hover:border-white  hover:text-white text-xl'> <a href="#contact" >contact</a> </button>
 
                 </div>
           </div>
        
 
           </div>
         
 
          </div>
          <motion.div
            animate={{
            y:0,
              opacity:1,
              rotate:360
  
          }}
          initial={{
            y:-1000,
              opacity:0.1
          }}
          transition={{
              type:'spring',
              stiffness:40,
              
          }}
          
          className='xl:left-[25%] lg:left-[15%]  '
          style={{ backgroundImage: "url('https://cdn.discordapp.com/attachments/796024617835036693/1122166009130926080/IMG-20220705-WA0033.jpg')", backgroundSize: 'cover', borderRadius: '50%', position: 'absolute', top: '400px', width: '320px', height: '320px' }} ></motion.div>
 
    </div>
  )
}
