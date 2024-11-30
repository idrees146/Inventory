import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <>

  <div className="title text-3xl text-center font-bold my-14">Inventory Management System</div>


      <div className="container flex justify-center  p-4">

        <div className="form  bg-pink-400 p-6 rounded-xl">

          <p className="my-4">Login to your dashboard</p>

          <div className="flex items-center my-4 justify-center dark:bg-gray-800">
            <button class="px-4 bg-white py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">

              <img loading="lazy" alt="google logo" className="w-6 h-6" src="/google.png"  />

              <span>Login with Google</span>
            </button>
          </div>


          <p>Email</p>
          <input type="email" placeholder="Please Enter Your Email" className="text-xl my-4 rounded-lg  w-[300px] p-2" />
          <p>Password</p>
          <input type="password" placeholder="Please Enter Your Password" className="text-xl my-4 rounded-lg  w-[300px] p-2" />

          <br />

          <div className="flex justify-center">
          <Link href="/Dashboard"> <button className="bg-blue-900 rounded-lg  w-[300px] p-2 my-3 text-white">Login</button></Link>
          </div>


        </div>



        <div className="cover"><img width={450} src="/system.jpg" alt="" /></div>

      </div>
    </>
  );
}
