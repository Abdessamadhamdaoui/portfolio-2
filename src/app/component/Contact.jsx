import React from 'react'

export default function Contact() {
  return (
    <div className='mt-80' id='contact'>
      
<div className='  xl:ml-20  lg:ml-20 md:ml-20 sm:ml-20 xs:ml-0  text-6xl font-bold mt-40' style={{color:'rgb(255, 118, 77)'}}> contact </div>


<div className=' p-20 flex flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-28'>
<div className='xl:w-2/5 lg:w-2/5 md:w-2/5 h-96  '>
<div className="input-container w-full">
<label style={{color:'#f56539', transform: 'translate(25px,50%)',backgroundColor:'rgb(33,33,33)'}} for="Email" className="inline-flex  px-2    text-md font-semibold  jss111" s >Name</label>
  <input style={{borderColor:'#f56539',backgroundColor:'transparent'}}  type="text" name="Name" className="text-gray-300 border-4 w-full    transition duration-200 ease-in-out font-primary font-medium form-input h-12 px-4  rounded-full" value=""/>
  </div>
<div className="input-container mt-5 w-full">
  <label style={{color:'#f56539', transform: 'translate(25px,50%)',backgroundColor:'rgb(33,33,33)'}} for="Email" className="inline-flex  px-2    text-md font-semibold  jss111" s >Email</label>
  <input style={{backgroundColor:'transparent',borderColor:'#f56539'}} placeholder="abde@hamd.com" type="email" name="Email" className="text-gray-300 border-4 w-full     transition duration-200 ease-in-out font-primary font-medium form-input h-12 px-4  rounded-full" value=""/>
  </div>
  <div className="input-container mt-5 w-full">
  <label style={{color:'#f56539', transform: 'translate(25px,50%)',backgroundColor:'rgb(33,33,33)'}} for="Email" className="inline-flex  px-2    text-md font-semibold  jss111" s >message</label>
  <textarea style={{backgroundColor:'transparent',borderColor:'#f56539'}} placeholder="Type your message...." type="text" name="Message" className="text-gray-300 border-4 w-full   transition duration-200 ease-in-out font-primary font-medium form-input h-40 px-4  rounded-2xl"> </textarea>
  </div>
  <button style={{}} className='mt-5 w-28 text-black rounded-full h-12 p-2 hover:bg-white hover:text-black transform duration-700 bg-orange-600 ml-16'> submite
  </button>

</div>
<div className='xl:w-3/5 lg:w-3/5 md:w-3/5 xs:w-full  h-96  '>

  <div className='mt-4'>
    <a href='mailto:hamdaouia071@gmail.com ' className='flex  text-2xl gap-7     '> 
     <svg className='h-10 w-10 bg-orange-600 rounded-full p-2  hover:bg-white transform duration-500  ' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg> 
   <span className='text-gray-300'> hamdaouia071@gmail.com </span> </a>
  </div>
  <div className='mt-8'>
    <a href='tel:+212671799710 ' className='flex  text-2xl gap-7     '> 
    <svg className='h-10 w-10 bg-orange-600 rounded-full p-2  hover:bg-white transform duration-500  ' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
   <span className='text-gray-300'>  0671799710  </span> </a>
  </div>
  <div className='mt-8'>
    <p className='flex  text-2xl gap-7     '> 
    <svg className='h-10 w-10 bg-orange-600 rounded-full p-2  hover:bg-white transform duration-500  ' stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
   <span className='text-gray-300'> morroco,fes wed fes </span> </p>
  </div>
  <div className='flex mt-16 gap-5'>
 
<a href='https://instagram.com/abdehamdaouia1?igshid=MzNlNGNkZWQ4Mg=='>
<svg  className='h-10 w-10 bg-orange-600 rounded-full p-2  hover:bg-white transform duration-500  ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
</a>
<a href='https://github.com/Abdessamadhamdaoui'>
<svg  className='h-10 w-10 bg-orange-600 rounded-full p-2  hover:bg-white transform duration-500  ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
</a>
 
  </div>
</div>
</div>
    </div>
  )
}
