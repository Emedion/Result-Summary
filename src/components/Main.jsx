import React from 'react'
import Summary from './Summary'
import MeanScore from './MeanScore'

const Main = () => {
  return (

      <div className='h-full flex justify-center my-40 drop-shadow-xl'>
        <MeanScore />
        <Summary />
      </div>
  )
}

export default Main
