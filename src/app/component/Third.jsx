import React from 'react'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
export default function third() {



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
  <h1 style={{ color: 'rgb(245, 101, 57)' }} className=' mb-20 xl:ml-20  lg:ml-20 md:ml-20 sm:ml-20 xs:ml-0  text-6xl font-semibold   '> Education</h1>
</div>
 
{isMobile? (<div>  < div style={{ backgroundColor: '#f565394d' }} className='box   h-40  hover:bg-amber-600 pt-5 w-screen  rounded-2xl  '
       
     
       
       >
         <div className='flex'>
         <div className=' '>
        <div style={{backgroundColor: 'rgb(245, 101, 57)' }} className=' h-16 w-16 rounded-full  p-2 ml-5     '  >   <img className='h-10 w-12 ' src='https://cdn.discordapp.com/attachments/981974880054575124/1123262191181770762/eduImgWhite.ae822784.png' alt='Image' /></div>
        <h2 className='text-orange-600 ml-5'> 2016/2019</h2></div>
         
<div>
 <p className='text-white  text-xl font-bold mt-8 ml-5 '>Higher Secondary Education</p>
 <p className='text-gray-200  text-lg font-bold   ml-5'> bno lbaytar    </p>
</div></div>



       </ div>
       < div style={{ backgroundColor: '#f565394d' }} className='box mt-12  h-40  hover:bg-amber-600 pt-5 w-screen  rounded-2xl  '
       
     
       
       >
         <div className='flex'>
         <div className=' '>
        <div style={{backgroundColor: 'rgb(245, 101, 57)' }} className=' h-16 w-16 rounded-full  p-2 ml-5     '  >   <img className='h-10 w-12 ' src='https://cdn.discordapp.com/attachments/981974880054575124/1123262191181770762/eduImgWhite.ae822784.png' alt='Image' /></div>
        <h2 className='text-orange-600 ml-5'> 2020/2021</h2></div>
         
<div>
<p className='text-white  text-xl font-bold mt-8 ml-5 '>Bachelor of Technology</p>
<p className='text-gray-200  text-lg font-bold   ml-5'> Somerset School of Science </p>
</div></div>



       </ div>
       < div style={{ backgroundColor: '#f565394d' }} className='box mt-12  h-40  hover:bg-amber-600 pt-5 w-screen  rounded-2xl  '
       
     
       
       >
         <div className='flex'>
         <div className=' '>
        <div style={{backgroundColor: 'rgb(245, 101, 57)' }} className=' h-16 w-16 rounded-full  p-2 ml-5     '  >   <img className='h-10 w-12 ' src='https://cdn.discordapp.com/attachments/981974880054575124/1123262191181770762/eduImgWhite.ae822784.png' alt='Image' /></div>
        <h2 className='text-orange-600 ml-5'> 2021/2023</h2></div>
         
<div>
<p className='text-white  text-xl font-bold mt-8 ml-5 '> Master of cloud computing </p>
<p className='text-gray-200  text-lg font-bold    ml-5'> ofppt el adarissa</p>
</div></div>



       </ div>
       </div> ) : (<div className='flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col  '> <div className='w-4/6'>  <motion.div style={{ backgroundColor: '#f565394d' }} className='box w-60 h-40  hover:bg-amber-600 pt-5  rounded-2xl opacity-5 '
       
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
        <h2 className='text-orange-600 ml-5'> 2016/2019</h2></div>
         
<div>
 <p className='text-white  text-xl font-bold mt-8 ml-5 '>Higher Secondary Education</p>
 <p className='text-gray-200  text-lg font-bold   ml-5'> bno lbaytar  Middle School </p>
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
<p className='text-white  text-xl font-bold mt-8 ml-5 '>Bachelor of Technology</p>
<p className='text-gray-200  text-lg font-bold   ml-5'> Somerset School of Science </p>
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
<p className='text-white  text-xl font-bold mt-8 ml-5 '> Master of cloud computing </p>
<p className='text-gray-200  text-lg font-bold    ml-5'> ofppt el adarissa</p>
</div></div>
      </motion.div> </div>  <motion.div
      initial={{ opacity: 0  , x:-500}}
      whileInView={{ opacity: 1,
       x:0
      
      }}
      
      transition={{
          
          stiffness:6,
          
      }}
      
      
      
      style={{ backgroundImage: "url('https://cdn.discordapp.com/attachments/981974880054575124/1123593079878860912/undraw_certificate_re_yadi.png')", 
      backgroundSize: 'cover',}}  className='w-2/6  '> </motion.div> </div>)}
        
      
    </div>
  )
}
