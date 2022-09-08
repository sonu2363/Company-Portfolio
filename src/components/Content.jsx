import React from 'react'
import df from './images/df.jpg'
import k from './images/k.jpg'
import th from './images/th.png' 
import b from './images/b.jpg'
import l from './images/l.jpg'
import z from './images/z.jpg'

const Content = () => {
  return (
    <div className='' >
        
        <div className=" content pt-10 px-20 grid gap-3 grid-cols-3  ">
        <div className='flex flex-col justify-center items-center rounded-md bg-white h-[150px] w-[150px] '>
            <img src={df} className='h-[70px] w-[70px]  rounded-full' alt=''/>
            <h5 className='text-white font-bold bg-green-600 mt-2  p-1 text-sm rounded-md'>Grow With Us</h5>
            </div>
        <div className='flex flex-col justify-center items-center rounded-md bg-white h-[150px] w-[150px]'>
            <img src={k} className='h-[70px] w-[70px]  rounded-full' alt=''/>
            <h5 className='text-white font-bold bg-green-600 mt-2 p-1 text-sm rounded-md'>Grow Your Sales</h5>
            </div>
 <div className='flex flex-col justify-center items-center rounded-md bg-white h-[150px] w-[150px] '>
            <img src={th} className='h-[70px] w-[70px]  rounded-full' alt=''/>
            <h5 className='text-white font-bold bg-green-600 mt-2 py-1 px-0.5 text-sm rounded-md'>Improve your Sales</h5>
            </div>
        <div className='flex flex-col justify-center items-center rounded-md bg-white h-[150px] w-[150px]'>
            <img src={l} className='h-[70px] w-[70px]  rounded-full' alt=''/>
            <h5 className='text-white font-bold bg-green-600 mt-2 p-1 rounded-md text-sm'>Service to clients</h5>
            </div>
        <div className='flex flex-col justify-center items-center rounded-md bg-white h-[150px] w-[150px]'>
            <img src={b} className='h-[70px] w-[70px]  rounded-full' alt=''/>
            <h5 className='text-white font-bold bg-green-600 mt-2 text-sm py-2 rounded-md'>Promote Your Content</h5>
            </div>
        <div className='flex flex-col justify-center items-center rounded-md bg-white h-[150px] w-[150px] h-'>
            <img src={z} className='h-[70px] w-[70px]  rounded-full' alt=''/>
            <h5 className='text-white font-bold bg-green-600 mt-2 p-1 rounded-md'>Generate Leads</h5>
            </div>
        </div>

        

        </div>
  )
}

export default Content