 
 
 
 

import './Landing.css';
 
 
import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    
} from 'react-icons/fa';
 

function Landing() {
     

  

   

    return (
        <div className='landing'>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: 'rgb(245, 101, 57)'}}
                >
                    <div className='lcl--content'>
                      
                            <a
                                href= ""
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='landing--social'
                                    style={{ color:'rgb(33,33,33)'}}
                                    aria-label='LinkedIn'
                                />
                            </a>
                      
                      
                            <a
                                href='https://github.com/Abdessamadhamdaoui'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className='landing--social'
                                    style={{ color: 'rgb(33,33,33)'}}
                                    aria-label='GitHub'
                                />
                            </a>
                       
                      
                            <a
                                href='https://twitter.com/metararity?t=RZGXgq0KTkAiUs2nZvA-7A&s=09'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaTwitter
                                    className='landing--social'
                                    style={{ color: 'rgb(33,33,33)' }}
                                    aria-label='Twitter'
                                />
                            </a>
                     
                      
                        
                    </div>
                </div>
                <img
                    src='https://cdn.discordapp.com/attachments/796024617835036693/1122166009130926080/IMG-20220705-WA0033.jpg'
                    alt=''
                    className='landing--img'
                    style={{
                        opacity: `    '1'}`,
                        borderColor: 'rgb(33,33,33)'
                    }}
                />
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: 'rgb(33,33,33)' }}
                >
                    <div
                        className='lcr--content'
                        style={{ color:'#eaeaea' }}
                    >
                        <h6>wev devloper</h6>
                        <h1>hamdaoui abde</h1>
                        <p> Hello, I'm Abdessamad Hamdaoui, a talented Full Stack Developer with a strong passion for creating innovative web applications. Based in Morocco, Africa, I have honed my skills in frontend and backend development, making me proficient in delivering end-to-end solutions..</p>

                        <div className='lcr-buttonContainer'>
                         
                        <button className='h-16 w-40 border-2 text-orange-600 border-orange-600 rounded-full hover:bg-orange-600 text-xl hover:text-white transition duration-2000 '> <a download href="/abdessamads_Resume_5_230702_003121.pdf">download cv </a>     </button>
                          
                        <button className='bg-orange-600 text-black h-16 w-40 rounded-full hover:bg-transparent hover:border-2 hover:border-white  hover:text-white text-xl'> <a href="#contact" >contact</a> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
