import React from 'react'

export const Hero = () => {
  return (
    <div className='bg-linear-to-r from-gray-900 to-gray-10 rounded-2xl px-9 py-24 mt-14 mx-10'>
        <h1 className='text-5xl font-bold text-blue-50'>Selamat Datang Di Sewa Pesta Kita!</h1>
        <p className='mt-5 text-blue-50'>Kami melayani berbagai layyanan sewa barang dan jasa di bidang penyedia alat event.</p>
        <button className='mt-5  text-amber-50 border-2 px-6 py-4 rounded-4xl hover:bg-amber-50 transition-colors hover:text-black'>Order Sekarang</button>
    </div>
  )
}
