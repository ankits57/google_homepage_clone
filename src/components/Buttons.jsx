import React from 'react'

function Buttons() {
  return (
    <>
    <div className='flex flex-row justify-center gap-10 mt-6'>
        <button className='bg-gray-100 pl-4 pr-4 pt-2 pb-2 rounded-md'>Google Search</button>
        <button className='bg-gray-100 pl-4 pr-4 pt-2 pb-2 rounded-md'>I'm Feeling Lucky</button>
    </div>
    <div className='flex flex-row justify-center gap-3 text-xs mt-7 text-blue-800'>
        <p className='text-black'>Google Offered in :</p>
        <p className='hover:underline'>हिन्दी</p>
        <p className='hover:underline'>বাংলা</p>
        <p className='hover:underline'>తెలుగు</p>
        <p className='hover:underline'>मराठी</p>
        <p className='hover:underline'>தமிழ்</p>
        <p className='hover:underline'>ગુજરાતી</p>
        <p className='hover:underline'>ಕನ್ನಡ</p>
        <p className='hover:underline'>മലയാളം</p>
        <p className='hover:underline'>ਪੰਜਾਬੀ</p>
    </div>
    </>
  )
}

export default Buttons