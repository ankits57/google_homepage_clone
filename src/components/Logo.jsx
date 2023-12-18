import React from 'react'
import Google from '../assets/google.svg'
function Logo() {
  return (
    <div className='flex flex-row justify-center mt-24'>
        <img className='scale-[2.7]' src={Google}/>
    </div>
  )
}

export default Logo