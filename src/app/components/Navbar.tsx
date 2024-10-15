import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className= 'bg-cyan-700 h-12'>
       <div className='text-white flex justify-between items-center'> 
           <h1 className='text-xl m-2 cursor-pointer' >Portfolio</h1>
           <ul className='flex space-x-3.5 mr-4 cursor-pointer'>
            <Link className='hover:text-blue-500' href="/" >Home</Link>
            <Link className='hover:text-blue-500' href="/" >About</Link>
            <Link className='hover:text-blue-500' href="/" >Skills</Link>
            <Link className='hover:text-blue-500' href="/" >Contact</Link>
            
           </ul>
            
            
     </div>
        
       
        
    </div>
  )
}

export default Navbar