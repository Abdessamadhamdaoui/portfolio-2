import React from 'react'
  
export default function Secend() {
  return (
    <div>
      <div className='flex items-center   justify-center flex-col'>

        <div className='h-10   w-10/12 flex   mt-14 '>
            <div style={{backgroundColor:'rgb(245, 101, 57)',borderRadius:'50%'}} className='h-[12px] w-[12px]  '></div>
            <div style={{backgroundColor:'rgb(245, 101, 57)',borderRadius:'50%'}} className='h-[12px] w-[12px] ml-3  '></div>
            <div style={{backgroundColor:'rgb(245, 101, 57)',borderRadius:'50%'}} className='h-[12px] w-[12px] ml-3  '></div>
            <div style={{backgroundColor:'rgb(245, 101, 57)',}} className='h-[12px] w-full ml-3 rounded-2xl  '></div>

        </div>
        </div>
        <div className='mt-40 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lx:grid-cols-2 2lx:grid-cols-2  xl:gap-40 lg:gap-40 md:gap-80 sm:gap-80 xs:gap-96  xs:grid-cols-1  '>

<div className='w-full h-[300px] ml-40 md:w-4/5  xs:ml-5 sm:ml-5 md:ml-20 lg:ml-20'>
  <h1 style={{ color: 'rgb(245, 101, 57)' }} className='font-bold text-8xl'> who I  am</h1>
  <h2 className='text-white text-2xl pr-14 mt-3'>My name's hamdaoui. I'm a web designer and developer based in Morocco, Africa.
    <br />
    <br />
    During the day, I work as a lead developer at a local agency, and in the evening, I work on freelance projects and utilize the time to build my own products. I spend my leisure hours writing articles and poetry. Right now, I'm also trying my hand at machine learning and AI. I love to learn and explore new arenas.
  </h2>
</div>

<div className='w-full md:w-3/5 h-[500px] mb-20  md:ml-20    lg:ml-20 lg:mt-0 xl:mt-0 md:mt-0   xl:ml-20   sm:ml-20  xs:ml-10 xs:mt-40 xs:w-80  ' style={{ backgroundImage: 'url(https://media.discordapp.net/attachments/981974880054575124/1122529984729325568/undraw_feeling_proud_qne1.png?width=497&height=468)', backgroundSize: 'cover' }}>

</div>
</div>


     
    
    </div>
  )
}
