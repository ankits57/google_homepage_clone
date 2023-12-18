import React from 'react'
import flask from '../../src/assets/flask.svg'
import apps from '../../src/assets/apps.svg'
import download from '../assets/download.jpg'

function Topbar() {
  return (
    <>
      <div className='flex flex-row justify-end mr-4 gap-2 font-sans'>
        <h1 className='text-sm mt-2.5 mr-1'>Gmail</h1>
        <h1 className='text-sm mt-2.5 mr-5'>Images</h1>
        <img className='p-2 hover:bg-slate-100 hover:rounded-full' src={flask} alt="Experiment" />
        <img className=' p-2 hover:bg-slate-100 hover:rounded-full' src={apps} alt="Apps" />
        <img className='rounded-full m-1 mt-2' src={download} alt="user"/>
      </div>
        
    </>
  )
}

export default Topbar