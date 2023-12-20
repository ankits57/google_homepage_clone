import React, { useState } from 'react'
import flask from '../../src/assets/flask.svg'
import apps from '../../src/assets/apps.svg'
import download from '../assets/download.jpg'

function Topbar({appDrawer, setAppDrawer}) {
  
  return (
    <>
      <div className='flex flex-row justify-end mr-4 gap-2 font-sans'>
        <h1 className='text-sm mt-2.5 mr-1 hover:underline'>Gmail</h1>
        <h1 className='text-sm mt-2.5 mr-3 hover:underline'>Images</h1>
        <img className='p-3 hover:bg-slate-100 hover:rounded-full' src={flask} alt="Experiment" />
        <img className=' p-3 hover:bg-slate-100 hover:rounded-full' src={apps} alt="Apps" onClick={()=>{setAppDrawer(!appDrawer)}} />
        <img className='rounded-full mt-2 h-8 w-8' src={download} alt="user"/>
      </div>
        
    </>
  )
}

export default Topbar