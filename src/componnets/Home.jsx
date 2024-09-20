import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { ReactTyped} from "react-typed";

export default function Home() {
  return (
    <>

    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 z-10 ppp'>
        <div className='flex flex-col md:flex-row z-10 ppp'> 
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1 ppp'>
        <span className='text-xl'> Welcome in my Website</span>
        <div className='flex space-x-1  text-2xl md:text-4xl '> 
        <h1 >Hello I'm a  </h1>
        {/* <span className='text-red-700 font-bold'> Developer</span> */}
        <ReactTyped
         className='text-red-700 rtt'
          strings={[" ","Developer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
        </div>
        <br />
        <p className='text-sm md:text-md text-justify'>In essence, web development is a blend of creativity, problem-solving, and technical skill. It's a rewarding career that offers the opportunity to make a tangible impact on the world and enjoy a fulfilling professional journey.</p>
        <br />

<div className='flex flex-col items-center md:flex-row space-y-6 md:space-y-0 justify-between  ppp'> 
<div className='space-y-1 ppp'>
    <h1 className='font-bold space-y-2 text-center'>Available On</h1>
    <ul className='flex space-x-5 '>
   <li><a href="https://web.facebook.com/?_rdc=1&_rdr" target='_blank'><FaFacebook  className='text-2xl cursor-pointer bhb'/></a></li> 
    <li><a href="https://www.linkedin.com/signup" target='_blank'><FaLinkedin className='text-2xl cursor-pointer'/> </a> </li>
    <li><a href="https://www.youtube.com/" target='_blank'> <FaYoutube className='text-2xl cursor-pointer'/></a></li>
    <li><FaWhatsapp className='text-2xl cursor-default'/></li>
    </ul>
</div>

<div>
<h1 className='font-bold space-y-2 ppp'>Currently Working On</h1>
<ul className='flex space-x-5 ppp'>
   <li><SiMongodb  className='text-2xl cursor-pointer'/> </li> 
    <li><SiExpress className='text-2xl cursor-pointer'/> </li>
    <li><FaNodeJs  className='text-2xl cursor-pointer'/></li>
    <li><FaReact className='text-2xl cursor-pointer'/></li>
    </ul>
</div>
</div>
        </div>
        <div className='md:w-1/2 md:ml-48 md:mt-10 order-1'>
        <img src="https://scontent.flyp3-1.fna.fbcdn.net/v/t39.30808-1/392756391_1045064393511238_5888020480843983935_n.jpg?stp=c0.0.768.768a_dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEr5Sq6gOtdFd_0CXACS33gQ35zWP8k1KVDfnNY_yTUpSNaXb_HmI2tTD1b5KWgEUimKTsvSkZaJ22EzkGF58_-&_nc_ohc=aExyiHtUrOQQ7kNvgFijF8a&_nc_ht=scontent.flyp3-1.fna&_nc_gid=AtefmtGJWG12c4z3riuZV4D&oh=00_AYBByu4q3dONJ7UBjNxZs7NCReDm3WLmpvXRJs4HI3FnuA&oe=66F33391" className='rounded-full md:w-[450px] md:h-[450px] nmnn' alt="" />
        </div>
        </div>
    </div>
      <br />
      <hr />
    </>
  )
}
