import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear();
  return (<>
  <div className='bg-violet-600  text-white font-bold text-lg lg:text-xl w-full flex flex-col justify-center py-3'>
    <div className=' w-full flex justify-center'>
      <h2 >EasyShop</h2>
    </div>
    <div className='flex justify-center'>
      &#169; {year} EasyShop - <a href="mailto:shreyay4060@gmail.com">EasyShop</a>
    </div>
  </div>
  </>
  )
}
