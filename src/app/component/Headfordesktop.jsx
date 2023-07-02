import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import 'typeface-poppins';
import Link from 'next/link';
export default function Headfordesktop() {
  return (
    <div>
         <div className='fpage w-screen h-screen flex'>
          
 
         <div className="w-2/6" style={{ backgroundColor: 'rgb(245, 101, 57)' }}> 

       <h1 style={{fontFamily: 'Pacifico, cursive'  }} className="text-black p-9 font-serif text-2xl">hamdaoui</h1>
       <div className="  h-20 w-full mt-[880px] flex gap-9  px-16"> 
    
       <FontAwesomeIcon icon={faGithub} className='h-9 hover:h-12 ' />
       <FontAwesomeIcon icon={faLinkedin} className='h-9 hover:h-12 ' />
       <FontAwesomeIcon icon={faTwitter} className='h-9 hover:h-12 ' />
       </div>
 
          </div>
           <div className=' text-white    p-96  w-4/6 h-screen '>
           <div className='h-20 w-[200px]   xl:w-96  xl:mr-10 '>
                 <h2 className='text-xl font-semibold  '>web developer</h2>
                 <h1 className='text-4xl font-bold mt-4'>Hamdaoui</h1>
                 <p className='mt-4 font-light text-gray-300 text-2xl '> There wasn't a bird in the sky, but that was not what caught her attention. It was the clouds. The deep green that isn't the color of clouds, but came with these. She knew what was coming and she hoped she was prepared.</p>
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
          
          
          style={{ backgroundImage: "url('https://cdn.discordapp.com/attachments/796024617835036693/1122166009130926080/IMG-20220705-WA0033.jpg')", backgroundSize: 'cover', borderRadius: '50%', position: 'absolute', top: '400px', left: '25%', width: '320px', height: '320px' }} ></motion.div>
 
    </div>
  )
}
