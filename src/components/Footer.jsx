import React from 'react'

function Footer() {
  return (
    <div className='bg-gray-200 sticky top-[100vh]'>
        <h1 className='pt-3 pb-3 pl-5'>India</h1>
        <hr class="h-px border-0 bg-gray-300"></hr>
        <div className='flex flex-row justify-between'>
        <div className='flex flex-row gap-5 pt-3 pb-3 pl-5'>
            <h1>About</h1>
            <h1>Advertising</h1>
            <h1>Business</h1>
            <h1>How Search works</h1>
        </div>
        <div className='flex flex-row gap-5 pt-3 pb-3 pl-5 pr-5'>
            <h1>Privacy</h1>
            <h1>Terms</h1>
            <h1>Settings</h1>
        </div>
        </div>
        
    </div>
  )
}

export default Footer