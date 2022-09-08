import React from 'react'




const Navbar = () => {
  return (
    <>
    <div className='bg-red-400 '>

    <div className='container  w-full  h-[40px]  justify-between items-center'>
      <nav className='md:p-6 p-3'>
        <a href='/' className='text-black md:text-xl px-2 font-bold'>Home</a>
        <a href='/' className='text-black md:text-xl px-2 font-bold'>About</a>
        <a href='/' className='text-black md:text-xl px-2 font-bold'>Contact Us</a>
 
      </nav>
    
      


    </div>
    <div className='flex flex-col  justify-center  items-center '>
      <h1 className=' text-white font-bold text-2xl '>SS industries</h1>
      <h3 className='text-gray-700  text-xl font-bold'>Grow up with the best in the industry</h3>
    </div>
    </div>

    </>
  )
}

export default Navbar