import Link from 'next/link';
import React, { useState } from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
export default function ( {img,title,description,technologies,url}) {
const [i,seti]=useState(100)
const [is,setis ]= useState(0)

function hover (){
  seti(0.4)
   setis(100)
}
function nothover (){
  seti(100)
   setis(0) 
}
  
  return (
   
      <div onMouseEnter={hover } onMouseLeave={nothover} style={{backgroundColor:'rgb(255, 118, 77)'}} className=' h-96 w-80  mt-60  rounded-xl '> 
      <div  className='flex  text-white  justify-center mt-10 font-bold text-2xl '><h1 className='  '> {title} </h1></div>
      <div   className=' w-full h-60   transform duration-700   relative  ' style={{  backgroundSize: '100% 100%', /* ,display:is?'block':'none'*/}}>
        
        <img src={img} alt='ecomerce ' className=' absolute' style={{opacity:i}}></img>
       <div    className=' h-20 w-3/4 p-3 text-white  mt-10 transform  duration-1000 rounded-tr-xl rounded-r-xl rounded' style={{backgroundColor:'rgb(33, 33, 33)', opacity:is, transform: 'translateX(' + is + ')', }}  > {description}</div>
       
       <div    className=' h-20 w-3/5  p-4   text-white  text-sm mt-24 transform ml-40 duration-1000 rounded-xl' style={{backgroundColor:'rgb(33, 33, 33)', opacity:is, transform: 'translateX(' + is + ')', }}  > {technologies} </div>
       <div > <a href={url}  > <BsFillArrowRightCircleFill className='h-10  bottom-3 left-3 w-10 absolute transform  duration-1000 ' style={{opacity:is}}/> </a> </div>
         </div>
          
      </div>
     
  )
}
