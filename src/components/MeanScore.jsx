import React from 'react'

const MeanScore = () => {
  return (
    <section className='bg-gradient-to-b from-blue-600 to-blue-900 text-white rounded-xl max-w-sm space-x-3'>
      <h2 className='text-slate-300 mb-4 w-96 mt-14 font-semibold text-center'>Your Result</h2>
      <div className='mb-8'>
        <div className='mx-auto rounded-full w-32 h-32 bg-gradient-to-t  bg-blue-900 text-center'>
          <h4 className='pt-9 text-5xl font-bold text-center '>76</h4>
          <p className='text-slate-400 text-sm '>of 100</p>
        </div>
      </div>

      <div>
        <h2 className='text-center text-2xl font-semibold mb-4'>Great !</h2>
        <p className='text-center text-sm text-slate-400 w-64 mx-auto'>You socred higher than 65% of the people who have taken these tests.</p>
      </div>
    </section>
  )
}

export default MeanScore
