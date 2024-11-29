import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <>





            <div className="container flex " >

                <div className="sidebar w-32 bg-blue-950 flex flex-col items-center gap-4 my-4 text-white h-[90vh]">

                   <Link href="/Dashboard"> <div className='cursor-pointer text-center flex justify-center flex-col items-center'>
                        <img width={45} className=' cursor-pointer mt-4  hover:scale-105' src="/dash.svg" alt="" /><span className=' cursor-pointer'  > Dashboard </span>
                    </div></Link>


                   <Link href="/Orders"><div className='cursor-pointer'>
                        <img width={45} className='cursor-pointer hover:scale-110' src="/orders.svg" alt="" /> <span className=' cursor-pointer'> Orders </span>

                    </div></Link> 


                </div>
                <div className="matric"><img className='my-4' src="/matric.PNG" alt="" /></div>
                <div className="user text-bold hover:font-bold my-6 cursor-pointer  w-40">Muhammad Idrees</div>
            </div>

            <div className="mid flex absolute top-64 left-[10%]">
                <img src="/mid.PNG" alt="" />
            </div>





        </>
    )
}

export default page