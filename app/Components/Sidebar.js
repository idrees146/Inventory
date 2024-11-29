import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
  return (

    <div className="sidebar w-32 bg-blue-950 flex flex-col items-center gap-4 my-4 text-white h-[90vh]">

                   <Link href="/Dashboard"> <div className='cursor-pointer text-center flex justify-center flex-col items-center'>
                        <img width={45} className=' cursor-pointer mt-4  hover:scale-105' src="/dash.svg" alt="" /><span className=' cursor-pointer'  > Dashboard </span>
                    </div></Link>


                   <Link href="/Orders"><div className='cursor-pointer'>
                        <img width={45} className='cursor-pointer hover:scale-110' src="/orders.svg" alt="" /> <span className=' cursor-pointer'> Orders </span>

                    </div></Link> 


                </div>
  )
}

export default Sidebar