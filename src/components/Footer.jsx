import React from 'react'

const Footer = () => {
  return (
    <div className='bg-red-400 mt-10 w-full'>
        <div className="footer m-4 p-10 flex space-x-8">
            <div className="item1 ">
                <h6 className='font-bold'>About Us</h6>
                <ul className='my-1 text-sm'>
                    <li>SS LLC</li>
                    <li>Our mission</li>
                  
                </ul>

            </div>
            <div className="item2">
            <h6 className='font-bold'>Need Help</h6>
                <ul className='my-1 text-sm'>
                    <li>Company Us</li>
                    <li>FAQs</li>
                    <li>Help and Support Forum</li>
                    <li>Knowledge base</li>
                  
                </ul>

            </div>
            <div className="item3">
            <h6 className='font-bold'>Legal</h6>

                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms and Conditions</li>
                   
                </ul>

            </div>
        </div>

    </div>
  )
}

export default Footer