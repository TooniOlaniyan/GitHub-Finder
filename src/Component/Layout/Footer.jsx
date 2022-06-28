import React from 'react'
import {FaHashtag} from 'react-icons/fa'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
        <div className=" bg-gray-700">
           <div className=" flex flex-col  items-center py-5">
             <FaHashtag className='text-5xl rotate-60  mb-3'/> 
             <p className='text-2-xl'>TOONI</p>    
            <p>copyright @ {year}. All right reserved</p>
           </div>
        </div>
      
    </footer> 
  )
}

export default Footer