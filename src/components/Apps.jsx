import React from 'react'
import download from '../assets/download.jpg'
import gsearch from '../assets/gsearch.svg'
import gdrive from '../assets/gdrive.svg'
import gyt from '../assets/gyt.svg'
import gplay from '../assets/gplay.svg'
import gmaps from '../assets/gmaps.svg'
import gmail from '../assets/gmail.svg'
import gcalendar from '../assets/gcalendar.svg'
import gtranslate from '../assets/gtranslate.svg'
import gphotos from '../assets/gphotos.svg'
import gnews from '../assets/gnews.svg'
import gmeet from '../assets/gmeet.svg'
function Apps({appDrawer}) {
  return (
    <div>
        {appDrawer && 
        <div className='w-80 h-96 bg-gray-100 absolute z-50 top-13 right-3 flex justify-center p-3 overflow-auto rounded-lg'>
            <div className='grid grid-row-3 grid-cols-3 w-72 p-2'>
                <div className='w-18 h-24 bg-gray-100 hover:bg-white rounded-md flex flex-col justify-center'>
                    <img className='w-10 h-10 rounded-full ml-6' src={download} alt = "Account"/>
                    <h1 className='text-md text-black text-center mt-2.5'>Account</h1>
                </div>
                <div className='w-18 h-24 bg-gray-100 hover:bg-white rounded-md flex flex-col justify-center'>
                    <img className='w-10 h-10 rounded-full ml-6' src={gsearch} alt = "Search"/>
                    <h1 className='text-md text-black text-center mt-2.5'>Search</h1>
                </div>
                <div className='w-18 h-24 bg-gray-100 hover:bg-white rounded-md flex flex-col justify-center'>
                    <img className='w-10 h-10 rounded-full ml-6' src={gdrive} alt = "Drive"/>
                    <h1 className='text-md text-black text-center mt-2.5'>Drive</h1>
                </div>
                <div className='w-18 h-24 bg-gray-100 hover:bg-white rounded-md flex flex-col justify-center'>
                    <img className='w-10 h-10 rounded-full ml-6' src={gyt} alt = "Youtube"/>
                    <h1 className='text-md text-black text-center mt-2.5'>Youtube</h1>
                </div>
                <div className='w-18 h-24 bg-gray-100 hover:bg-white rounded-md flex flex-col justify-center'>
                    <img className='w-10 h-10 rounded-full ml-6' src={gplay} alt = "Play"/>
                    <h1 className='text-md text-black text-center mt-2.5'>Play</h1>
                </div>
                <div className='w-18 h-24 bg-gray-100 hover:bg-white rounded-md flex flex-col justify-center'>
                    <img className='w-10 h-10 rounded-full ml-6' src={gmaps} alt = "Maps"/>
                    <h1 className='text-md text-black text-center mt-2.5'>Maps</h1>
                </div>
                <div className='w-18 h-24 bg-gray-100 hover:bg-white rounded-md flex flex-col justify-center'>
                    <img className='w-10 h-10 rounded-full ml-6' src={gmail} alt = "Gmail"/>
                    <h1 className='text-md text-black text-center mt-2.5'>Gmail</h1>
                </div>
                <div className='w-18 h-24 bg-gray-100 hover:bg-white rounded-md flex flex-col justify-center'>
                    <img className='w-10 h-10 rounded-full ml-6' src={gcalendar} alt = "Calendar"/>
                    <h1 className='text-md text-black text-center mt-2.5'>Calendar</h1>
                </div>
                <div className='w-18 h-24 bg-gray-100 hover:bg-white rounded-md flex flex-col justify-center'>
                    <img className='w-10 h-10 rounded-full ml-6' src={gtranslate} alt = "Translate"/>
                    <h1 className='text-md text-black text-center mt-2.5'>Translate</h1>
                </div>
                <div className='w-18 h-24 bg-gray-100 hover:bg-white rounded-md flex flex-col justify-center'>
                    <img className='w-10 h-10 rounded-full ml-6' src={gphotos} alt = "Photos"/>
                    <h1 className='text-md text-black text-center mt-2.5'>Photos</h1>
                </div>
                <div className='w-18 h-24 bg-gray-100 hover:bg-white rounded-md flex flex-col justify-center'>
                    <img className='w-10 h-10 rounded-full ml-6' src={gnews} alt = "News"/>
                    <h1 className='text-md text-black text-center mt-2.5'>News</h1>
                </div>
                <div className='w-18 h-24 bg-gray-100 hover:bg-white rounded-md flex flex-col justify-center'>
                    <img className='w-10 h-10 rounded-full ml-6' src={gmeet} alt = "Meet"/>
                    <h1 className='text-md text-black text-center mt-2.5'>Meet</h1>
                </div>
                
            </div>
        </div>
        }
    </div>
  )
}

export default Apps