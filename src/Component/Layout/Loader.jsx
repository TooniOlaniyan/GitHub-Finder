import React from 'react'
import Spinner from '../Assets/Spinner.gif'

function Loader() {
  return (
    <div className='w-100 mt-20'>
        <img className='text-center mx-auto' width={200} src={Spinner} alt="" />
    </div>
  )
}

export default Loader