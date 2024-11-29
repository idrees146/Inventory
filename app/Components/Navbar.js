import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
   <>
   
   <div className="nav bg-blue-950 flex justify-between text-white h-14 items-center">
    <Link href="/"><div className="title px-4 text-2xl font-bold">Inventory Management System</div></Link> 
    <ul className='flex gap-4 px-4'>

       <Link href="/Dashboard"><li> <button className='bg-white text-black px-4 py-2 rounded-lg hover:bg-blue-400'>Inventory Manager</button></li></Link> 
       <Link href="/Access"> <li> <button className='bg-white text-black px-4 py-2 rounded-lg hover:bg-blue-400'>Access Control Manager</button></li></Link>
        
    </ul>
   </div>
   </>
  )
}

export default Navbar