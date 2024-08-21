import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const OrderConfirmation = () => {
    const navigate = useNavigate();

    return (
      <div className='h-[80vh] flex justify-center items-center flex-col gap-10'>
        <h1 className='text-4xl font-bold text-center'>Your Order Has Been Placed!</h1>
        <button className='bg-gradient-to-r from-yellow-600 to-yellow-800 p-3 rounded-lg text-white' onClick={()=> navigate('/')}>Back to Home Page!</button>
      </div>
  )
}

export default OrderConfirmation
