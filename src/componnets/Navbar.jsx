import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { ImCross } from "react-icons/im";
export default function Navbar() {
    const [menu,setmenu]=useState(false)
    
  return (
    <>
    <nav>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md left-0 right-0 top-0 z-50 bg-white fgb '>
<div className='flex justify-between items-center h-16 z-50'>

<div className='flex space-x-2 '>
    <img className='h-12 w-12 im rounded-full ' src="https://static.vecteezy.com/system/resources/thumbnails/028/560/488/small_2x/cybersecurity-hacker-with-a-concealed-face-wearing-a-hoodie-in-a-technology-themed-wallpaper-photo.jpg" alt="" />
    <h1 className='font-semibold text-xl cursor-pointer '>Sira<span className='text-green-500 text-2xl'>J</span>
    <p className='text-sm'>Web Developer</p></h1>
</div>
<div>

     <ul className='hidden md:flex space-x-4 fgg ppp'>
   <a href="#home"> <li>Home</li> </a> 
     <a href="#about"> <li>About</li></a>
     <a href="#port"><li>Portfolio</li> </a> 
     <a href="#project"><li>Projects</li> </a> 
     <a href="#team"><li>Team</li> </a> 
     <a href="#contact"><li>Contact us</li> </a>
    
    </ul>
    <div onClick={()=>setmenu(!menu)} className='md:hidden'> 
        { menu ?<ImCross  size={24}/>:<CiMenuBurger size={24} />
 } 
         </div>
   
    </div>
</div>
{
        menu && (
            <div>
    <ul className='md:hidden flex flex-col items-center justify-center h-screen font-bold space-y-4 '>
    <a href="#home"> <li>Home</li> </a> 
     <a href="#about"> <li>About</li></a>
     <a href="#port"><li>Portfolio</li> </a> 
     <a href="#project"><li>Projects</li> </a> 
     <a href="#team"><li>Team</li> </a> 
     <a href="#contact"><li>Contact us</li> </a>
    
    </ul>
</div>
        )
    }



      </div>
      </nav>
    </>
  )
}
