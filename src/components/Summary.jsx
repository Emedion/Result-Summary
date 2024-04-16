import React from 'react'
import { FaBrain } from 'react-icons/fa'
import { FaBolt } from 'react-icons/fa6'
import { FaRegEye } from 'react-icons/fa'
import { FaRegCommentDots } from 'react-icons/fa'

const Summary = () => {
  return (
    <section className='w-96 px-10 py-8 mt-6'>
        <h2 className='text-slate-600 text-black-700 font-bold mb-4'>Summary</h2>
        <div className='text-center mt-3'>
            <div className='flex justify-between px-4 py-3 bg-red-50 h-12 rounded-xl my-3'>
                <div className='flex space-x-3'>
                    <FaBolt className='text-red-500 mt-1'/>
                    <p className='text-red-500 font-semibold text-sm'>Reaction</p>
                </div>
                <p><span className='font-bold'>80</span>/100</p>
            </div>

            <div className='flex justify-between px-4 py-3 rounded-xl h-12 bg-yellow-50 w-45 my-3 align-item'>
                <div className='flex space-x-3'>
                    <FaBrain className='text-yellow-500 mt-0.5' />
                    <p className='font-semibold text-sm text-yellow-500 '>Memory</p>
                </div>
                <p className='text-right'><span className='font-bold'>92</span>/100</p>
            </div>

            <div className='flex justify-between px-4 py-3 rounded-xl h-12 bg-green-50 my-3'>
                <div className='flex space-x-2'>
                    <FaRegCommentDots className='text-green-500 mt-1'/>
                    <p className='text-green-500'>Verbal</p>
                </div>
                <p><span className='font-bold'>61</span>/100</p>
            </div>

            <div className='flex justify-between px-4 mb-8 py-3 bg-blue-50 rounded-xl h-12 my-3'>
                <div className='flex space-x-3'>
                    <FaRegEye className='text-blue-500 mt-1'/>
                    <p className='font-semibold text-sm text-blue-500 '>Visual</p>
                </div>
                <p><span className='font-bold'>72</span>/100</p>
            </div>

            <div className='text-center rounded-full bg-blue-900 hover:bg-purple-800 w-45 px-6 h-10 text-white text-sm py-2'>Continue</div>
        </div>
      
    </section>
  )
}

export default Summary
