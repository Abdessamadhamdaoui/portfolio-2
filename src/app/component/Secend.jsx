import React, { useContext } from 'react';

import './About.css';
 
import { aboutData } from '../data/aboutData'



function Secend() {

    
    return (
      <>
      <div className='flex justify-center align-middle'> <div className='h-10   w-10/12 flex   mt-14 '>
      <div style={{backgroundColor:'rgb(245, 101, 57)',borderRadius:'50%'}} className='h-[12px] w-[12px]  '></div>
      <div style={{backgroundColor:'rgb(245, 101, 57)',borderRadius:'50%'}} className='h-[12px] w-[12px] ml-3  '></div>
      <div style={{backgroundColor:'rgb(245, 101, 57)',borderRadius:'50%'}} className='h-[12px] w-[12px] ml-3  '></div>
      <div style={{backgroundColor:'rgb(245, 101, 57)',}} className='h-[12px] w-full ml-3 rounded-2xl  '></div>

  </div></div>
     
        <div className="about" id="about" style={{backgroundColor:  ''}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: ''}}></div>
              <div className="style-circle" style={{backgroundColor:  ''}}></div>
              <div className="style-line" style={{backgroundColor: ''}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 className='font-bold' style={{color: 'rgb(245, 101, 57)'}}>{aboutData.title}</h2>
                    <p style={{color: ''}}>{aboutData.description1}<br/><br/>{aboutData.description2}</p>
                </div>
                <div className="about-img">
                    <img 
                        src={aboutData.image}  
                        alt="" 
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default Secend
