import React from 'react'
import search from '../assets/search.svg'
import mic from '../assets/mic.svg'
import lens from '../assets/lens.svg'

function Searchbar() {
  return (
    <div className='flex flex-row justify-center'>
        <div className='flex flex-row w-[600px] mt-16 rounded-3xl border'>
            <img className='pl-3' src={search} alt="search" />
            <input className='text-1xl pl-1 pt-3 pb-3 focus:outline-none w-[500px]'type="text" placeholder="Search..."/>
            <img className='pl-3 h-[24px] mt-3' src={mic} alt="search" />
            <img className='pl-1 h-[24px] mt-3 mr-4' src={lens} alt="search" />
        </div>
    </div>
  )
}

export default Searchbar