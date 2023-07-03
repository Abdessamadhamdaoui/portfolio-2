'use client'
import React from 'react'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
export default function Expe() {



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
    <div className='box-container xl:p-20 2xl:p-20 lg:p-20 md:p-20 sm-p-0 xs:p-0'>

<div>
  <h1 style={{ color: 'rgb(245, 101, 57)' }} className='mb-40 text-4xl font- bold   text-center'>education </h1>
</div>
 
{isMobile? (<div>  < div style={{ backgroundColor: '#f565394d' }} className='box   h-40  hover:bg-amber-600 pt-5 w-screen  rounded-2xl  '
       
     
       
       >
         <div className='flex'>
         <div className=' '>
        <div style={{backgroundColor: 'rgb(245, 101, 57)' }} className=' h-16 w-16 rounded-full  p-2 ml-5     '  >   <img className='h-10 w-12 ' src='https://cdn.discordapp.com/attachments/981974880054575124/1123262191181770762/eduImgWhite.ae822784.png' alt='Image' /></div>
        <h2 className='text-orange-600 ml-5'> 1year </h2></div>
         
<div>
 <p className='text-white  text-xl font-bold mt-8 ml-5 '> marketer and community manager  </p>
 <p className='text-gray-200  text-lg font-bold   ml-5'>  at Metararity  </p>
</div></div>



       </ div>
       < div style={{ backgroundColor: '#f565394d' }} className='box mt-12  h-40  hover:bg-amber-600 pt-5 w-screen  rounded-2xl  '
       
     
       
       >
         <div className='flex'>
         <div className=' '>
        <div style={{backgroundColor: 'rgb(245, 101, 57)' }} className=' h-16 w-16 rounded-full  p-2 ml-5     '  >   <img className='h-10 w-12 ' src='https://cdn.discordapp.com/attachments/981974880054575124/1123262191181770762/eduImgWhite.ae822784.png' alt='Image' /></div>
        <h2 className='text-orange-600 ml-5'> 8 mounth </h2></div>
         
<div>
<p className='text-white  text-xl font-bold mt-8 ml-5 '> front end developer </p>
<p className='text-gray-200  text-lg font-bold   ml-5'> at etawakol </p>
</div></div>



       </ div>
       < div style={{ backgroundColor: '#f565394d' }} className='box mt-12  h-40  hover:bg-amber-600 pt-5 w-screen  rounded-2xl  '
       
     
       
       >
         <div className='flex'>
         <div className=' '>
        <div style={{backgroundColor: 'rgb(245, 101, 57)' }} className=' h-16 w-16 rounded-full  p-2 ml-5     '  >   <img className='h-10 w-12 ' src='https://cdn.discordapp.com/attachments/981974880054575124/1123262191181770762/eduImgWhite.ae822784.png' alt='Image' /></div>
        <h2 className='text-orange-600 ml-5'>  4 mounth </h2></div>
         
<div>
<p className='text-white  text-xl font-bold mt-8 ml-5 '> full stack developer  </p>
<p className='text-gray-200  text-lg font-bold    ml-5'>   at epg </p>
</div></div>



       </ div>
       </div> ) : (<div className='flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col  '>  <motion.div
      initial={{ opacity: 0  , x:-500}}
      whileInView={{ opacity: 1,
       x:0
      
      }}
      
      transition={{
          
          stiffness:6,
          
      }}
      
      
      
      style={{ backgroundImage: "url('https://ouch-cdn2.icons8.com/eCEhEOL-mnjqL_s28qgGMXwBJ79woUY8-4RpoSdc_0k/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODIy/Lzc3M2E0M2RlLWI5/OWYtNGE0Mi1hNjBm/LWQ5Nzc2OTgyMDI1/ZC5zdmc.png')", 
      backgroundSize: ' cover ' ,}}  className='w-2/6    '> </motion.div>  <div className='w-4/6'>  <motion.div style={{ backgroundColor: '#f565394d' }} className='box w-60 h-40  hover:bg-amber-600 pt-5  rounded-2xl opacity-5 '
       
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1,
      x:250,
      width:800
      }}
      
      transition={{
          
          stiffness:6,
          
      }}
      
      >
        <div className='flex'>
        <div className=' '>
       <div style={{backgroundColor: 'rgb(245, 101, 57)' }} className=' h-16 w-16 rounded-full  p-2 ml-5     '  >   <img className='h-10 w-12 ' src='https://cdn.discordapp.com/attachments/981974880054575124/1123262191181770762/eduImgWhite.ae822784.png' alt='Image' /></div>
       <h2 className='text-orange-600 ml-5'> 2015/2019 </h2></div>
        
<div>
<p className='text-white  text-xl font-bold mt-8 ml-5 '> Middle School </p>
<p className='text-gray-200  text-lg font-bold   ml-5'> ibno albaytar </p>
</div></div>



      </motion.div>
      <motion.div style={{ backgroundColor: '#f565394d' }} className='box w-60 h-40  hover:bg-amber-600 pt-5 mt-20 rounded-2xl opacity-5 '
     
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1,
     x:250,
     width:800
     }}
     
     transition={{
         
         stiffness:6,
         
     }}
     
     >
       <div className='flex'>
       <div className=' '>
      <div style={{backgroundColor: 'rgb(245, 101, 57)' }} className=' h-16 w-16 rounded-full  p-2 ml-5     '  >   <img className='h-10 w-12 ' src='https://cdn.discordapp.com/attachments/981974880054575124/1123262191181770762/eduImgWhite.ae822784.png' alt='Image' /></div>
      <h2 className='text-orange-600 ml-5'> 2019/2021</h2></div>
       
<div>
<p className='text-white  text-xl font-bold mt-8 ml-5 '> Higher Secondary Education </p>
<p className='text-gray-200  text-lg font-bold   ml-5'> al khawarizmi </p>
</div></div>
     </motion.div>
     <motion.div style={{ backgroundColor: '#f565394d' }} className='box w-60 h-40  hover:bg-amber-600 pt-5 mt-20 rounded-2xl opacity-5 '
     
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1,
     x:250,
     width:800
     }}
     
     transition={{
         
         stiffness:6,
         
     }}
     
     >
       <div className='flex'>
       <div className=' '>
      <div style={{backgroundColor: 'rgb(245, 101, 57)' }} className=' h-16 w-16 rounded-full  p-2 ml-5     '  >   <img className='h-10 w-12 ' src='https://cdn.discordapp.com/attachments/981974880054575124/1123262191181770762/eduImgWhite.ae822784.png' alt='Image' /></div>
      <h2 className='text-orange-600 ml-5'> 2021/2023</h2></div>
       
<div>
<p className='text-white  text-xl font-bold mt-8 ml-5 '>  cloud computing  </p>
<p className='text-gray-200  text-lg font-bold    ml-5'> at ofppt el adarissa  </p>
</div></div>
     </motion.div> </div> </div>)}
        
      
    </div>
  )
}
